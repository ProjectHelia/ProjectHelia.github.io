import { COLORS, TeamMember } from "../theme";

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
        gap: 28,
      }}
    >
      {members.map((member, i) => (
        <div key={`${member.name}-${i}`} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              margin: "0 auto 16px",
              background:
                "repeating-linear-gradient(45deg,#DCE0F0,#DCE0F0 5px,#EEF0F8 5px,#EEF0F8 10px)",
            }}
          />
          <div style={{ fontWeight: 700, fontSize: 15, color: COLORS.TEXT_DARK }}>
            {member.name}
          </div>
          <div style={{ fontSize: 13, color: COLORS.TEXT_FAINT, marginTop: 2 }}>
            {member.role}
          </div>
        </div>
      ))}
    </div>
  );
}
