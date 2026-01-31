import { performance } from 'perf_hooks';

// Mock types
interface ArticleItem {
  id: string;
  title: string;
  date: string;
  [key: string]: any;
}

interface Feed {
  title: string;
  items: ArticleItem[];
}

// Configuration
// Using a reasonably large dataset to clearly show O(N^2) impact
// 100 feeds * 200 items = 20,000 total items
// In O(N^2), the spread copies (200 + 400 + 600... + 19800) items
const NUM_FEEDS = 100;
const ITEMS_PER_FEED = 200;

console.log(`Generating mock data: ${NUM_FEEDS} feeds with ${ITEMS_PER_FEED} items each...`);

// Generate mock data
const mockFeeds: Feed[] = Array.from({ length: NUM_FEEDS }, (_, i) => ({
  title: `Feed ${i}`,
  items: Array.from({ length: ITEMS_PER_FEED }, (_, j) => ({
    id: `feed-${i}-item-${j}`,
    title: `Article ${j} from Feed ${i}`,
    date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    content: 'Some content '.repeat(10)
  }))
}));

const totalItems = NUM_FEEDS * ITEMS_PER_FEED;
console.log(`Total items to process: ${totalItems}`);
console.log('----------------------------------------');

// Mock helper function similar to the real one
const findSourceConfig = (title: string) => {
  // Simulate some trivial lookup work
  return { type: 'ARTICLE', category: 'TECH' };
};

// Slow Method: O(N^2) due to spread in reduce
// Replicates current logic in useArticles.ts
function runSlowMethod() {
  const start = performance.now();

  const result = mockFeeds.reduce((prev: any[], curr) => {
    const sourceConfig = findSourceConfig(curr.title);

    return [
      ...prev,
      ...curr.items.map(item => ({
        ...item,
        rssTitle: curr.title,
        contentType: sourceConfig?.type || 'ARTICLE',
        sourceCategory: sourceConfig?.category,
      }))
    ];
  }, []);

  const end = performance.now();
  return { time: end - start, result };
}

// Fast Method: O(N) using flatMap
function runFastMethod() {
  const start = performance.now();

  const result = mockFeeds.flatMap(curr => {
    const sourceConfig = findSourceConfig(curr.title);

    return curr.items.map(item => ({
      ...item,
      rssTitle: curr.title,
      contentType: sourceConfig?.type || 'ARTICLE',
      sourceCategory: sourceConfig?.category,
    }));
  });

  const end = performance.now();
  return { time: end - start, result };
}

// Alternative Fast Method: Array.push
// Often slightly faster than flatMap because it avoids intermediate array creation overhead
function runFastMethodPush() {
    const start = performance.now();
    const result: any[] = [];

    for (const curr of mockFeeds) {
        const sourceConfig = findSourceConfig(curr.title);
        const items = curr.items.map(item => ({
            ...item,
            rssTitle: curr.title,
            contentType: sourceConfig?.type || 'ARTICLE',
            sourceCategory: sourceConfig?.category,
        }));
        result.push(...items);
    }

    const end = performance.now();
    return { time: end - start, result };
}

// Run benchmarks
console.log('Running Slow Method (reduce + spread)...');
// Force garbage collection if possible (node --expose-gc) to make it fair, but usually not needed for this magnitude
const slow = runSlowMethod();
console.log(`Slow Method Time: ${slow.time.toFixed(2)}ms`);

console.log('\nRunning Fast Method (flatMap)...');
const fast = runFastMethod();
console.log(`Fast Method Time: ${fast.time.toFixed(2)}ms`);

console.log('\nRunning Fast Method (push)...');
const fastPush = runFastMethodPush();
console.log(`Fast Method (push) Time: ${fastPush.time.toFixed(2)}ms`);

// Verification
console.log('\n----------------------------------------');
console.log('Verification:');
console.log(`Slow count: ${slow.result.length}`);
console.log(`Fast count: ${fast.result.length}`);

// content check
const firstMatch = JSON.stringify(slow.result[0]) === JSON.stringify(fast.result[0]);
const lastMatch = JSON.stringify(slow.result[totalItems-1]) === JSON.stringify(fast.result[totalItems-1]);

console.log(`Content match check: ${firstMatch && lastMatch ? 'PASS' : 'FAIL'}`);

const speedup = slow.time / fast.time;
console.log(`\nSpeedup factor (vs flatMap): ${speedup.toFixed(2)}x`);

if (speedup > 5) {
    console.log('SUCCESS: Optimization provides significant performance improvement.');
} else {
    console.log('NOTE: Improvement observed but may depend on dataset size.');
}
