"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: "anticipate" } as const

export type CarouselCard = {
    title: string;
    description: string;
    category?: string;
    image: string;
    href: string;
}

const Card = ({
  card,
  index,
  faceWidth,
  radius,
  faceCount,
  handleClick,
  isActive,
  rotation
}: {
  card: CarouselCard,
  index: number,
  faceWidth: number,
  radius: number,
  faceCount: number,
  handleClick: (card: CarouselCard, index: number) => void,
  isActive: boolean,
  rotation: any
}) => {
  const angle = index * (360 / faceCount);

  const inner = (
    <div className="relative w-full h-full bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer group">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
          <ArrowUpRight className="size-5" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      className="absolute flex origin-center items-center justify-center"
      style={{
        width: `${faceWidth}px`,
        aspectRatio: "1 / 1",
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
      }}
      onClick={() => handleClick(card, index)}
    >
      {isActive ? (
        <Link href={card.href} className="block w-full h-full" draggable={false}>
          {inner}
        </Link>
      ) : inner}
    </motion.div>
  );
};

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
    onActiveIndexChange,
    activeIndex,
    rotationOverride
  }: {
    handleClick: (card: CarouselCard, index: number) => void
    controls: any
    cards: CarouselCard[]
    isCarouselActive: boolean
    onActiveIndexChange?: (index: number) => void
    activeIndex?: number
    rotationOverride?: MotionValue<number>
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 768px)", { initializeWithValue: false })
    const faceWidth = isScreenSizeSm ? 150 : 220
    const faceCount = cards.length
    const cylinderWidth = faceWidth * faceCount
    const radius = (cylinderWidth / (2 * Math.PI)) * (isScreenSizeSm ? 1.2 : 1.5)
    
    // Internal rotation if no override is provided
    const internalRotation = useMotionValue(0)
    const rotation = rotationOverride || internalRotation

    const transform = useTransform(
      rotation,
      (value: number) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    // Sync active index with parent
    useEffect(() => {
        const unsubscribe = rotation.onChange((value) => {
            if (!onActiveIndexChange) return;
            const step = 360 / faceCount;
            const index = (Math.round(-value / step) % faceCount + faceCount) % faceCount;
            onActiveIndexChange(index);
        });
        return () => unsubscribe();
    }, [rotation, faceCount, onActiveIndexChange]);

    // Mouse wheel support
    const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const handleWheel = (e: React.WheelEvent) => {
      e.preventDefault();
      rotation.set(rotation.get() - e.deltaY * 0.2);
      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
      wheelTimeoutRef.current = setTimeout(() => {
        const step = 360 / faceCount;
        const nearest = Math.round(rotation.get() / step) * step;
        controls.start({
          rotateY: nearest,
          transition: { type: "spring", stiffness: 100, damping: 20 },
        });
      }, 150);
    };

    // Internal rotation control
    const rotateToIndex = (index: number) => {
        const step = 360 / faceCount;
        const target = -index * step;
        controls.start({
            rotateY: target,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        });
    };

    const rotate = (dir: "left" | "right") => {
        const step = 360 / faceCount;
        const current = rotation.get();
        const target = dir === "left" ? current + step : current - step;
        controls.start({
            rotateY: target,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        });
    };

    return (
      <div className="relative w-full flex items-center justify-center group/carousel" onWheel={handleWheel}>
        {/* Navigation Arrows (Only show if not scroll-controlled or on hover) */}
        {!rotationOverride && (
          <>
            <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); rotate("left"); }}
                className="absolute left-0 lg:-left-12 z-50 size-12 rounded-full bg-zinc-100/80 backdrop-blur-sm text-zinc-900 flex items-center justify-center border border-zinc-200 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg opacity-0 group-hover/carousel:opacity-100 ml-2 lg:ml-0"
            >
                <ChevronLeft className="size-6" />
            </button>
            <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); rotate("right"); }}
                className="absolute right-0 lg:-right-12 z-50 size-12 rounded-full bg-zinc-100/80 backdrop-blur-sm text-zinc-900 flex items-center justify-center border border-zinc-200 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg opacity-0 group-hover/carousel:opacity-100 mr-2 lg:mr-0"
            >
                <ChevronRight className="size-6" />
            </button>
          </>
        )}

        {/* 3D Ring Container */}
        <div className="relative w-full max-w-full flex items-center justify-center overflow-visible" style={{ height: isScreenSizeSm ? '240px' : 'clamp(240px, 26vw, 380px)' }}>
            <div
                className="flex h-full items-center justify-center"
                style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
                willChange: "transform",
                }}
            >
                <motion.div
                drag={!rotationOverride ? "x" : false}
                className="relative flex h-full origin-center justify-center"
                style={{
                    transform,
                    rotateY: rotation,
                    width: faceWidth,
                    transformStyle: "preserve-3d",
                }}
                onDragStart={() => controls.stop()}
                onDrag={(_, info) =>
                    !rotationOverride &&
                    rotation.set(rotation.get() + info.delta.x * (isScreenSizeSm ? 0.3 : 0.15))
                }
                onDragEnd={(_, info) =>
                    !rotationOverride &&
                    controls.start({
                    rotateY: rotation.get() + info.velocity.x * 0.05,
                    transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 30,
                        mass: 0.1,
                    },
                    })
                }
                animate={controls}
                >
                {cards.map((card, i) => (
                    <Card
                    key={`key-${card.image}-${i}`}
                    card={card}
                    index={i}
                    faceWidth={faceWidth}
                    radius={radius}
                    faceCount={faceCount}
                    handleClick={(c, idx) => {
                        if (!rotationOverride) rotateToIndex(idx);
                        handleClick(c, idx);
                    }}
                    isActive={i === activeIndex}
                    rotation={rotation}
                    />
                ))}
                </motion.div>
            </div>
        </div>
      </div>
    )
  }
)

function ThreeDPhotoCarousel({ 
    cards, 
    onActiveIndexChange,
    activeIndex = 0,
    rotationOverride
}: { 
    cards: CarouselCard[],
    onActiveIndexChange?: (index: number) => void,
    activeIndex?: number,
    rotationOverride?: MotionValue<number>
}) {
  const controls = useAnimation()

  const handleClick = (card: CarouselCard, index: number) => {
    // Parent handles state via onActiveIndexChange being called by the rotation change
    // We already call rotateToIndex in the Carousel component
  }

  return (
    <div className="relative w-full">
      <div className="relative w-full flex items-center justify-center py-4">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={true}
          onActiveIndexChange={onActiveIndexChange}
          activeIndex={activeIndex}
          rotationOverride={rotationOverride}
        />
      </div>
    </div>
  )
}

export { ThreeDPhotoCarousel };
