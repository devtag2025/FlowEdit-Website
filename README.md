## Flowedit Site (Next.js + Sanity)

Flowedit is a **Next.js App Router** website powered by **Sanity** for content management. It includes a page-builder style content model (Sanity “blocks”), **dynamic SEO + metadata**, **sitemap/robots generation**, and **Draft Mode + Visual Editing** for live previews.

### Tech stack

- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind
- **CMS**: Sanity v4 (Studio in `./sanity`)
- **Integration**: `next-sanity` (Visual Editing + stega), `@sanity/preview-url-secret` (preview link validation)

### Repository structure (high level)

- **`app/`**: Next.js routes, layouts, metadata routes
  - **`app/(site)/page.tsx`**: Home page (renders Sanity `contentBlocks`)
  - **`app/(site)/[...slug]/page.tsx`**: Dynamic pages by slug, with `generateStaticParams`
  - **`app/api/draft-mode/enable`**: Enables Draft Mode after validating preview secret
  - **`app/api/draft-mode/disable`**: Disables Draft Mode
  - **`app/sitemap.ts`**: Dynamic sitemap from Sanity pages
  - **`app/robots.ts`**: Robots rules + sitemap reference
- **`sanity/`**: Sanity Studio + schemas + queries + client helpers
  - **`sanity/schemaTypes/`**: Documents, objects, and block schemas
  - **`sanity/lib/`**: GROQ queries, client, image URL builder, and data fetch helpers
- **`components/`**: Shared UI and site components (navbar/footer/pricing/visual editing helpers)

## Sanity content model

### Core documents

- **`page`**: Pages with `slug`, `pageTemplate`, `contentBlocks`, and page-level `seo`
- **`siteSettings`** (singleton): Global header/footer/nav + **global SEO** defaults
- **`portfolio`**, **`faq`**, **`testimonial`**: Supporting content referenced by blocks

### Page builder blocks

Pages render an ordered `contentBlocks[]` array. The frontend maps `_type` → React component in `app/(site)/components/PageBuilder.tsx`.

Current block types include:
- **`bannerBlock`**
- **`workflowBlock`**
- **`lovedByCreatorsBlock`**
- **`faqBlock`**
- **`portfolioBannerBlock`**
- **`portfolioShowcaseBlock`**

## Sitemap + robots (SEO)

- **Sitemap**: `app/sitemap.ts` fetches all pages from Sanity and generates `sitemap.xml`.
  - Pages with `seo.noIndex === true` are skipped.
  - Base URL comes from `NEXT_PUBLIC_SITE_URL` (recommended), or `NEXT_PUBLIC_VERCEL_URL`, with a fallback.
- **Robots**: `app/robots.ts` generates `robots.txt` and references `sitemap.xml`.

## Live Preview + Visual Editing (Draft Mode)

This project uses **Next.js Draft Mode** + `next-sanity` Visual Editing:

- **Enable Draft Mode**: `GET /api/draft-mode/enable`
  - Validates the Sanity preview secret via `@sanity/preview-url-secret`
  - Requires `SANITY_API_READ_TOKEN`
- **Disable Draft Mode**: `GET /api/draft-mode/disable`
- When Draft Mode is enabled:
  - The Sanity client switches to `perspective: 'previewDrafts'`
  - **stega** is enabled for Visual Editing overlays (Studio URL configurable)
  - The app renders:
    - `components/VisualEditing.tsx`
    - `components/ExitDraftMode.tsx` (button to exit preview)

> Note: There is also a scaffolded Live Content API helper in `sanity/lib/live.ts` (`SanityLive` / `sanityFetch`), but it is not currently wired into the root layout.

## Environment variables

Create `Flowedit-Site/.env.local` for local development.

### Required (recommended)

- **`NEXT_PUBLIC_SANITY_PROJECT_ID`**: Your Sanity project ID
- **`NEXT_PUBLIC_SANITY_DATASET`**: Dataset name (usually `production`)
- **`NEXT_PUBLIC_SITE_URL`**: Canonical site URL (e.g. `https://your-domain.com`)

### Required for preview / visual editing

- **`SANITY_API_READ_TOKEN`**: Read token used to validate preview secrets and read drafts in preview

### Optional

- **`NEXT_PUBLIC_SANITY_API_VERSION`**: Sanity API version (defaults in `sanity/env.ts`)
- **`NEXT_PUBLIC_SANITY_PREVIEW_URL`**: Base URL the Studio should preview (set to `http://localhost:3000` locally)
- **`NEXT_PUBLIC_SANITY_STUDIO_URL`**: Studio URL used by stega (defaults to `https://<projectId>.sanity.studio`)
- **`NEXT_PUBLIC_VERCEL_URL`**: Used as a fallback base URL in sitemap/robots on Vercel

Example:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=42h1p2m6
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-09

NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PREVIEW_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3333

SANITY_API_READ_TOKEN=your_sanity_read_token
```

## Running locally

### 1) Install dependencies

```bash
cd Flowedit-Site
npm install
```

### 2) Start the Next.js site

```bash
npm run dev
```

The site runs on `http://localhost:3000`.

### 3) Start Sanity Studio (local)

In a second terminal:

```bash
npm run sanity:dev
```

Sanity Studio will start on the default Sanity dev port (typically `http://localhost:3333`).

## Working with content

- **Homepage**: the “Homepage” item in Studio is a fixed document with id `home`.
- **Dynamic pages**: create `page` documents with a `slug` (excluding `home`).
- **Publishing**: the frontend uses **published** content by default. Drafts are visible only in **Draft Mode** (preview).

## Deployments

### Deploy the Next.js frontend (Vercel recommended)

- Add the environment variables from the **Environment variables** section in your hosting provider.
- Deploy as a standard Next.js app.
- Ensure `NEXT_PUBLIC_SITE_URL` is set to your production domain so metadata, sitemap, and robots are correct.

### Deploy Sanity Studio

The Studio lives in `Flowedit-Site/sanity` and is deployed via the Sanity CLI:

```bash
cd Flowedit-Site
npm run sanity:deploy
```

After deploy, your hosted Studio URL is typically:
- `https://<projectId>.sanity.studio`

### Preview configuration checklist (important)

- **Set `NEXT_PUBLIC_SANITY_PREVIEW_URL`** to your deployed frontend URL (e.g. Vercel domain).
- In Sanity Manage, ensure **CORS origins** include your frontend domain (and `http://localhost:3000` for local).
- Ensure `SANITY_API_READ_TOKEN` exists in the frontend environment so preview links can be validated and drafts can be read.
