"use client";

import { useState } from "react";

type LuxuryInputProps = {
  name: string;
  label: string;
  type: string;
  defaultValue?: string;
};

export default function LuxuryInput({
  name,
  label,
  type,
  defaultValue,
}: LuxuryInputProps) {
  const [value, setValue] = useState(defaultValue || "");

  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.3em] text-[#E8D7A5] mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="luxury-input-base"
      />
    </div>
  );
}
