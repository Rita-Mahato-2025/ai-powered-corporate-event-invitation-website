"use client";

export default function LuxuryDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-4 ${className}`}
      aria-hidden
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
      <span className="text-[#D4AF37] text-xl select-none">✦</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
    </div>
  );
}
