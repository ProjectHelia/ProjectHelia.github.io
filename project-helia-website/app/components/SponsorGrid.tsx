import Image from "next/image";
import { Sponsor } from "../content";

export default function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
      {sponsors.map((sponsor, index) => {
        const logo = sponsor.logoUrl ? (
          <Image
            src={sponsor.logoUrl}
            alt={sponsor.name}
            width={280}
            height={120}
            className="h-44 w-auto object-contain"
          />
        ) : (
          <span className="font-mono text-sm text-faint">{sponsor.name}</span>
        );

        // An <a> with no href isn't a real link — Lighthouse's SEO audit
        // flags it as uncrawlable, and it has nowhere to go anyway — so
        // only render the anchor when there's a real destination.
        return sponsor.websiteUrl ? (
          <a
            key={`${sponsor.name}-${index}`}
            href={sponsor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {logo}
          </a>
        ) : (
          <div key={`${sponsor.name}-${index}`}>{logo}</div>
        );
      })}
    </div>
  );
}
