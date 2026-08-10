import Image from "next/image";
import { TeamMember } from "../content";

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    // Flex, not grid: a grid packs its last row from the left, so a row that
    // isn't full sits off-centre. Wrapped flex rows centre themselves.
    <div className="flex flex-wrap justify-center gap-x-7 gap-y-10">
      {members.map((member, index) => (
        <div key={`${member.name}-${index}`} className="w-[180px] text-center">
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              member.linkedinUrl ? `${member.name} on LinkedIn` : undefined
            }
            className={`mx-auto mb-4 block w-32 ${
              member.linkedinUrl ? "halo-shape" : ""
            }`}
          >
            {member.photoUrl ? (
              <Image
                src={member.photoUrl}
                alt={member.name}
                width={128}
                height={128}
                className="size-32 rounded-full object-cover ring-2 ring-white/25"
              />
            ) : (
              <div className="stripes size-32 rounded-full ring-2 ring-white/25" />
            )}
          </a>
          <p className="text-[15px] font-bold text-white">{member.name}</p>
          <p className="mt-0.5 text-[13px] text-white/70">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
