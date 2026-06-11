"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LuxuryButton from "@/components/ui/LuxuryButton";

const NAV_LINKS = [
  { label: "Agenda", href: "#agenda" },
  { label: "Location", href: "#location" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(11,14,18,0.80)" : "rgba(11,14,18,0)",
          borderBottomColor: scrolled ? "rgba(212,175,55,0.25)" : "rgba(255,255,255,0)",
          paddingTop: scrolled ? "12px" : "16px",
          paddingBottom: scrolled ? "12px" : "16px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" as const }}
        className="fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-2 md:px-10 md:py-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-xl md:text-2xl font-light tracking-wide text-white"
          >
            Aurora
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-xs uppercase tracking-[0.3em] text-[#E8D7A5] transition-colors duration-300 hover:text-[#D4AF37]"
              >
                {link.label}
              </button>
            ))}
            <LuxuryButton
              variant="outline"
              className="!h-11 !text-base !px-6"
              onClick={() => handleClick("#rsvp")}
            >
              RSVP
            </LuxuryButton>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D4AF37]"
          >
            <svg width="20" height="14" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 1h18M0 6h18M0 11h18" />
            </svg>
          </button>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  );
}

function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            className="ml-auto h-full w-[85%] max-w-sm bg-[#0B0E12] border-l border-[rgba(212,175,55,0.2)] px-8 py-20"
          >
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="absolute right-6 top-6 h-10 w-10 rounded-full border border-white/10 bg-white/5 text-[#D4AF37]"
            >
              ✕
            </button>

            <nav className="mt-10 flex flex-col gap-6">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    onClose();
                  }}
                  className="text-left font-serif text-3xl md:text-4xl font-light text-white transition-colors hover:text-[#D4AF37] min-h-[44px]"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-10">
              <LuxuryButton
                variant="outline"
                className="w-full h-14 text-lg"
                onClick={() => {
                  const el = document.querySelector("#rsvp");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  onClose();
                }}
              >
                RSVP Now
              </LuxuryButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
