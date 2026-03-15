# Commerciële Sitemap & Contentarchitectuur

## Doel

Deze sitemap is opgezet voor een agency-site die primair moet verkopen en secundair moet informeren. De structuur is dus ingericht op:

- brede commerciële categorie-intentie
- doelgroepgerichte landingspagina’s
- lokale SEO voor Lemmer en Friesland
- transactionele oplossing- en nichepagina’s
- cases als bewijslaag

## Commerciële IA-principes

- `Home` vangt brede merk- en categorie-intentie af.
- `Websites` en `SEO & Groei` zijn de twee hoofdcommerciële hubs.
- `Voor ZZP’ers`, `Voor Startende Bedrijven` en `Voor Kleine Bedrijven` vangen doelgroep-intentie af.
- `Locaties` ondersteunt lokale SEO, maar de echte rankingkans zit in de detailpagina’s.
- `Branches` ondersteunt niche-intentie zoals `website voor zzp`.
- `Oplossingen` ondersteunt commerciële intenties zoals `conversiegerichte website`.
- `Cases` is geen portfolio-bijzaak, maar de primaire bewijslaag.
- `Over` en `Contact` bestaan om vertrouwen en frictieverlaging te ondersteunen, niet als redactionele pagina’s.

## Navigatielagen

### Primaire navigatie

- `/`
- `/websites`
- `/seo-groei`
- `/cases`
- `/over-ons`
- `/contact`

### Secundaire commerciële routes

- `/voor-zzpers`
- `/voor-startende-bedrijven`
- `/voor-kleine-bedrijven`
- `/locaties`
- `/branches`
- `/oplossingen`

## Sitemapboom

```text
/
|-- /websites
|-- /seo-groei
|-- /voor-zzpers
|-- /voor-startende-bedrijven
|-- /voor-kleine-bedrijven
|-- /cases
|   |-- /cases/atelier-noord
|   |-- /cases/fysiopraktijk-lemmer
|   `-- /cases/studio-flux
|-- /locaties
|   |-- /locaties/website-laten-maken-lemmer
|   |-- /locaties/webdesign-lemmer
|   |-- /locaties/website-laten-maken-friesland
|   `-- /locaties/website-onderhoud-friesland
|-- /branches
|   |-- /branches/website-voor-zzp
|   `-- /branches/website-voor-kleine-bedrijven
|-- /oplossingen
|   |-- /oplossingen/conversiegerichte-website
|   `-- /oplossingen/seo-website-laten-maken
|-- /over-ons
|-- /contact
|-- /blog
`-- /pakketten
```

## Paginaclusters

### 1. Core commercial pages

- `/`
- `/websites`
- `/seo-groei`

Functie:

- brede vraag afvangen
- vertrouwen opbouwen
- bezoekers doorsturen naar doelgroep-, locatie- of oplossingspagina’s

### 2. Audience pages

- `/voor-zzpers`
- `/voor-startende-bedrijven`
- `/voor-kleine-bedrijven`

Functie:

- bezwaren en taalgebruik per doelgroep specificeren
- CTA scherper maken op herkenning
- doorsturen naar cases, contact en transactionele nichepagina’s

### 3. Local SEO pages

- `/locaties/website-laten-maken-lemmer`
- `/locaties/webdesign-lemmer`
- `/locaties/website-laten-maken-friesland`
- `/locaties/website-onderhoud-friesland`

Functie:

- lokale commerciële zoekintentie ranken
- Lemmer en Friesland als trust-laag benutten
- dienst + locatie slim combineren zonder dunne content

### 4. Niche pages

- `/branches/website-voor-zzp`
- `/branches/website-voor-kleine-bedrijven`

Functie:

- directe doelgroep + dienst-intentie targeten
- warm verkeer sneller richting contact krijgen

### 5. Solution pages

- `/oplossingen/conversiegerichte-website`
- `/oplossingen/seo-website-laten-maken`

Functie:

- commerciële intenties met hoge koopgerichtheid afvangen
- oplossingstaal gebruiken in plaats van brede bureautaal

### 6. Proof & trust pages

- `/cases`
- `/over-ons`
- `/contact`

Functie:

- bewijs leveren
- bezwaren verlagen
- frictie richting intake of offerte verkleinen

## Interne linkarchitectuur

### Home linkt primair naar

- `Websites`
- `SEO & Groei`
- doelgroeppagina’s
- `Cases`
- `Contact`

### Core commercial pages linken primair naar

- relevante diensten
- cases
- doelgroeppagina’s
- oplossingpagina’s
- contact

### Audience pages linken primair naar

- brede servicehub
- relevante niche- of oplossingpagina
- cases
- contact

### Local pages linken primair naar

- brede servicehub
- relevante dienst
- lokale of regionale buurpagina
- cases
- contact

### Cases linken primair naar

- website- of SEO-hubs
- contact
- relevante doelgroep- of oplossingpagina’s

## Contentarchitectuur in code

De aanbevolen code-structuur voor deze sitemap zit nu in:

- `content/page-specs.ts` als centrale paginadefinitie
- `content/commercial-pages.ts` voor top-level commerciële placeholders
- `content/locations.ts` voor lokale detailpagina’s
- `content/niches.ts` voor nichepagina’s
- `content/solutions.ts` voor oplossingspagina’s

Deze scheiding is bewust:

- `page-specs.ts` is de commerciële bron van waarheid
- de collectie-bestanden voeden concrete routes en placeholders
- later kan dit doorgezet worden naar een CMS of generator zonder de IA te wijzigen

## Belangrijke SEO-regels voor deze sitemap

- geen flat route-chaos
- geen dunne locatiepagina’s
- één primaire zoekintentie per pagina
- cases als vaste bewijslaag in het ecosysteem
- doelgroeppagina’s en oplossingpagina’s naast elkaar, niet door elkaar

## Uitbreidbare volgende lagen

Logische uitbreidingen binnen dezelfde architectuur:

- extra plaatspagina’s onder `/locaties`
- extra nichepagina’s onder `/branches`
- extra oplossingspagina’s onder `/oplossingen`
- extra cases onder `/cases`

Nieuwe pagina’s mogen alleen worden toegevoegd als ze:

- een eigen commerciële zoekintentie hebben
- niet concurreren met een bestaande URL
- voldoende unieke content en bewijs kunnen dragen
