# Product Requirements Document — nr1websites.nl

## 1. Product Overview

**Product:** Agency website voor nr1websites.nl
**Eigenaar:** Bas Troelstra
**Doel:** Een conversiegerichte, SEO-sterke en visueel premium website die als commerciële machine werkt voor een webbureau in Lemmer.
**Status:** MVP in development — fundament gereed, content- en contentlagen groeien door.

---

## 2. Primaire bedrijfsdoelen

1. Nieuwe klantgesprekken genereren via organisch zoekverkeer (lokaal + nationaal)
2. Vertrouwen opbouwen via portfolio, werkwijze en lokale herkenbaarheid
3. Dienen als referentieproject en template-basis voor klantwebsites

---

## 3. Doelgroepen

| Segment | Behoefte |
|---|---|
| ZZP'ers | Snelle, professionele website voor eerste indruk en lokale vindbaarheid |
| Startende bedrijven | Geloofwaardige online basis die aanvragen ondersteunt |
| Kleine bedrijven | Schaalbare website met SEO-focus en meer online leads |

Geografische focus (fase 1): Lemmer en Friesland
Geografische focus (fase 2): Nederland breed

---

## 4. Kernfunctionaliteiten

### 4.1 Conversiepaden
- Contactformulier met validatie, honeypot-spambeveiliging en webhook-delivery
- Primaire CTA: "Plan een strategiesessie" (op elke commerciële pagina)
- Secundaire CTA: "Bekijk cases" of pagina-specifiek equivalent

### 4.2 SEO-architectuur
- Schaalbare routestructuur: `/locaties/[slug]`, `/branches/[slug]`, `/oplossingen/[slug]`, `/cases/[slug]`
- Geautomatiseerde sitemap + robots.txt
- Structured data per paginatype (LocalBusiness, Service, FAQPage, BreadcrumbList)
- Open Graph metadata op alle indexeerbare pagina's

### 4.3 Inhoudslagen
- **Core commercial:** home, `/websites`, `/seo-groei`
- **Audience:** `/voor-zzpers`, `/voor-startende-bedrijven`, `/voor-kleine-bedrijven`
- **Local SEO:** `/locaties/*` (Lemmer, Friesland)
- **Niche SEO:** `/branches/*` (zzp, kleine bedrijven)
- **Solutions:** `/oplossingen/*` (conversiegerichte website, SEO website)
- **Proof:** `/cases/*`, `/over-ons`
- **Blog:** toekomstige SEO-contentlaag (placeholder)

### 4.4 Technische vereisten
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Server-side rendering voor indexeerbare pagina's
- Lazy loading voor below-fold secties
- Volledig mobiel-first responsive
- Toegankelijk: semantische HTML, zichtbare focus states, ARIA-labels op formulieren

---

## 5. Niet in scope (MVP)

- CMS-integratie (content staat in typed files)
- Blog artikelen (structuur aanwezig, content nog niet)
- Klantportaal of inlogfunctionaliteit
- Betaalsystemen of e-commerce
- Meertaligheid

---

## 6. Definitie van klaar

Een pagina of feature is klaar als:
- UX, SEO en conversie aantoonbaar zijn meegenomen
- Metadata aanwezig is (title, description, OG)
- Één primaire CTA aanwezig is
- Headings semantisch kloppen (één H1, logische H2's)
- Interne links aanwezig zijn
- Mobiel gedrag gevalideerd
- TypeScript compileert zonder fouten (`npx tsc --noEmit`)

---

## 7. Meetplan

| KPI | Doel |
|---|---|
| Strategiesessie-aanvragen | Primaire conversie |
| Websitescan-aanvragen | Secundaire conversie |
| Organische sessies (lokaal) | Groeiindicator |
| Formulier-completions | Kwaliteitscheck UX |
| Core Web Vitals | Technische baseline |

---

## 8. Aanverwante documentatie

| Document | Doel |
|---|---|
| `AGENTS.md` | Beslisregels voor agents |
| `BRAND.md` | Merkidentiteit en tone of voice |
| `SEO.md` | SEO-strategie en contentregels |
| `COPY_GUIDELINES.md` | Schrijfregels en CTA-formules |
| `ARCHITECTURE.md` | Technische principes |
| `DESIGN.md` | Design system tokens en patronen |
| `TECH_STACK.md` | Tech stack keuzes |
| `docs/sitemap.md` | Volledige sitestructuur |
| `docs/page-specs.md` | Per-pagina commerciële specs |
