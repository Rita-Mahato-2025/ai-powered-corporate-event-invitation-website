"use client";

import { useState, useEffect } from "react";

export function useParticleThrottle(baseCount: number) {
  const [count, setCount] = useState(baseCount);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) {
      setCount(Math.min(baseCount, 45));
    } else {
      setCount(baseCount);
    }
  }, [baseCount]);

  return { count, isMobile: count !== baseCount };
}
