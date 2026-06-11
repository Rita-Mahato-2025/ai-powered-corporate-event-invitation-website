"use client";

import { useId } from "react";

type CustomCheckboxProps = {
  label: string;
};

export default function CustomCheckbox({ label }: CustomCheckboxProps) {
  const inputId = useId();

  return (
    <label
      htmlFor={inputId}
      className="flex items-center gap-3 cursor-pointer select-none"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <input id={inputId} type="checkbox" className="peer sr-only" />
        <span className="h-5 w-5 rounded-md border-2 border-[#C9A227] bg-white transition-colors peer-checked:bg-[#D4AF37]" />
      </span>
      <span className="text-sm text-[#C9B26D]">{label}</span>
    </label>
  );
}
