"use client"

import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"
import type { CarouselCard } from "@/components/ui/3d-carousel"

export function ThreeDPhotoCarouselDemo() {
  const sampleCards: CarouselCard[] = [
    {
      title: "Lemmer Watersport",
      description: "Beleving en techniek komen samen in deze snelle website voor een lokale watersport specialist.",
      category: "Hospitality & Leisure",
      href: "/cases/lemmer-watersport",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "FitFabriek Coaching Platform",
      description: "Een supersnelle Next.js website voor een fysio- en coachingpraktijk met focus op conversie.",
      category: "Webdesign & SEO",
      href: "/cases/fitfabriek",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop",
    },
    {
      title: "Studio Flux Architecten",
      description: "Een visueel rijke portfolio website met geavanceerde animaties voor een architectenbureau.",
      category: "Creative Portfolio",
      href: "/cases/studio-flux",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Atelier Noord Conceptstore",
      description: "Een moderne e-commerce ervaring met een focus op lokale vindbaarheid en merkbeleving.",
      category: "E-Commerce",
      href: "/cases/atelier-noord",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-6xl">
        <div className="mb-12 text-center">
            <h2 className="text-4xl font-display font-medium text-zinc-900 tracking-tight">Project Exposure</h2>
            <p className="text-zinc-500 mt-4 text-lg">Interactive 3D Showcase</p>
        </div>
        
        <div className="min-h-[600px] flex flex-col justify-center border-2 border-dashed border-zinc-100 rounded-[3rem] p-4 lg:p-8 bg-zinc-50/50">
          <ThreeDPhotoCarousel cards={sampleCards} />
        </div>
      </div>
    </div>
  )
}
