"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Agenda", href: "#agenda" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Footer() {
  const [year, setYear] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
    setMounted(true);
  }, []);

  return (
    <footer className="relative border-t border-white/5 bg-[#07090C]">
      <div className="section-container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="font-serif text-2xl font-light text-white">Aurora</p>
            <p className="text-sm text-[#C9B26D] leading-relaxed max-w-xs">
              Bespoke corporate invitation experience. November 18, 2026 — Taj Lake Palace, Udaipur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">Explore</p>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-[#C9B26D] transition-colors hover:text-[#D4AF37] w-fit">
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]">Contact</p>
            <p className="text-sm text-[#C9B26D]">events@aurora-corporate.com</p>
            <p className="text-sm text-[#C9B26D]">+91 98765 43210</p>
            <div className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} aria-label={link.label} className="text-xs uppercase tracking-widest text-[#A5A5A5] transition-colors hover:text-[#D4AF37]">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#E8D7A5]/50">{mounted ? `© ${year} Aurora. All rights reserved.` : "—"}</p>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] transition-opacity hover:opacity-80"
          >
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
