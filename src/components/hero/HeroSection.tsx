"use client";

import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { useCompany } from "@/context/CompanyContext";
import LuxuryDivider from "@/components/ui/LuxuryDivider";
import LuxuryButton from "@/components/ui/LuxuryButton";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
} as const;

const BadgeAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" as const },
  },
} as const;

const HeadingLineAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.4 + i * 0.15, ease: "easeOut" as const },
  }),
} as const;

const DividerAnimation = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "auto",
    opacity: 1,
    transition: { duration: 0.8, delay: 1.2, ease: "easeOut" as const },
  },
} as const;

const ButtonAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.5, ease: "easeOut" as const },
  },
} as const;

export default function HeroSection() {
  const { companyName } = useCompany();
  const resolvedName = companyName || "Guest";

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative flex flex-col items-center justify-center text-center pt-10 pb-16 md:pt-20 md:pb-28 lg:py-24 scroll-mt-20 md:scroll-mt-24"
    >
        <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-10">
        {/* Invitation Badge */}
        <motion.div variants={BadgeAnimation} className="relative mb-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.3)] bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-light uppercase tracking-[0.45em] text-[#E8D7A5]">
              Invitation Only
            </span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="font-serif font-light text-[clamp(36px,7vw,92px)] leading-[1.1] tracking-wide">
          <motion.span
            custom={0}
            variants={HeadingLineAnimation}
            className="inline-block"
          >
            <span className="text-white">{resolvedName},</span>
          </motion.span>
          <br />
          <motion.span
            custom={1}
            variants={HeadingLineAnimation}
            className="inline-block"
          >
            <span className="gold-text-gradient">You Are Cordially Invited.</span>
          </motion.span>
        </h1>

        {/* Divider */}
        <motion.div variants={DividerAnimation} className="pt-2">
          <LuxuryDivider />
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={HeadingLineAnimation}
          custom={2}
          className="max-w-2xl text-base md:text-xl font-light text-[#C9B26D] tracking-wide"
        >
          Join us for an unforgettable evening celebrating innovation, excellence,
          and the future of industry at Udaipur&apos;s most prestigious venue.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={ButtonAnimation} className="flex flex-wrap justify-center gap-4 pt-2">
          <LuxuryButton
            onClick={() => {
              const el = document.getElementById("agenda");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="min-w-[200px]"
          >
            View Agenda
          </LuxuryButton>
          <LuxuryButton
            variant="outline"
            onClick={() => {
              const el = document.getElementById("rsvp");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="min-w-[200px]"
          >
            Confirm RSVP
          </LuxuryButton>
        </motion.div>

        {/* Venue Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" as const }}
          className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-[24px] gold-border shadow-gold"
        >
          <img
            src="/images/pre-dinner-cocktail-reception.png"
            alt="Taj Lake Palace venue"
            className="h-full w-full object-cover"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#FFE7A3]">
              Venue
            </p>
            <p className="font-serif text-lg md:text-xl font-light text-white">
              Taj Lake Palace
            </p>
            <p className="text-xs md:text-sm text-[#E8D7A5]">Udaipur, India</p>
          </div>

          <div className="absolute top-4 right-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
              18 November 2026
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
