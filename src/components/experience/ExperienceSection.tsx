"use client";

import { motion } from "framer-motion";
import LuxuryDivider from "@/components/ui/LuxuryDivider";

const experiences = [
  {
    headline: "Arrive in Grandeur",
    body: "Step into a world of refined elegance at the historic Taj Lake Palace. A dedicated VIP arrival corridor with welcome libations sets the tone for the day.",
    image: "/images/pre-dinner-cocktail-reception.png",
    label: "Arrival Experience",
  },
  {
    headline: "Shape the Future",
    body: "Hear from visionary leaders in keynotes and curated innovation sessions designed to challenge conventions and catalyze growth.",
    image: "/images/conference-session-success.png",
    label: "Business Sessions",
  },
  {
    headline: "Connect Meaningfully",
    body: "Gather with industry leaders over curated dining experiences. Every table is designed for high-value conversation and long-form networking.",
    image: "/images/desert-buffet-joy.png",
    label: "Networking",
  },
  {
    headline: "Celebrate Excellence",
    body: "An elegant evening gala recognizing outstanding contributions. Fine dining, live entertainment, and a night to remember.",
    image: "/images/live-band-gala-finale.png",
    label: "Gala Dinner",
  },
];

function ExperienceBlock({
  item,
  index,
}: {
  item: (typeof experiences)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: "easeOut" as const }}
      className={`grid gap-6 md:gap-10 items-center lg:grid-cols-2 ${
        isEven ? "" : "[&>*:first-child]:order-2 [&>*:last-child]:order-1"
      }`}
    >
      <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl md:rounded-[24px] overflow-hidden gold-border shadow-gold">
        <img
          src={item.image}
          alt={item.label}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-md">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#FFE7A3]">
            {item.label}
          </span>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">
          The Experience
        </p>
        <h3 className="font-serif text-2xl md:text-4xl font-light text-white leading-snug">
          {item.headline}
        </h3>
        <LuxuryDivider />
        <p className="text-base md:text-lg font-light text-[#C9B26D] leading-relaxed">
          {item.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
      <section id="experience" className="py-16 md:py-24 content-visibility-auto">
      <div className="section-container space-y-16 md:space-y-24">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-2">
            Immersive
          </p>
          <LuxuryDivider className="mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] font-light gold-text-gradient leading-tight">
            An Experience Beyond Events
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {experiences.map((item, idx) => (
            <ExperienceBlock key={item.label} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
