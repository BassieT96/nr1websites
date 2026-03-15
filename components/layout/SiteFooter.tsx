import Link from "next/link";

import {
  footerLinks,
  legalLinks,
  siteConfig,
  socialLinks,
} from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-6">
      <Container>
        <div className="surface-card overflow-hidden p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="section-kicker">nr1websites.nl</span>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-foreground md:text-4xl">
                Een nette basis die direct professioneel oogt en morgen nog
                steeds schaalbaar is.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-muted">
                Gebruik deze starter als vertrekpunt voor een agency-site met
                sterke SEO-basis, modulaire content en een consistente visuele
                lijn op mobiel, tablet en desktop.
              </p>
              <div className="mt-8">
                <ButtonLink href={siteConfig.ctaHref}>
                  {siteConfig.ctaLabel}
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Navigatie
                </p>
                <ul className="mt-4 space-y-3">
                  {footerLinks.map((item) => (
                    <li key={item.href}>
                      <Link className="text-muted transition hover:text-primary" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Snel naar
                </p>
                <ul className="mt-4 space-y-3">
                  {legalLinks.map((item) => (
                    <li key={item.href}>
                      <Link className="text-muted transition hover:text-primary" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Contact
                </p>
                <ul className="mt-4 space-y-3 text-muted">
                  <li>{siteConfig.location}</li>
                  <li>
                    <a className="transition hover:text-primary" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-primary" href={`tel:${siteConfig.phoneHref}`}>
                      {siteConfig.phone}
                    </a>
                  </li>
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <a className="transition hover:text-primary" href={item.href} rel="noreferrer" target="_blank">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6 text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Gebouwd in Next.js,
            TypeScript en Tailwind CSS.
          </div>
        </div>
      </Container>
    </footer>
  );
}
