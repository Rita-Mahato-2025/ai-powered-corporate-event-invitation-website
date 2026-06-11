"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCompany } from "@/context/CompanyContext";
import LuxuryButton from "@/components/ui/LuxuryButton";
import FloatingDust from "@/components/welcome/FloatingDust";

export default function LuxuryWelcomePage({
  onEntered,
}: {
  onEntered: () => void;
}) {
  const { setCompanyName } = useCompany();
  const [imageLoaded, setImageLoaded] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (e.currentTarget.elements.namedItem("company") as HTMLInputElement).value.trim();
    if (value) {
      setCompanyName(value);
      onEntered();
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&auto=format&fit=crop";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0B0E12]"
      initial={{ opacity: 0 }}
      animate={{ opacity: imageLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: imageLoaded ? 0.6 : 0, ease: "easeInOut" }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="welcome-title"
    >
      {/* Background layers */}
      <div ref={bgRef} className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&auto=format&fit=crop)",
          }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.20),rgba(0,0,0,0.35))]" />
      </div>
      <LightSparkles />
      <LensBloom />

      {/* Ceiling projection */}
      <div className="pointer-events-none absolute inset-x-0 top-[12%] flex justify-center opacity-25 md:opacity-40">
        <span className="font-serif text-6xl md:text-8xl font-light uppercase tracking-[0.6em] text-white/90">
          Join Us
        </span>
      </div>

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.9, ease: "easeOut" as const }}
        className="relative mx-4 w-full max-w-[650px] rounded-[24px] bg-white/[0.97] p-8 md:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-[20px] border border-[rgba(201,162,39,0.3)]"
      >
        <div className="text-center">
          <h2
            id="welcome-title"
            className="text-[22px] font-light text-[#2A2A2A] mb-8"
          >
            Please let us know your company name
          </h2>

          <form onSubmit={submit} className="space-y-6">
            <input
              name="company"
              type="text"
              placeholder="Enter company name"
              className="luxury-input-base text-center md:text-left"
              autoFocus
              required
            />
            <div className="flex justify-center">
              <LuxuryButton type="submit" className="w-[220px]">
                Confirm
              </LuxuryButton>
            </div>
          </form>

          <p className="mt-6 text-sm text-[#A5A5A5]">
            Your invitation will be personalized for your organization.
          </p>
        </div>
      </motion.div>

      {/* Accessibility: announce entry purpose */}
      <span className="sr-only">
        Enter your company name to view your personalized invitation.
      </span>
    </motion.div>
  );
}

function LightSparkles() {
  const items = [
    { left: "15%", top: "10%", w: 7, h: 7, duration: 5.8, delay: 0.0 },
    { left: "35%", top: "18%", w: 5, h: 5, duration: 6.4, delay: 1.2 },
    { left: "55%", top: "12%", w: 8, h: 8, duration: 5.2, delay: 2.1 },
    { left: "75%", top: "16%", w: 6, h: 6, duration: 7.0, delay: 0.7 },
    { left: "25%", top: "22%", w: 5, h: 5, duration: 6.8, delay: 3.3 },
    { left: "65%", top: "20%", w: 7, h: 7, duration: 5.5, delay: 1.9 },
  ];

  return (
    <span className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {items.map((pos, i) => (
        <motion.span
          key={i}
          style={{ left: pos.left, top: pos.top, width: pos.w, height: pos.h, filter: "blur(1px)" }}
          className="block absolute rounded-full bg-[#FFE7A3]"
          animate={{ scale: [0.8, 1.6, 0.8], opacity: [0.05, 0.3, 0.05] }}
          transition={{ duration: pos.duration, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
        />
      ))}
    </span>
  );
}

function LensBloom() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute left-1/2 top-[12%] -translate-x-1/2 h-32 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,231,163,0.12)_0%,transparent_70%)] blur-2xl" />
      <div
        style={{ left: "28%", top: "6%" }}
        className="absolute h-24 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,231,163,0.10)_0%,transparent_70%)] blur-2xl"
      />
      <div
        style={{ right: "22%", top: "10%" }}
        className="absolute h-28 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-2xl"
      />
    </div>
  );
}
