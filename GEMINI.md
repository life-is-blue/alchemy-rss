# Alchemy RSS

> **Context for Gemini Agents**
> This file contains critical project documentation. Read this first to understand the system architecture, conventions, and development workflows.

## Project Overview

Alchemy RSS is a **Data Aggregation and Archiving Platform** designed to curate high-quality technical content. It operates as a "Digital Book," transforming fragmented RSS feeds into a structured, searchable, and aesthetically pleasing knowledge base.

**Core Value Proposition:**
- **Hybrid Sourcing:** Aggregates content from **BestBlogs API** (rich metadata, AI summaries) and standard **RSS feeds**.
- **Static Archiving:** Permanently stores full-text content as JSON, decoupling reading from the original source availability.
- **AI-Enhanced:** Leverages AI for summarization, scoring, and smart tagging.
- **Modern Reader:** A Nuxt 4-based frontend offering a "Digital Paper" reading experience (e.g., similar to WeChat Reading).

## Architecture

The system follows a **Static-First, Serverless** architecture.

### 1. Data Pipeline (The Crawler)

The crawler runs via GitHub Actions (every 2 hours) or manually.

```mermaid
graph TD
    A[Orchestrator (update.js)] --> B(Parallel Groups)
    B --> C[RSS Group]
    B --> D[API Group]
    
    C -->|rss-parser| E[Standard RSS Feeds]
    D -->|api-fetcher.js| F[BestBlogs API]
    
    subgraph "Rate Limiting Strategy"
    F -- "Exp. Backoff + Jitter" --> F
    end
    
    E --> G[Index Update (links.json)]
    F --> G
    F --> H[Full Text Archive (data/articles/YYYY/MM/*.json)]
```

- **API-First Hybrid Strategy:** 
    - **BestBlogs API:** Primary source. Provides full text, AI summary, tags, and score. These are archived permanently.
    - **RSS Feeds:** Secondary source. primarily for indexing external blogs.
- **Concurrency:** RSS feeds are fetched in parallel. API requests are rate-limited (limit=2) with exponential backoff to handle 429s.

### 2. Frontend (The Reader)

The frontend is a **Nuxt 4** application deployed on Vercel.

- **Static First:** Tries to load article content from the static CDN (`/data/articles/...`) first.
- **Graceful Fallback:** If the static file is missing (fresh content), it falls back to a Serverless Function (`/api/reader`) to fetch real-time data.
- **State Management:** Uses module-level reactive refs (e.g., `useReadingSettings.ts`) for global state, avoiding complex stores like Pinia unless necessary.

## Tech Stack

### Frontend (`/site`)
- **Framework:** Nuxt 4 (`compatibilityVersion: 4`)
- **UI Library:** Vue 3
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite`)
- **Language:** TypeScript
- **Icons:** SVG assets

### Backend / Crawler (`/server`)
- **Runtime:** Node.js
- **Key Libs:** `rss-parser`, native `fetch`
- **Orchestration:** Custom scripts (`update.js`)

### Infrastructure
- **Hosting:** Vercel (Static Site + Serverless Functions)
- **CI/CD:** GitHub Actions (Scheduled Crawling)
- **Data Storage:** Git Repository (JSON files in `/data`)

## Key Directories

| Directory | Purpose |
| :--- | :--- |
| `site/` | **Frontend Root**. Nuxt 4 application. |
| `site/app/` | Nuxt 4 app source (pages, components, composables). |
| `server/` | **Crawler Root**. Node.js scripts for fetching and archiving. |
| `server/update.js` | Main entry point for the crawler. |
| `server/api-fetcher.js` | Handles BestBlogs API communication with rate limiting. |
| `server/tag-classifier.js`| Logic for mapping raw tags to navigation categories. |
| `data/` | **Data Store**. Contains config and archived content. |
| `data/rss.json` | Configuration for data sources (API & RSS). |
| `data/links.json` | Main index file consumed by the frontend. |
| `data/articles/` | Archived article content, organized by YYYY/MM. |
| `docs/` | Project documentation (Architecture, Backlog). |

## Development Workflows

### 1. Frontend Development (`/site`)

```bash
cd site
pnpm install
pnpm dev        # Starts local dev server
pnpm generate   # Static build
```

### 2. Crawler Development (`/server`)

```bash
cd server
pnpm install
pnpm run once   # Runs a single fetch cycle (useful for testing)
```

### 3. Environment Variables

Create `.env` files where necessary.

- **`BESTBLOGS_API_KEY`**: Required for the crawler to fetch from BestBlogs.
- **`GITHUB_TOKEN`**: Required for CI/CD operations (optional locally).

## Coding Conventions

- **Visual Style:** "Digital Book" aesthetic. Use `backdrop-filter`, high contrast text (#202124), and "paper" backgrounds (#EDF0F2).
- **Nuxt 4 Structure:** Follow the new Nuxt 4 flat structure (inside `app/` directory).
- **Tailwind 4:** Use the new CSS-first configuration approach where possible.
- **Data Safety:** Never modify `data/articles` manually. These are generated artifacts.
- **Comments:** Prefer explaining *why* (architectural decisions) over *what* (syntax).

## Important Files

- **`CLAUDE.md`**: Contains legacy AI instructions and context (useful reference).
- **`docs/architecture.md`**: Detailed breakdown of the system design.
- **`site/nuxt.config.ts`**: Frontend configuration (Tailwind, Compatibility).
- **`data/rss.json`**: The "Control Center" for what content gets ingested.
