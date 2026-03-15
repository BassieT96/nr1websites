# Design System — nr1websites.nl

Visuele identiteit: **Obsidian Night** — premium, modern, wit met subtiele diepte.

---

## 1. Design Tokens (`app/globals.css` via Tailwind v4 `@theme`)

### Kleuren

| Token | Waarde | Gebruik |
|---|---|---|
| `background` | `#fcfcfd` | Pagina-achtergrond |
| `surface` | `#ffffff` | Cards, panels |
| `surface-strong` | `#f8fafc` | Alternatieve secties |
| `surface-tinted` | `#f0f7ff` | Licht getinte blokken |
| `foreground` | `#09090b` | Primaire tekst |
| `primary` | `#18181b` | Donkere headings, buttons |
| `primary-soft` | `#3f3f46` | Secundaire tekst, iconen |
| `muted` | `#71717a` | Bodytekst |
| `muted-strong` | `#52525b` | Iets prominenter muted |
| `border` | `rgba(0,0,0,0.08)` | Subtiele randen |
| `border-strong` | `rgba(0,0,0,0.15)` | Prominente randen |
| `accent` | `#2563eb` | CTA-blauw, links |
| `accent-soft` | `rgba(37,99,235,0.1)` | Accent-achtergrond |
| `accent-strong` | `#1d4ed8` | Hover-staat accent |
| `success` | `#10b981` | Bevestigingen, badges |
| `danger` | `#ef4444` | Foutmeldingen |

**Hero-specifiek (wave-animatie):**
`#E9C86D`, `#F59F56`, `#F7716A`, `#C75ACC`, `#7A58E8`, `#3F57F2`
(lijnkleuren in wave-background component)

---

### Typografie

| Token | Waarde |
|---|---|
| `font-display` | Sora → Avenir Next → sans-serif |
| `font-sans` | Plus Jakarta Sans → Avenir Next → sans-serif |
| `font-mono` | SFMono-Regular, Menlo, Monaco, Consolas |

**Type scale (fluid via clamp):**

| Token | Waarde |
|---|---|
| `display-3xl` | `clamp(4rem, 8vw, 7.5rem)` — mega hero |
| `display-2xl` | `clamp(3.25rem, 6vw, 6rem)` |
| `display-xl` | `clamp(2.5rem, 5vw, 4.5rem)` |
| `display-lg` | `clamp(2rem, 4vw, 3.5rem)` |
| `heading-xl` | `clamp(1.75rem, 3vw, 2.5rem)` |
| `heading-lg` | `clamp(1.5rem, 2vw, 2rem)` |
| `heading-md` | `1.25rem` |
| `body-lg` | `1.125rem` |
| `body-md` | `1rem` |
| `body-sm` | `0.9375rem` |
| `label` | `0.75rem` |

---

### Spacing (8px grid)

| Token | px |
|---|---|
| `space-3xs` | 4px |
| `space-2xs` | 8px |
| `space-xs` | 12px |
| `space-sm` | 16px |
| `space-md` | 24px |
| `space-lg` | 32px |
| `space-xl` | 40px |
| `space-2xl` | 48px |
| `space-3xl` | 64px |
| `space-4xl` | 96px |
| `space-5xl` | 128px |

---

### Containers

| Token | Breedte |
|---|---|
| `container-reading` | 42rem |
| `container-content` | 74rem |
| `container-wide` | 88rem |

---

### Shadows

| Token | Effect |
|---|---|
| `shadow-soft` | Subtiele card-schaduw |
| `shadow-card` | Standaard card |
| `shadow-pop` | Prominente kaart + accent-gloed |
| `shadow-neon` | Blauwe neon-gloed |

---

### Motion

| Token | Waarde |
|---|---|
| `duration-fast` | 180ms |
| `duration-base` | 280ms |
| `duration-slow` | 480ms |
| `ease-standard` | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasis` | `cubic-bezier(0.16, 1, 0.3, 1)` |

Animaties via **Framer Motion** — gebruik `variants` met `staggerChildren` voor entree-animaties.
Respecteer `prefers-reduced-motion`.

---

## 2. Patronen

### Hero-sectie
- `min-h-[90vh]`, `flex items-center`, `text-center`
- Wave-achtergrond (Waves component) + glow-blob (blur-[120px])
- Trust kicker: pill-badge met groene dot + `font-mono tracking-[0.25em]`
- H1: `type-display-hero text-balance leading-[1.05]`
- Subtitel: `type-body-lead text-muted max-w-2xl`
- CTA-rij: `flex-col sm:flex-row gap-5`
- Availability badge: pulserende groene dot + `text-emerald-400`
- Stagger-animatie: `staggerChildren: 0.15`, spring transition

### Knoppen
- Primary: `variant="primary"` — accent-kleur, `px-10 py-5`
- Ghost: `variant="ghost"` — transparant met rand

### Header
- Sticky, glassmorphism bij scrollen (`isScrolled` state)
- `py-6` normaal → `py-2` bij scrollen
- Lichte tekst op dark-hero routes (`pathname.startsWith("/websites")`)

### Beschikbaarheidsbadge
```tsx
{siteConfig.availabilityMessage && (
  <div className="flex items-center gap-2 text-sm text-emerald-400">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute ... bg-emerald-400 opacity-75" />
      <span className="relative ... bg-emerald-500" />
    </span>
    {siteConfig.availabilityMessage}
  </div>
)}
```

---

## 3. Component-locaties

| Type | Map |
|---|---|
| Primitives (Button, etc.) | `components/ui/` |
| Marketing secties | `components/marketing/` |
| Site-shell (header, footer) | `components/site/` |
| Formulieren | `components/forms/` |
| SEO-helpers | `components/seo/` |

---

## 4. Richtlijnen

- Animaties alleen toevoegen als ze content communiceren, niet als decoratie
- Gebruik `text-balance` op headings, `text-pretty` op bodytekst
- CTA-knoppen hebben altijd voldoende witruimte (`px-10 py-5` minimum)
- Beschikbaarheidsbericht via `siteConfig.availabilityMessage` (leeg = badge verborgen)
- Grote bewerkingen via `Write` tool uitvoeren, niet `Edit`, vanwege Unicode-quote-risico
