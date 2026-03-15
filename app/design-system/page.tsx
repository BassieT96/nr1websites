import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard, GlassCard, HoverTiltCard } from "@/components/ui/Cards";
import { TestimonialCard, CaseStudyPreview, PricingCard } from "@/components/ui/SectionBlocks";
import { ContactCTABlock, ProcessStep } from "@/components/ui/ProcessAndCTA";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/30">
      
      {/* 1. Header */}
      <header className="relative py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="container-wide mx-auto px-6 lg:px-12 relative z-10 text-center">
          <Badge className="mb-6">Global Definitions</Badge>
          <h1 className="type-display-hero mb-6 text-gradient-primary">Design System</h1>
          <p className="type-body-lead text-muted max-w-2xl mx-auto">
            The foundation of nr1websites premium UI. A scalable, performant, and deeply immersive library of tokens and components.
          </p>
        </div>
      </header>

      <main className="container-wide mx-auto px-6 lg:px-12 py-32 space-y-40">
        
        {/* Foundation: Typography */}
        <section className="space-y-16">
          <div className="border-b border-border pb-6 flex items-baseline justify-between">
            <h2 className="text-2xl font-sans tracking-tight text-white/90">Typography Scale</h2>
            <span className="font-mono text-xs text-muted">Avenir Next & Clash Display</span>
          </div>
          <div className="space-y-12">
            <div>
              <p className="font-mono text-xs text-muted mb-4">.type-display-hero (clamp 4.5rem to 8rem)</p>
              <div className="type-display-hero text-foreground">Next-Gen Web.</div>
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-4">.type-display-page (clamp 3.5rem to 6.5rem)</p>
              <div className="type-display-page text-foreground">Awwwards Quality.</div>
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-4">.type-section-title (clamp 2.25rem to 3.75rem)</p>
              <div className="type-section-title text-foreground">Elevate Your Brand</div>
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-4">.type-card-title (clamp 1.5rem to 2rem)</p>
              <div className="type-card-title text-foreground">Performant Architectures</div>
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-4">.type-body-lead (1.125rem)</p>
              <p className="type-body-lead text-muted max-w-3xl">
                We craft digital experiences that blur the line between utility and art. High-end web agency uit Lemmer. We ontwerpen en bouwen Next.js websites die snelheid, merkbeleving en conversie samenbrengen.
              </p>
            </div>
          </div>
        </section>

        {/* Foundation: Colors */}
        <section className="space-y-16">
          <div className="border-b border-border pb-6 flex items-baseline justify-between">
            <h2 className="text-2xl font-sans tracking-tight text-white/90">Obsidian Night Palette</h2>
            <span className="font-mono text-xs text-muted">Semantic Variables</span>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-background border border-border" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-white">Background</span>
                <span className="font-mono text-muted">#050508</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-surface border border-border" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-white">Surface</span>
                <span className="font-mono text-muted">#0b0e15</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-surface-strong border border-border" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-white">Surface Strong</span>
                <span className="font-mono text-muted">#10141d</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-24 rounded-2xl bg-accent border border-border" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-white">Accent</span>
                <span className="font-mono text-accent">#00aaff</span>
              </div>
            </div>
          </div>
        </section>

        {/* Molecules: Buttons & Badges */}
        <section className="space-y-16">
          <div className="border-b border-border pb-6">
            <h2 className="text-2xl font-sans tracking-tight text-white/90">Interactive Elements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="font-mono text-sm text-muted">Badges / Tags</h3>
              <div className="flex flex-wrap gap-4">
                <Badge>Development</Badge>
                <Badge>Design</Badge>
                <Badge>SEO</Badge>
                <Badge className="bg-success/10 text-success border border-success/20">Active</Badge>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="font-mono text-sm text-muted">Button Variants (Hover me)</h3>
              <div className="flex flex-wrap gap-4 items-center p-8 rounded-[2rem] bg-surface-strong border border-border-strong">
                <Button variant="primary">Primary CTA</Button>
                <Button variant="secondary">Secondary CTA</Button>
                <Button variant="outline">Outline Btn</Button>
                <Button variant="ghost">Ghost Btn</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Organisms: Cards */}
        <section className="space-y-16">
          <div className="border-b border-border pb-6">
            <h2 className="text-2xl font-sans tracking-tight text-white/90">Card Abstractions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="h-80 flex flex-col justify-end">
              <h3 className="type-card-title text-foreground">Spotlight Card</h3>
              <p className="text-muted mt-4">Gradients follow your cursor for an immersive glow.</p>
            </SpotlightCard>
            
            <HoverTiltCard className="h-80 flex flex-col justify-end">
              <h3 className="type-card-title text-foreground">Hover Tilt Card</h3>
              <p className="text-muted mt-4">Calculates physics-based 3D rotation on mouse move.</p>
            </HoverTiltCard>
            
            <GlassCard className="h-80 flex flex-col justify-end">
              <h3 className="type-card-title text-foreground">Standard Glass</h3>
              <p className="text-muted mt-4">Elegant translucent backdrop-blur.</p>
            </GlassCard>
          </div>
        </section>

        {/* Organisms: Section Blocks */}
        <section className="space-y-16">
          <div className="border-b border-border pb-6 flex items-center justify-between">
            <h2 className="text-2xl font-sans tracking-tight text-white/90">Compound Overlays</h2>
            <Badge>Complex</Badge>
          </div>
          
          <div className="space-y-24">
            
            {/* Testimonials & Pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                 <h3 className="font-mono text-sm text-muted mb-8">TestimonialCard</h3>
                 <TestimonialCard 
                    quote="Bizar hoe snel de website was en hoe ontzettend strak het design in elkaar zit."
                    author="Jeroen Kuiper"
                    role="Founder"
                    company="TechGrowth"
                 />
              </div>
              <div>
                 <h3 className="font-mono text-sm text-muted mb-8">PricingCard</h3>
                 <PricingCard 
                    tier="Pro"
                    price="€3.950"
                    isPopular={true}
                    features={["Custom Design", "Framer Motion", "SEO Ready", "CMS Integratie"]}
                 />
              </div>
            </div>

            {/* Case Studies & Process */}
            <div>
              <h3 className="font-mono text-sm text-muted mb-8">CaseStudyPreview</h3>
              <div className="max-w-2xl">
                 <CaseStudyPreview 
                    title="FitFabriek Coaching Platform"
                    category="E-Commerce & Branding"
                    href="#"
                    imageSrc="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop"
                 />
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm text-muted mb-8">ProcessSteps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                 <ProcessStep 
                    number="01"
                    title="Ontdekking & Strategie"
                    description="We brengen je doelen en de markt in kaart."
                 />
                 <ProcessStep 
                    number="02"
                    title="Awwwards UI Design"
                    description="Design systeem met focus op premium UX."
                 />
              </div>
            </div>

            {/* Contact Block */}
            <div>
              <h3 className="font-mono text-sm text-muted mb-8">ContactCTABlock</h3>
              <ContactCTABlock />
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
