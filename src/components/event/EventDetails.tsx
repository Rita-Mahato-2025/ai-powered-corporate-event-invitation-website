"use client";

import { motion } from "framer-motion";
import LuxuryDivider from "@/components/ui/LuxuryDivider";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

const schedule = [
  { time: "8:30 AM – 10:00 AM", label: "Guest Arrival & Opening" },
  { time: "10:00 AM – 12:30 PM", label: "Morning Business Sessions" },
  { time: "12:30 PM – 2:00 PM", label: "Networking Lunch" },
  { time: "2:00 PM – 4:00 PM", label: "Afternoon Program" },
  { time: "4:00 PM – 5:00 PM", label: "Awards & Recognition" },
  { time: "6:30 PM – 10:30 PM", label: "Evening Gala Dinner" },
];

export default function EventDetails() {
  return (
    <motion.section
      id="event-details"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn}
      className="py-24 md:py-32 content-visibility-auto"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3">
            Event Details
          </p>
          <LuxuryDivider className="mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[56px] font-light gold-text-gradient leading-tight">
            November 18, 2026
          </h2>
          <p className="mt-3 text-[#C9B26D] tracking-wide text-base md:text-lg font-light px-4 md:px-0">
            Taj Lake Palace, Udaipur, India
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5">
          {schedule.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                 ease: "easeOut" as const,
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 40px rgba(212,175,55,0.2)",
              }}
              className="glass-dark rounded-2xl md:rounded-[24px] p-5 md:p-8 gold-border transition-all duration-300"
            >
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] mb-2">
                {item.time}
              </p>
              <h3 className="font-serif text-lg md:text-2xl font-light text-white leading-snug">
                {item.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
