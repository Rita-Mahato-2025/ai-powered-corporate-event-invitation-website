"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useCompany } from "@/context/CompanyContext";
import LuxuryWelcomePage from "@/components/welcome/LuxuryWelcomePage";
import { ParticleRain } from "@/components/particles/ParticleRain";
import HeroSection from "@/components/hero/HeroSection";
import EventDetails from "@/components/event/EventDetails";
import AgendaTimeline from "@/components/timeline/AgendaTimeline";
import LocationSection from "@/components/location/LocationSection";
import RSVPSection from "@/components/rsvp/RSVPSection";
import Footer from "@/components/footer/Footer";
import ExperienceSection from "@/components/experience/ExperienceSection";
import GallerySection from "@/components/gallery/GallerySection";

export default function Page() {
  const { companyName } = useCompany();
  const [gateDismissed, setGateDismissed] = useState(false);
  const showGate = !companyName && !gateDismissed;

  return (
    <main id="main-content" className="relative min-h-screen bg-[#07090C] text-white">
      <AnimatePresence>
        {showGate && <LuxuryWelcomePage onEntered={() => setGateDismissed(true)} />}
      </AnimatePresence>

      {companyName && <ParticleRain count={90} />}

      <div className="relative z-10">
        <HeroSection />
        <EventDetails />
        <ExperienceSection />
        <GallerySection />
        <AgendaTimeline />
        <LocationSection />
        <RSVPSection />
        <Footer />
      </div>
    </main>
  );
}
