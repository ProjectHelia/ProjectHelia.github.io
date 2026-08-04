import Image from "next/image";
import { TeamMember } from "../content";

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    // Flex, not grid: a grid packs its last row from the left, so a row that
    // isn't full sits off-centre. Wrapped flex rows centre themselves.
    <div className="flex flex-wrap justify-center gap-x-7 gap-y-10">
      {members.map((member, index) => (
        <div key={`${member.name}-${index}`} className="w-[180px] text-center">
          {/* The ring separates the headshot from the photo behind it. */}
          {member.photoUrl ? (
            <Image
              src={member.photoUrl}
              alt={member.name}
              width={128}
              height={128}
              className="mx-auto mb-4 size-32 rounded-full object-cover ring-2 ring-white/25"
            />
          ) : (
            <div className="stripes mx-auto mb-4 size-32 rounded-full ring-2 ring-white/25" />
          )}
          <p className="text-[15px] font-bold text-white">{member.name}</p>
          <p className="mt-0.5 text-[13px] text-white/70">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
