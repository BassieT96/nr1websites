import Link from "next/link";
import {
  footerLinks,
  legalLinks,
  siteConfig,
  socialLinks,
} from "@/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="pb-24 md:pb-10 pt-6">
      <Container>
        <div className="overflow-hidden p-8 md:p-12 border border-border bg-surface shadow-sm rounded-[2.5rem]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="section-kicker">nr1websites.nl</span>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Jouw digitale partner in <span className="text-primary-soft">Lemmer</span> & Friesland.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                Wij bouwen premium, snelle en conversiegerichte websites voor ZZP&apos;ers en ambitieuze MKB&apos;ers. Geen poespas, gewoon direct resultaat.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <ButtonLink href="/contact" variant="primary">
                  Start je project
                </ButtonLink>
                <div className="flex items-center gap-2 text-sm text-muted-strong font-medium">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  Beschikbaar voor nieuwe projecten
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-strong">
                  Navigatie
                </p>
                <ul className="mt-4 space-y-3">
                  {footerLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="text-muted transition hover:text-foreground text-[15px]"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-strong">
                  Uitbreiding
                </p>
                <ul className="mt-4 space-y-3">
                  {legalLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="text-muted transition hover:text-foreground text-[15px]"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-strong">
                  Contact
                </p>
                <ul className="mt-4 space-y-3 text-muted text-[15px]">
                  <li className="font-medium text-foreground">Lemmer, Friesland</li>
                  <li>
                    <a className="transition hover:text-foreground inline-flex items-center gap-2" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-foreground inline-flex items-center gap-2" href={`tel:${siteConfig.phoneHref}`}>
                      {siteConfig.phone}
                    </a>
                  </li>
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <a className="transition hover:text-foreground" href={item.href} rel="noreferrer" target="_blank">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted">
            <p>© {new Date().getFullYear()} nr1websites.nl. Alle rechten voorbehouden.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0 text-muted-strong">
              <span>Werkgebied: Lemmer & Friesland</span>
              <span>Reactie meestal binnen 1 werkdag</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
