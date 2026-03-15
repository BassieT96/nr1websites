# nr1websites.nl Architecture

## 1. Aanbevolen stack

- Framework: Next.js 16 met App Router
- Taal: TypeScript
- Styling: Tailwind CSS 4 met centrale design tokens in `app/globals.css`
- Content: typed content files in `content/`
- SEO: metadata helpers, JSON-LD helpers, `robots.ts`, `sitemap.ts`
- Analytics: env-gestuurde provider voor GA4 of Plausible
- Formulieren: route handlers met centrale validatie en webhook adapter
- Deployment: Vercel-first, maar zonder vendor lock-in in de code

## 2. Mappenstructuur

```text
app/
  api/contact/
  blog/
  branches/[slug]/
  branches/
  cases/[slug]/
  cases/
  contact/
  diensten/[slug]/
  diensten/
  locaties/[slug]/
  locaties/
  over-ons/
  pakketten/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts

components/
  analytics/
  base/
  forms/
  marketing/
  seo/
  site/

content/
  settings/
  cases.ts
  company.ts
  locations.ts
  niches.ts
  services.ts
  testimonials.ts
  types.ts

lib/
  analytics/
  forms/
  seo/
  metadata.ts
  utils.ts

docs/
  architecture.md
```

## 3. Technische keuzes met motivatie

- Next.js App Router:
  Beste combinatie van performance, SEO, nested routing en herbruikbaarheid voor agency-sites.
- Typed content files:
  Sneller, simpeler en stabieler dan direct een CMS voor een marketingsite. Uitbreiden met steden, branches en cases blijft puur contentwerk.
- Dynamische collectieroutes:
  `/diensten/[slug]`, `/cases/[slug]`, `/locaties/[slug]` en `/branches/[slug]` voorkomen route-explosie en maken schaalbare SEO-landingspagina’s logisch.
- Tailwind CSS 4:
  Snelle UI-bouw, consistente tokens en weinig CSS-overhead.
- Centrale SEO-laag:
  Metadata, canonical URLs, structured data en sitemap/robots zijn geconsolideerd zodat nieuwe pagina’s consistent blijven.
- Analytics via provider:
  Geen harde vendor lock-in. GA4 of Plausible kan via environment variables worden geactiveerd.
- Form adapter:
  De contactflow valideert centraal en kan later doorgezet worden naar e-mail, CRM, Zapier of een custom webhook zonder frontend-wijziging.

## 4. Initiële setup in code

- Collectie-gedreven contentstructuur in `content/`
- Dynamische detailroutes voor diensten, cases, locaties en branches
- SEO utilities in `lib/seo/`
- Analytics provider in `components/analytics/AnalyticsProvider.tsx`
- Contactvalidatie en delivery adapter in `lib/forms/contact.ts`
- Environment voorbeeldbestand in `.env.example`

## 5. Aannames en trade-offs

- Geen headless CMS in de eerste fase:
  Dit maximaliseert performance en developer experience, maar niet-technische redacteuren hebben later mogelijk Sanity of een vergelijkbaar CMS nodig.
- Analytics is bewust licht opgezet:
  Goed voor performance, maar geavanceerde eventmodellen moeten later worden toegevoegd als dat nodig is.
- Buildscript gebruikt webpack:
  Dit is gekozen voor stabiele builds in deze omgeving. In een vrijere runtime kan de standaard Next/Turbopack-build opnieuw worden geëvalueerd.
- Legacy experimentele componenten staan nog in de repository:
  Ze zijn niet meer onderdeel van de actieve architectuur en worden uitgesloten van de nieuwe basis.
