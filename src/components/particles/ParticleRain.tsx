"use client";

import { useEffect, useRef } from "react";

type ParticleRainProps = {
  count?: number;
};

function ParticleRain({ count = 100 }: ParticleRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number;
    const particles = new Array(count).fill(null).map(() => ({
      x: Math.random() * (canvas?.width ?? window.innerWidth),
      y: Math.random() * -500,
      length: Math.random() * 10 + 6,
      speed: Math.random() * 0.6 + 0.2,
      opacity: Math.random() * 0.2 + 0.05,
    }));

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gold = "rgba(212,175,55,";
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.length);
        ctx.strokeStyle = `${gold}${p.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        p.y += p.speed;
        if (p.y > canvas.height + 20) {
          p.y = -p.length;
          p.x = Math.random() * canvas.width;
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export { ParticleRain };
export default ParticleRain;
