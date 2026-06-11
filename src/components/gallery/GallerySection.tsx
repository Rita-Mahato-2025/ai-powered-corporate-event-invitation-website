"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import LuxuryDivider from "@/components/ui/LuxuryDivider";

const isMobile = () => typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

const GRID_ITEMS = [
  { title: "Venue", src: "/images/venue.png", fallback: "#0B0E12" },
  { title: "Memorable Selfies", src: "/images/memorable-selfies.png", fallback: "#10141B" },
  { title: "Grand Gala Feast", src: "/images/grand-gala-feast.png", fallback: "#181D26" },
  { title: "Gala Dinner", src: "/images/galadinnernight.jpg", fallback: "#0B0E12" },
  { title: "Cocktail & Networking Evening", src: "/images/cocktailandnetworkingevening.jpg", fallback: "#10141B" },
];

type GridItemProps = {
  item: { title: string; src: string; fallback: string };
  i: number;
};

const GridItem = ({ item, i }: GridItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { damping: 18, stiffness: 120, mass: 0.4 });
  const ySpring = useSpring(y, { damping: 18, stiffness: 120, mass: 0.4 });
  const [imageState, setImageState] = useState<"loading" | "loaded" | "errored">("loading");
  const errored = imageState === "errored";
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile()) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientY - cy) / 14);
    y.set((e.clientX - cx) / 14);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" as const }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX: isMobile() ? 0 : xSpring,
        rotateY: isMobile() ? 0 : ySpring,
        transformStyle: "preserve-3d",
      }}
      className={`group relative aspect-[4/5] sm:aspect-square md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-2xl gold-border bg-[#0B0E12] shadow-gold ${
        i === 2 ? "md:scale-105 md:z-10" : ""
      }`}
    >
      {!errored ? (
        <Image
          src={item.src}
          alt={item.title}
          fill
          loading="lazy"
          decoding="async"
          onLoad={() => setImageState("loaded")}
          onError={() => setImageState("errored")}
          className={`object-cover transition-all duration-700 ease-out ${
            imageState === "loaded" ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-105"
          } group-hover:scale-110 group-hover:brightness-110`}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: item.fallback }} />
      )}

      {/* Gradient overlays */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-60" : "opacity-90"}`} />
      
      {/* Gold accent line on hover */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Bottom glow on hover */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className={`absolute inset-x-0 bottom-0 p-5 md:p-6 transition-all duration-500 ${isHovered ? "translate-y-0" : "translate-y-1"}`}>
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#FFE7A3] mb-1">Gallery</p>
        <p className="font-serif text-lg md:text-xl font-light text-white">{item.title}</p>
      </div>
      
      {/* Top shimmer on hover */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 content-visibility-auto">
      <div className="section-container">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-3">Moments</p>
          <LuxuryDivider className="mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light gold-text-gradient leading-tight">A Glimpse of the Evening</h2>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg font-light text-[#C9B26D]">An exclusive look at the venue, the people, and the moments that define the Aurora experience.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-6">
          {GRID_ITEMS.map((item, i) => (
            <GridItem key={item.title} item={item} i={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[#E8D7A5]/60 tracking-widest uppercase">Swipe through • Hover to explore</p>
      </div>
    </section>
  );
}
