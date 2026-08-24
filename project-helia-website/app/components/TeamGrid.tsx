import Image from "next/image";
import { TeamMember } from "../content";

// A bare <a> with no href isn't a real link — screen readers and search
// crawlers both flag it, since it has nowhere to go. Render the photo
// unwrapped when there's no LinkedIn URL, and only pay for the hover glow
// and cursor when there's somewhere for it to lead.
function TeamCard({ member }: { member: TeamMember }) {
  const photo = member.photoUrl ? (
    <Image
      src={member.photoUrl}
      alt={member.name}
      width={128}
      height={128}
      className="size-32 rounded-full object-cover ring-2 ring-white/25 transition-shadow duration-250 ease-out group-hover:ring-accent"
    />
  ) : (
    <div className="stripes size-32 rounded-full ring-2 ring-white/25 transition-shadow duration-250 ease-out group-hover:ring-accent" />
  );

  return (
    <div className="w-[180px] text-center">
      {member.linkedinUrl ? (
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="group mx-auto mb-4 block w-32"
        >
          {photo}
        </a>
      ) : (
        <div className="mx-auto mb-4 block w-32">{photo}</div>
      )}
      <p className="text-[15px] font-bold text-white">{member.name}</p>
      <p className="mt-0.5 text-[13px] text-white/70">{member.role}</p>
    </div>
  );
}

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    // Flex, not grid: a grid packs its last row from the left, so a row that
    // isn't full sits off-centre. Wrapped flex rows centre themselves.
    <div className="flex flex-wrap justify-center gap-x-7 gap-y-10">
      {members.map((member, index) => (
        <TeamCard key={`${member.name}-${index}`} member={member} />
      ))}
    </div>
  );
}
