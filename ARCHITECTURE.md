# ARCHITECTURE.md

## Doel van de technische fundering

De site moet geschikt zijn voor:

- hoge performance
- sterke SEO
- hoge conversie
- eenvoudige contentuitbreiding
- hergebruik voor toekomstige klantwebsites

De codebasis moet production-ready zijn en tegelijk flexibel genoeg om later nieuwe lokale pagina's, nichepagina's en cases toe te voegen zonder rommelig te worden.

## Aanbevolen stack

- `Next.js` met `App Router`
- `TypeScript`
- `Tailwind CSS`
- typed content files in `content/`
- metadata en SEO-utilities in `lib/seo/`
- route handlers voor formulieren
- optionele analytics via environment variables
- Vercel-ready deployment

## Kernprincipes

- component-based opbouw
- content los van layoutlogica
- centrale SEO-logica
- semantische HTML
- toegankelijke interacties
- schaalbare routing voor SEO-clusters

## Informatie- en contentstructuur

Gebruik deze lagen:

### Routes

- `app/` voor pagina's en route handlers
- collectieroutes voor diensten, cases, locaties, branches en oplossingen

### Componenten

- `components/base/` voor primitives
- `components/system/` voor design-system bouwstenen
- `components/marketing/` voor samengestelde secties
- `components/site/` voor header, footer en site-shell

### Content

- `content/settings/` voor globale siteconfig
- `content/` voor cases, diensten, testimonials, locaties, niches en commerciële pagina's

### Utilities

- `lib/seo/` voor metadata, canonicals en structured data
- `lib/forms/` voor validatie en delivery
- `lib/analytics/` voor trackingconfiguratie

## Regels voor nieuwe pagina's

Een nieuwe pagina wordt idealiter toegevoegd via:

1. content-entry in `content/`
2. page-route in `app/`
3. metadata via centrale helper
4. interne links vanuit bestaande commerciële pagina's
5. herbruikbare secties in plaats van page-specifieke duplicatie

## Regels voor componentbouw

- bouw generieke componenten als primitives of samengestelde secties
- vermijd page-specifieke markup als die later herbruikbaar hoort te zijn
- geef componenten duidelijke props en voorspelbare semantiek
- laat visuele keuzes aansluiten op het premium design system

## Performance-eisen

- server-first waar logisch
- minimale client-side JavaScript
- zuinig met animaties
- geen zware libraries zonder harde reden
- afbeeldingen en media geoptimaliseerd
- let op Core Web Vitals bij elke visuele keuze

## Toegankelijkheidseisen

- correcte headingvolgorde
- toetsenbordvriendelijke interactie
- zichtbare focus states
- labels en foutmeldingen voor formulieren
- voldoende contrast
- respecteer `prefers-reduced-motion`

## SEO-techniek

Elke indexeerbare pagina moet technisch ondersteunen:

- metadata
- canonicals
- open graph basis
- sitemap-opname
- structured data waar relevant

Routes voor lokale en niche-SEO moeten schaalbaar blijven. Gebruik daarom geen wildgroei aan losse handgemaakte pagina's als een collectie-gedreven aanpak beter past.

## Formulierafhandeling

De primaire formulieren moeten gericht zijn op:

- strategiesessie
- websitescan
- offerte-aanvraag

Gebruik:

- route handlers voor intake
- centrale validatie
- herbruikbare succes- en foutstatussen
- eenvoudige koppeling naar mail, CRM of webhook

## Analytics

Analytics moet licht en uitbreidbaar zijn.

Minimaal nodig:

- pageviews
- CTA-klikken
- formulierverzendingen
- conversietype per formulier

Analytics mag performance of privacy niet onnodig schaden.

## Deployment readiness

De fundering moet direct geschikt zijn voor deployment:

- consistente environment variables
- stabiele build
- duidelijke contentbron
- geen verborgen afhankelijkheid van lokale tools

## Herbruikbaarheid voor toekomstige klantwebsites

Deze codebasis moet functioneren als agency-framework.

Dat betekent:

- herbruikbare componenten
- verwisselbare contentcollecties
- vervangbare branding en copy
- behoud van dezelfde technische fundering

Nieuwe klantprojecten moeten vooral andere content, visuals en nuances nodig hebben, niet een compleet nieuwe architectuur.

## Beslisregels voor latere agents

Bij technische keuzes geldt altijd:

- kies de oplossing die UX, SEO en conversie tegelijk ondersteunt
- kies de oplossing met de laagste structurele complexiteit
- kies herbruikbaarheid boven snelle eenmalige hacks
- kies inhoudelijke schaalbaarheid boven route-explosie
- kies production-ready code boven demo-achtige shortcuts

## Relatie met bestaande documentatie

Gebruik `docs/architecture.md` voor extra context over de huidige implementatie.

Gebruik `docs/sitemap.md` voor route- en IA-beslissingen.
