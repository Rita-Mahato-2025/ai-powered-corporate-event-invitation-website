"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCompany } from "@/context/CompanyContext";
import LuxuryDivider from "@/components/ui/LuxuryDivider";
import LuxuryButton from "@/components/ui/LuxuryButton";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const FORM_ID = "1FAIpQLScfocIqPTc90H1HYaCE90dueDQEkMGL-lTNNVPjGKuXEdsVBg";
const FORM_RESPONSES_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/viewresponses`;

const ENTRY_IDS = {
  name: "entry.894289682",
  rsvp: "entry.1506168212",
  guests: "entry.816598806",
  dietary: "entry.1308839523",
};

export default function RSVPSection() {
  const { companyName } = useCompany();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: companyName || "",
    rsvp: "Yes",
    guests: "1",
    dietary: "Vegetarian",
  });

  const update = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const params = new URLSearchParams();
    params.append(ENTRY_IDS.name, formData.name.trim());
    params.append(ENTRY_IDS.rsvp, formData.rsvp);
    params.append(ENTRY_IDS.guests, formData.guests);
    params.append(ENTRY_IDS.dietary, formData.dietary);

    try {
      await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.section
        id="rsvp"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeIn}
        className="py-24 md:py-32"
      >
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4AF37] mb-4">
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light gold-text-gradient leading-tight">
              Thank You
            </h2>
            <p className="mt-4 text-[#C9B26D] font-light max-w-xl mx-auto leading-relaxed text-base md:text-lg">
              Your RSVP has been received. We look forward to seeing you.
            </p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="rsvp"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn}
      className="py-24 md:py-32"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3">
            Exclusive Invitation
          </p>
          <LuxuryDivider className="mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light gold-text-gradient leading-tight">
            Will You Join Us?
          </h2>
          <p className="mt-4 text-[#C9B26D] font-light max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            Confirm your presence and help us prepare an unforgettable experience tailored exclusively for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-dark rounded-[24px] p-8 md:p-10 gold-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="rsvp-name" className="block text-[10px] uppercase tracking-[0.35em] text-[#E8D7A5] mb-2">
                  Full Name <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="luxury-input-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#E8D7A5] mb-2">
                  Will you be joining us? <span className="text-[#D4AF37]">*</span>
                </span>
                <div className="mt-2 space-y-2">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="rsvp"
                        value={option}
                        checked={formData.rsvp === option}
                        onChange={(e) => update("rsvp", e.target.value)}
                        className="h-4 w-4 accent-[#D4AF37]"
                        required
                      />
                      <span className="text-sm text-white">
                        {option === "Yes" ? "I will be joining you" : "I won't be joining you"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="rsvp-guests" className="block text-[10px] uppercase tracking-[0.35em] text-[#E8D7A5] mb-2">
                  Number of Guests
                </label>
                <select
                  id="rsvp-guests"
                  value={formData.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className="luxury-input-base bg-white appearance-none cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-[#E8D7A5] mb-2">
                  Dietary Preference <span className="text-[#D4AF37]">*</span>
                </span>
                <div className="mt-2 space-y-2">
                  {["Vegetarian", "Non-veg", "Vegan"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="dietary"
                        value={option}
                        checked={formData.dietary === option}
                        onChange={(e) => update("dietary", e.target.value)}
                        className="h-4 w-4 accent-[#D4AF37]"
                        required
                      />
                      <span className="text-sm text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-center">
                <LuxuryButton
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto min-w-[240px]"
                >
                  {status === "submitting" ? "Submitting..." : "Confirm Presence"}
                </LuxuryButton>
                <p className="mt-3 text-xs text-[#A5A5A5]">
                  Your response will be sent securely to Google Forms
                </p>
                {status === "error" && (
                  <p className="mt-2 text-xs text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
