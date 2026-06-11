"use client";

import { motion } from "framer-motion";
import AgendaCard from "@/components/timeline/AgendaCard";

export default function AgendaTimeline() {
  return (
<section id="agenda" className="py-16 md:py-24 content-visibility-auto">
  <div className="section-container space-y-12 md:space-y-20">
    <AgendaCard
      index={0}
      item={{
        title: "Guest Arrival & Opening",
        time: "8:30 AM – 10:00 AM",
        image: "/images/pre-dinner-cocktail-reception.png",
        bullets: ["Welcome drinks", "VIP registration", "Executive networking"],
      }}
    />
    <AgendaCard
      index={1}
      item={{
        title: "Morning Business Sessions",
        time: "10:00 AM – 12:30 PM",
        image: "/images/conference-session-success.png",
        bullets: ["Keynote presentations", "Future strategy", "Innovation discussions"],
      }}
    />
    <AgendaCard
      index={2}
      item={{
        title: "Networking Lunch",
        time: "12:30 PM – 2:00 PM",
        image: "/images/desert-buffet-joy.png",
        bullets: ["Curated dining", "Industry leaders", "Informal networking"],
      }}
    />
    <AgendaCard
      index={3}
      item={{
        title: "Afternoon Program",
        time: "2:00 PM – 4:00 PM",
        image: "/images/conference-session-success.png",
        bullets: ["Product showcases", "Leadership panels", "Vision presentations"],
      }}
    />
    <AgendaCard
      index={4}
      item={{
        title: "Awards & Recognition Ceremony",
        time: "4:00 PM – 5:00 PM",
        image: "/images/award-night-success.png",
        bullets: ["Recognition awards", "Executive speeches", "Celebration"],
      }}
    />
    <AgendaCard
      index={5}
      item={{
        title: "Evening Gala Dinner",
        time: "6:30 PM – 10:30 PM",
        image: "/images/live-band-gala-finale.png",
        bullets: ["Formal gala dinner", "Live entertainment", "Evening celebration"],
      }}
    />
  </div>
</section>
  );
}
