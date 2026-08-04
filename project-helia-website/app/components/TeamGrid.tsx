import Image from "next/image";
import { TeamMember } from "../content";

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-7">
      {members.map((member, index) => (
        <div key={`${member.name}-${index}`} className="text-center">
          {member.photoUrl ? (
            <Image
              src={member.photoUrl}
              alt={member.name}
              width={96}
              height={96}
              className="mx-auto mb-4 size-24 rounded-full object-cover"
            />
          ) : (
            <div className="stripes mx-auto mb-4 size-24 rounded-full" />
          )}
          <p className="text-[15px] font-bold text-white">{member.name}</p>
          <p className="mt-0.5 text-[13px] text-white/70">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
