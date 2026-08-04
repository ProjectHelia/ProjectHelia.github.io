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
      <p
        className={`mb-1.5 text-[13px] font-bold uppercase tracking-[3px] opacity-55 ${
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
