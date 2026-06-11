"use client";

import { motion } from "framer-motion";

export default function AgendaCard({
  item,
  index,
}: {
  item: {
    title: string;
    time: string;
    image: string;
    bullets: string[];
  };
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.96 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" as const },
          }),
        }}
      className={`grid gap-8 items-center lg:grid-cols-2 ${
        !isEven ? "[&>*:first-child]:order-2 [&>*:last-child]:order-1" : ""
      }`}
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/10] rounded-[24px] overflow-hidden gold-border shadow-gold">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="glass-dark rounded-[24px] p-8 md:p-10 gold-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)]">
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
          {item.time}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl font-light text-white">
          {item.title}
        </h3>
        <ul className="mt-6 space-y-2 text-sm text-[#C9B26D]">
          {item.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <span className="inline-block h-1 w-1 rounded-full bg-[#D4AF37]" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
