# Tech Stack — nr1websites.nl

## Framework & Runtime

| Laag | Keuze | Versie |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| Runtime | React | 19.2.3 |
| Taal | TypeScript | ^5 |
| Platform | Node.js (Vercel-ready) | — |

---

## Styling

| Laag | Keuze |
|---|---|
| CSS framework | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Token-systeem | Tailwind `@theme` in `app/globals.css` |
| Animaties | Framer Motion ^12 |
| Iconografie | Lucide React ^0.577 |

---

## Content

Content staat als typed TypeScript files in `content/`:

| File | Inhoud |
|---|---|
| `content/settings/site.ts` | Globale siteconfig (naam, URL, telefoon, CTA, beschikbaarheidsbericht) |
| `content/case-studies.ts` | Portfolio-cases |
| `content/services.ts` | Diensten |
| `content/testimonials.ts` | Klantreviews |
| `content/locations.ts` | Lokale SEO-pagina's |
| `content/niches.ts` | Nichepagina's |
| `content/solutions.ts` | Oplossingspagina's |
| `content/commercial-pages.ts` | Top-level commerciële pagina's |
| `content/page-specs.ts` | Per-pagina commerciële specs |

Geen CMS. Content-uitbreiding via TypeScript.

---

## SEO & Metadata

| Utility | Locatie |
|---|---|
| Metadata factory | `lib/metadata.ts` |
| JSON-LD factories | `lib/seo/json-ld.ts` |
| Absolute URL helper | `lib/seo/absolute-url.ts` |
| Sitemap | `app/sitemap.ts` |
| Robots | `app/robots.ts` |

---

## Formulieren & Backend

| Laag | Keuze |
|---|---|
| Formulierafhandeling | Next.js Route Handler (`app/api/contact/route.ts`) |
| Validatie | `lib/forms/contact.ts` (server-side) |
| Spambeveiliging | Honeypot-veld (client-side) + veld-validatie (onBlur) |
| Delivery | `lib/forms/contact.ts` → webhook / mail (configureerbaar via env vars) |

---

## Performance

| Techniek | Implementatie |
|---|---|
| Server Components | Standaard voor alle pagina's |
| Code splitting | `next/dynamic` voor below-fold secties (PortfolioSection, FaqSection, ContactSection) |
| Afbeeldingen | `next/image` |
| Geluid / video | Lazy of poster-placeholder |

---

## Deployment

| Aspect | Keuze |
|---|---|
| Platform | Vercel (aanbevolen) |
| Environment variables | `NEXT_PUBLIC_SITE_URL`, delivery-keys (zie `.env.example`) |
| Build command | `next build` |
| Type-check | `npx tsc --noEmit` |
| Lint | `eslint . --max-warnings=0` |

---

## Dev Dependencies

| Package | Doel |
|---|---|
| `@tailwindcss/postcss` | Tailwind v4 PostCSS integratie |
| `eslint-config-next` | Next.js lint-regels |
| `typescript` | Type checking |

---

## Bewuste keuzes

- **Geen apart component library** — custom UI in `components/ui/` voor volledige controle
- **Geen CMS** — typed content files zijn eenvoudiger voor dit projectformaat
- **react-icons verwijderd** — alleen Lucide React (was geïnstalleerd maar nooit gebruikt)
- **`ssr: false` vermeden** — niet toegestaan in Server Components; lazy loading werkt zonder
- **Simplex-noise** — voor de wave-achtergrond animatie in de hero
