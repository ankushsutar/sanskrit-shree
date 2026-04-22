# Design Specification: Ogani UI x Sanskrit Shree Theme

This document outlines the strategy for implementing the **Ogani template's layout and functionality** while strictly adhering to the **Sacred Ancient Sanskrit aesthetic** of the Sanskrit Shree project.

## 1. Core Visual Mapping

| Feature | Ogani Implementation | Sanskrit Shree Adaptation |
| :--- | :--- | :--- |
| **Primary Color** | Green (`#7fad39`) | **Gold** (`#D4A017`) or **Maroon** (`#800000`) for CTAs |
| **Secondary Color** | Light Green/Grey | **Peacock Blue** (`#1A4B6E`) for deep contrasts |
| **Background** | Clean White | **Cream/Manuscript** (`#FDFBF7`) with subtle textures |
| **Typography** | Cairo / Montserrat (Modern) | **Cinzel** (Headings) / **Cormorant** (Body) / **Noto Sans Devanagari** |
| **Iconography** | Flat, modern icons | **Sacred motifs** (Mandala, Aum, Shloka emblems) |

---

## 2. Layout Structure (Page by Page)

### A. Homepage (Hero & Discovery)
*   **Hero Section:** 
    *   *Ogani:* Vertical "Departments" menu + Search + Slider.
    *   *Adaptation:* A **"Shastra Categories"** vertical menu on the left. The search bar will focus on "Finding Shlokas, Courses, or Songs". The main slider will feature high-quality images of ancient manuscripts or temple settings.
*   **Featured Sections:** 
    *   *Ogani:* Tabbed grid (All, Oranges, Fresh Meat, etc.).
    *   *Adaptation:* Tabbed grid for **"Featured Content"** (All, New Songs, Vedic Courses, Blog Posts). Use the hover action icons (Wishlist/Cart) but styled as gold circular emblems.

### B. Shop Grid (Resource Library)
*   **Sidebar Filters:** 
    *   *Ogani:* Price slider, Colors, Sizes.
    *   *Adaptation:* Filter by **Complexity** (Beginner to Advanced), **Category** (Vedas, Upanishads, Stotrams), and **Media Type** (Audio, Video, PDF).
*   **Product Cards:** Maintain the Ogani layout but replace "Weight/Price" with "Duration/Credits".

### C. Resource Details (Course/Song Page)
*   **Gallery:** Large manuscript/video preview with thumbnails.
*   **Tabs:** Replace "Description/Reviews" with **"Interpretation (Arth)", "Transliteration", and "Community Insights"**.
*   **Action Area:** Custom quantity selector becomes a **"Students Enrolled"** or **"Difficulty Level"** indicator.

### D. Blog (Knowledge Hub)
*   **Sidebar:** Keep the Ogani search/categories/recent-posts layout.
*   **Post Cards:** Use the elegant date-badge but themed with Gold/Maroon.

---

## 3. UI Components & Micro-interactions

### Navbar & Header
*   Store the **"Top Header"** info (Phone/Email) but style it as a subtle "Devotional Quote of the Day" placeholder.
*   The **"Departments"** dropdown should have a manuscript-like transition (unfolding like a scroll).

### Product/Content Cards
*   **Hover Effect:** Instead of the standard lift, use the Ogani "Center Action Icons" pop-up, but the icons should glow with a `neon-gold` effect (as defined in `globals.css`).
*   **Badges:** Use "New" or "Sacred" badges in Maroon with Gold borders.

### Forms & Inputs
*   Maintain Ogani's clean form structure but use the `manuscript` class for backgrounds and `border-shastra` for dividers.

---

## 4. Technical Implementation Plan

1.  **CSS Variable Alignment:** Map Ogani's `--primary` to `var(--gold)` and `--text-dark` to `var(--peacock)`.
2.  **Component Refactoring:** Update existing `Navbar`, `Hero`, `Featured` components to match Ogani's HTML structure for better responsiveness.
3.  **Asset Integration:** Replace placeholder grocery images with high-resolution "Sacred Sanskrit" assets (to be generated/sourced).

---

> [!IMPORTANT]
> The goal is to capture Ogani's **professional e-commerce flow** (highly optimized for conversion and clarity) and mask it with the **Sanskrit Shree soul**. The UX should feel fast and modern, while the UI looks like an ancient treasury.
