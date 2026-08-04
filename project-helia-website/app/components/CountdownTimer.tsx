"use client";

import { useMemo, useSyncExternalStore } from "react";

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = 60 * MS_PER_SECOND;
const MS_PER_HOUR = 60 * MS_PER_MINUTE;
const MS_PER_DAY = 24 * MS_PER_HOUR;

const twoDigits = (n: number) => String(n).padStart(2, "0");

function timeUntil(targetDate: string) {
  // Clamped at zero so the display holds at 00 instead of going negative.
  const remaining = Math.max(0, new Date(targetDate).getTime() - Date.now());

  return [
    { label: "DAYS", value: Math.floor(remaining / MS_PER_DAY) },
    { label: "HRS", value: Math.floor((remaining % MS_PER_DAY) / MS_PER_HOUR) },
    {
      label: "MIN",
      value: Math.floor((remaining % MS_PER_HOUR) / MS_PER_MINUTE),
    },
    {
      label: "SEC",
      value: Math.floor((remaining % MS_PER_MINUTE) / MS_PER_SECOND),
    },
  ];
}

const PLACEHOLDER_UNITS = [
  { label: "DAYS", value: 0 },
  { label: "HRS", value: 0 },
  { label: "MIN", value: 0 },
  { label: "SEC", value: 0 },
];

// Ticks the clock: React calls this once, then again every time `callback`
// fires, and re-checks the snapshot below.
function subscribe(callback: () => void) {
  const id = setInterval(callback, MS_PER_SECOND);
  return () => clearInterval(id);
}

// A plain number, not the derived {label, value} array — useSyncExternalStore
// compares this by value on every render, and a freshly built array would
// always look "changed" and force extra work even when nothing moved.
function getClientSnapshot() {
  return Math.floor(Date.now() / MS_PER_SECOND);
}

// "Now" is different on the server (render time) than on the client
// (page-load time), so this can't return a real time — null tells React
// "use the placeholder for the server render and the client's first paint,
// then swap in the real value right after hydration." That swap is built
// into this hook, so it never produces a hydration mismatch.
function getServerSnapshot() {
  return null;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const nowInSeconds = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const units = useMemo(
    () => (nowInSeconds === null ? PLACEHOLDER_UNITS : timeUntil(targetDate)),
    [nowInSeconds, targetDate],
  );

  return (
    <div className="inline-flex items-stretch rounded-[18px] border border-white/12 bg-white/5 px-[clamp(16px,3vw,36px)] py-[22px] backdrop-blur-[20px]">
      {units.map((unit, index) => (
        <div
          key={unit.label}
          className={`px-[clamp(12px,2vw,26px)] text-center ${
            index < units.length - 1 ? "border-r border-white/12" : ""
          }`}
        >
          <div
            className={`text-[clamp(32px,4.2vw,48px)] font-bold leading-none tracking-[-1px] tabular-nums ${
              // The seconds tick fastest, so it gets the accent color.
              unit.label === "SEC" ? "text-accent" : "text-white"
            }`}
          >
            {twoDigits(unit.value)}
          </div>
          <div className="mt-2 text-[10.5px] font-semibold tracking-[2px] text-white/45">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
