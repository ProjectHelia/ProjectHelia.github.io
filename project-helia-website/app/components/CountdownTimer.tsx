"use client";

import { useEffect, useState } from "react";
import { COLORS } from "../theme";

const pad = (n: number) => String(n).padStart(2, "0");

function getRemaining(targetDate: string) {
  const diffMs = Math.max(0, new Date(targetDate).getTime() - Date.now());
  const days = Math.floor(diffMs / 86400000);
  const hours = Math.floor((diffMs % 86400000) / 3600000);
  const mins = Math.floor((diffMs % 3600000) / 60000);
  const secs = Math.floor((diffMs % 60000) / 1000);
  return { days: pad(days), hours: pad(hours), mins: pad(mins), secs: pad(secs) };
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { value: remaining.days, label: "DAYS", color: COLORS.WHITE },
    { value: remaining.hours, label: "HRS", color: COLORS.WHITE },
    { value: remaining.mins, label: "MIN", color: COLORS.WHITE },
    { value: remaining.secs, label: "SEC", color: COLORS.CYAN },
  ];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "stretch",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(20px)",
        borderRadius: 18,
        padding: "22px clamp(16px,3vw,36px)",
      }}
    >
      {units.map((unit, i) => (
        <div
          key={unit.label}
          style={{
            textAlign: "center",
            padding: "0 clamp(12px,2vw,26px)",
            borderRight: i < units.length - 1 ? "1px solid rgba(255,255,255,0.12)" : undefined,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "clamp(32px,4.2vw,48px)",
              color: unit.color,
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "-1px",
            }}
          >
            {unit.value}
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 10.5,
              letterSpacing: 2,
              color: "rgba(255,255,255,0.45)",
              fontWeight: 600,
            }}
          >
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
