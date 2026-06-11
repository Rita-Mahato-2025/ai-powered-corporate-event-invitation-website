"use client";

import { motion } from "framer-motion";

export default function FooterGlow() {
  return (
    <div className="relative h-40 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full items-end justify-center pb-10">
        <p className="text-xs text-[#E8D7A5]/50 tracking-widest">
          © Aurora — Exclusive Corporate Experience
        </p>
      </div>
    </div>
  );
}
