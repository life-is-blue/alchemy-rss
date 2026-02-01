# Alchemy RSS v2: "Project Porcelain" (WeChat Reading Redesign)

## HR Eng

| Alchemy RSS v2: "Project Porcelain" |  | **Summary**: A complete frontend overhaul of Alchemy RSS to mimic the clean, distraction-free, and high-efficiency aesthetic of WeChat Reading (Weread). |
| :---- | :---- | :---- |
| **Author**: Pickle Rick | **Status**: Approved | **Context**: [Alchemy RSS](../../GEMINI.md) |

## Introduction

The current frontend of Alchemy RSS is a "visual disaster" (User's words, and factually correct). It suffers from inconsistent spacing, bizarre color choices, and a "bootstrap-era" layout. This project aims to elevate the UI to a "Digital Porcelain" standard—smooth, refined, and incredibly efficient, taking direct inspiration from WeChat Reading Web.

## Problem Statement

**Current Process:** Users face a cluttered interface with confusing navigation (dual headers), poor typography, and efficient space usage.
**Pain Points:**
-   **Visual Noise:** Inconsistent margins/padding make the UI feel "broken."
-   **Typography:** Reading fonts are not optimized for long-form text.
-   **Navigation:** Top + Side navigation conflicts; lack of clear hierarchy.
-   **Efficiency:** List views are too bulky for scanning high-volume RSS feeds.

## Objective & Scope

**Objective:** Refactor the entire frontend (`site/`) to achieve a unified, aesthetic, and high-efficiency RSS reading experience.
**Ideal Outcome:** A user opens the app and feels the "Zen" of WeChat Reading. Navigation is intuitive, reading is immersive, and "scanning" feeds is rapid.

### In-scope (The "Porcelain" Standard)
-   **Design System:** Implement a strict CSS variable system for "WeChat Palette" (Colors, Spacing, Typography).
-   **Layout Refactor:**
    -   **Desktop:** Fixed Left Sidebar (Navigation) + Flexible Main Content (Feed/Reader).
    -   **Mobile:** Responsive Drawer Navigation.
-   **View Modes:**
    -   **Card View (Discovery):** Rich preview, large images (for "Exploring").
    -   **List View (Efficiency):** Compact, text-heavy (for "Processing").
-   **Reader Experience:**
    -   Centralized column with refined typography (`optically-adjusted` margins).
    -   Seamless entry/exit animation.
-   **Infinite Scroll:** Automatic loading of content with performance virtualization.

### Not-in-scope
-   Backend changes (Crawler logic remains untouched).
-   User Accounts / Cloud Sync (Local state only for now).

## Product Requirements

### Critical User Journeys (CUJs)
1.  **The "Morning Scan"**: User opens app -> Scans "All Articles" in **List View** -> Quickly marks uninteresting items as read -> Clicks interesting title -> Opens **Zen Reader** -> Reads -> Swipes back.
2.  **The "Deep Dive"**: User selects "AI Category" from **Left Sidebar** -> Switches to **Card View** to see thumbnails -> Browses visually.

### Functional Requirements

| Priority | Requirement | User Story |
| :---- | :---- | :---- |
| **P0** | **Unified Design System** | As a user, I want consistent spacing and colors so my eyes don't bleed. |
| **P0** | **Left Sidebar Navigation** | As a user, I want a persistent sidebar to switch categories/feeds instantly. |
| **P0** | **Dual View Modes** | As a user, I want to toggle between "List" (Density) and "Card" (Visual) views. |
| **P1** | **Infinite Scroll** | As a user, I want content to load automatically as I scroll. |
| **P1** | **Zen Reader Layout** | As a user, I want the reading view to center-align text with optimal line-length (65-75 chars). |

## UI/UX Specifications (The "WeChat" Spec)

-   **Background:** `#F6F8FA` (Soft Gray) for app background.
-   **Surface:** `#FFFFFF` (Pure White) for cards/panels.
-   **Primary Text:** `#333333` (Soft Black) - Never use `#000000`.
-   **Secondary Text:** `#666666` or `#999999`.
-   **Accent:** `#1B88EE` (WeChat Blue) or similar.
-   **Radius:** `12px` or `16px` for cards.
-   **Shadow:** Soft, diffuse shadows (`box-shadow: 0 2px 12px rgba(0,0,0,0.05)`).

## Implementation Plan (High Level)
1.  **Setup:** Define `assets/css/design-system.css` (Tailwind Config).
2.  **Shell:** Create `TheSidebar.vue` and `TheLayout.vue`.
3.  **Feed:** Refactor `ArticleCard.vue` to support props for `mode="list" | "card"`.
4.  **Reader:** Refine `ReaderPanel.vue` for typography.
5.  **Integration:** Wire it all up in `app.vue`.

## Stakeholders
-   **Pickle Rick:** Chief Architect & Critic.
-   **User:** The person with eyes who wants them to stop hurting.
