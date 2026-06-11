import { motion } from "framer-motion";
import LuxuryDivider from "@/components/ui/LuxuryDivider";
import LuxuryMap from "./LuxuryMap";
import LuxuryButton from "@/components/ui/LuxuryButton";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function LocationSection() {
  const venue = {
    name: "Taj Lake Palace",
    location: "Udaipur, India",
    mapUrl: "https://maps.app.goo.gl/wS9y1pgkie4tjCH86",
  };

  return (
    <motion.section
      id="location"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn}
      className="py-24 md:py-32"
    >
      <div className="section-container text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
          Event Location
        </h2>
        <LuxuryDivider className="mx-auto mb-6" />
        <h3 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light gold-text-gradient leading-tight">
          {venue.name}
        </h3>
        <p className="mt-3 text-[#C9B26D] tracking-wide">{venue.location}</p>

        <div className="mt-12 rounded-[24px] overflow-hidden gold-border shadow-gold bg-[#0B0E12]">
          <LuxuryMap />
          <div className="mt-4 flex justify-center pb-6">
            <LuxuryButton
              className="text-sm md:text-base"
              onClick={() => window.open(venue.mapUrl, "_blank", "noopener")}
            >
              Open in Maps
            </LuxuryButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
