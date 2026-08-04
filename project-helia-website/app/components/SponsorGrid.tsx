import Image from "next/image";
import { Sponsor } from "../content";

export default function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
      {/* No websiteUrl means no href, which renders as plain, unclickable
          text — so one <a> covers both the linked and unlinked case. */}
      {sponsors.map((sponsor, index) => (
        <a
          key={`${sponsor.name}-${index}`}
          href={sponsor.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {sponsor.logoUrl ? (
            <Image
              src={sponsor.logoUrl}
              alt={sponsor.name}
              width={280}
              height={120}
              className="h-44 w-auto object-contain"
            />
          ) : (
            <span className="font-mono text-sm text-faint">{sponsor.name}</span>
          )}
        </a>
      ))}
    </div>
  );
}
