// The small uppercase label + big title that opens each section.
export default function SectionHeading({
  eyebrow,
  title,
  centered = false,
  onPhoto = false,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
  /** Set when this sits over a darkened photo — switches the text to white. */
  onPhoto?: boolean;
  /** Smaller title + tighter spacing, for sections tight on vertical room. */
  compact?: boolean;
}) {
  return (
    <div
      className={centered ? `${compact ? "mb-4" : "mb-10"} text-center` : ""}
    >
      {/* opacity-80, not lower: at 13px this doesn't qualify as "large text"
          under WCAG, so it needs the full 4.5:1 contrast ratio rather than
          the relaxed one — 80% is the lowest that still clears it against
          every background this renders on, including a dark-photo section
          with a light source image underneath the wash. */}
      <p
        className={`mb-1.5 text-[13px] font-bold uppercase tracking-[3px] opacity-80 ${
          onPhoto ? "text-white" : "text-heading"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`${
          compact
            ? "text-[clamp(24px,3vw,36px)]"
            : "text-[clamp(32px,4vw,48px)]"
        } font-black tracking-[-0.5px] ${onPhoto ? "text-white" : ""} ${
          centered ? "" : "mb-6"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
