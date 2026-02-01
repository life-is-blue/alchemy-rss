
import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type FeedCategory = 'article' | 'blog' | 'video' | 'social';

export interface RssItem {
  id: string;
  title: string;
  link: string;
  pubDate: string; // Mapped from date/publishDateTimeStr
  content: string;
  snippet: string;
  feedTitle: string;
  guid: string;
  category: FeedCategory;
  archive_path?: string; // New: Path to full JSON content
  isLoaded?: boolean;    // New: Track if full content is loaded
}

export interface Feed {
  url: string;
  title: string;
  items: RssItem[];
  category: FeedCategory;
}

// Alchemy Protocol Interfaces
interface AlchemyLinkGroup {
  title: string;
  items: AlchemyIndexItem[];
}

interface AlchemyIndexItem {
  id: string;
  title: string;
  link: string;
  date: string;
  oneSentenceSummary?: string;
  summary?: string;
  archive_path?: string;
  category: string;
  resourceType: string;
  sourceName: string;
  publishDateTimeStr?: string;
}

interface AlchemyArchive {
  id: string;
  title: string;
  content: string;
  // ... other fields
}

@Injectable({
  providedIn: 'root'
})
export class RssService {
  feeds: WritableSignal<Feed[]> = signal([]);
  loading: WritableSignal<boolean> = signal(false);

  private readonly INDEX_URL = '/data/links.json';

  constructor(private http: HttpClient) {
    this.loadAlchemyData();
  }

  async loadAlchemyData() {
    this.loading.set(true);
    try {
      const bust = `?t=${new Date().getTime()}`;
      const groups = await firstValueFrom(
        this.http.get<AlchemyLinkGroup[]>(this.INDEX_URL + bust).pipe(
          catchError(err => {
            console.warn("Alchemy index not found, using empty state.", err);
            return of([]); 
          })
        )
      );

      const mappedFeeds: Feed[] = groups.map(group => {
        // Infer category from first item or default
        const firstItem = group.items[0];
        // Simple mapping from Alchemy resourceType/Category to our FeedCategory
        let cat: FeedCategory = 'article';
        if (firstItem) {
          const t = (firstItem.resourceType || '').toLowerCase();
          const c = (firstItem.category || '').toLowerCase();
          if (t.includes('video')) cat = 'video';
          else if (c.includes('blog') || t.includes('blog')) cat = 'blog';
          else if (c.includes('social') || t.includes('social')) cat = 'social';
        }

        return {
          title: group.title,
          url: '', // Not strictly needed for display
          category: cat,
          items: group.items.map(item => ({
            id: item.id,
            guid: item.id,
            title: item.title,
            link: item.link,
            pubDate: item.publishDateTimeStr || item.date || new Date().toISOString(),
            // Index only has summary/snippet. Content is lazy loaded.
            content: '', 
            snippet: item.summary || item.oneSentenceSummary || '',
            feedTitle: group.title,
            category: cat,
            archive_path: item.archive_path,
            isLoaded: false
          }))
        };
      });

      this.feeds.set(mappedFeeds);
    } catch (e) {
      console.error("Failed to load Alchemy data", e);
    } finally {
      this.loading.set(false);
    }
  }

  // Lazy load content for Reader
  async getArticleContent(item: RssItem): Promise<string> {
    // 1. If already loaded or local content exists and no archive path, return it.
    if (item.content && (item.isLoaded || !item.archive_path)) {
      return item.content;
    }

    // 2. Try Archive Path
    if (item.archive_path) {
      try {
        // Ensure path starts with leading slash for root-relative access
        let fetchPath = item.archive_path;
        if (!fetchPath.startsWith('/')) {
           fetchPath = '/' + fetchPath;
        }

        const archive = await firstValueFrom(this.http.get<AlchemyArchive>(fetchPath));
        if (archive && archive.content) {
          // Update the item in store to cache it
          item.content = archive.content;
          item.isLoaded = true;
          return archive.content;
        }
      } catch (e) {
        console.warn(`Archive load failed for ${item.archive_path}`, e);
      }
    }

    // 3. Fallback: Proxy / API Reader
    // This is "Dynamic Read" from protocol
    try {
       // Use the Alchemy reader API endpoint
       const proxyUrl = `/api/reader?url=${encodeURIComponent(item.link)}`;
       const text = await firstValueFrom(this.http.get(proxyUrl, { responseType: 'text' }));
       return text;
    } catch (e) {
       console.error("Fallback reader failed", e);
       return "Failed to load content. Please visit the source link.";
    }
  }
}
