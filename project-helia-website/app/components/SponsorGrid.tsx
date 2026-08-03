import { COLORS, Sponsor } from "../theme";

export default function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
        gap: 20,
      }}
    >
      {sponsors.map((sponsor, i) => (
        <div
          key={`${sponsor.name}-${i}`}
          style={{
            aspectRatio: "2/1",
            border: `1px solid ${COLORS.BORDER_LIGHT}`,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: COLORS.TEXT_FAINT,
            fontFamily: "monospace",
            fontSize: 12,
            background: COLORS.WHITE,
            boxShadow: "0 12px 24px -18px rgba(18,21,58,0.18)",
          }}
        >
          {sponsor.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={sponsor.logoUrl}
              alt={sponsor.name}
              style={{ maxWidth: "70%", maxHeight: "70%", objectFit: "contain" }}
            />
          ) : (
            sponsor.name
          )}
        </div>
      ))}
    </div>
  );
}
