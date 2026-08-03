import CountdownTimer from "./components/CountdownTimer";
import TeamGrid from "./components/TeamGrid";
import SponsorGrid from "./components/SponsorGrid";
import {
  ABOUT_HEADING,
  ABOUT_PARAGRAPHS,
  COLORS,
  CONTACT_EMAIL,
  COPYRIGHT_TEXT,
  FONT_FAMILY,
  FOOTER_DESCRIPTION,
  HERO_DESCRIPTION,
  INSTAGRAM_CAPTION,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LAUNCH_DATE,
  LAUNCH_WINDOW_LABEL,
  LEGAL_LINKS,
  NAV_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
  SPONSORS,
  TEAM_MEMBERS,
} from "./theme";

function Logo({ size = 22 }: { size?: number }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 2, fontWeight: 900, fontSize: size }}>
      <span>HEL</span>
      <span style={{ position: "relative", width: 16, height: 22, display: "inline-block" }}>
        <span
          style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 14,
            height: 5,
            background: COLORS.CYAN,
            borderRadius: 3,
            transform: "rotate(35deg)",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 14,
            height: 5,
            background: COLORS.CYAN,
            borderRadius: 3,
            transform: "rotate(-35deg)",
          }}
        />
      </span>
      <span>A</span>
    </span>
  );
}

export default function Home() {
  return (
    <div
      style={{
        fontFamily: FONT_FAMILY,
        background: COLORS.BG_PAGE,
        color: COLORS.TEXT_DARK,
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px clamp(20px,5vw,64px)",
          background: COLORS.NAV_BG,
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${COLORS.NAV_BORDER}`,
        }}
      >
        <a href="#home" style={{ textDecoration: "none", color: COLORS.WHITE }}>
          <Logo />
        </a>
        <div style={{ display: "flex", gap: "clamp(16px,3vw,36px)", flexWrap: "wrap" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: COLORS.NAV_LINK,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: 0.3,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO / HOME */}
      <section
        id="home"
        style={{
          scrollMarginTop: 80,
          minHeight: "100vh",
          background: `linear-gradient(180deg,${COLORS.HERO_GRADIENT_TOP} 0%,${COLORS.HERO_GRADIENT_MID_1} 40%,${COLORS.HERO_GRADIENT_MID_2} 68%,${COLORS.HERO_GRADIENT_BOTTOM} 100%)`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "140px clamp(20px,5vw,64px) 100px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.55,
            backgroundImage: `
              radial-gradient(1.5px 1.5px at 8% 18%, #FFFFFF, transparent),
              radial-gradient(1px 1px at 22% 8%, #FFFFFF, transparent),
              radial-gradient(1px 1px at 38% 24%, #FFFFFF, transparent),
              radial-gradient(1.5px 1.5px at 55% 12%, #FFFFFF, transparent),
              radial-gradient(1px 1px at 68% 30%, #FFFFFF, transparent),
              radial-gradient(1px 1px at 78% 6%, #FFFFFF, transparent),
              radial-gradient(1.5px 1.5px at 88% 22%, #FFFFFF, transparent),
              radial-gradient(1px 1px at 95% 40%, #FFFFFF, transparent),
              radial-gradient(1px 1px at 15% 40%, #FFFFFF, transparent),
              radial-gradient(1px 1px at 45% 45%, #FFFFFF, transparent),
              radial-gradient(1.5px 1.5px at 30% 55%, #FFFFFF, transparent),
              radial-gradient(1px 1px at 62% 52%, #FFFFFF, transparent)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-58%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "160%",
            aspectRatio: "2/1",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 0%, rgba(47,199,250,0.30), rgba(47,199,250,0.06) 45%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-56%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "160%",
            aspectRatio: "2/1",
            borderRadius: "50%",
            borderTop: "1px solid rgba(47,199,250,0.45)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 800,
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: COLORS.CYAN,
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            {SITE_TAGLINE}
          </div>
          <h1
            style={{
              margin: "0 0 22px",
              fontWeight: 800,
              lineHeight: 1.0,
              fontSize: "clamp(48px,7vw,96px)",
              color: COLORS.WHITE,
              letterSpacing: "-2px",
            }}
          >
            {SITE_NAME.split(" ")[0]} <span style={{ color: COLORS.CYAN }}>{SITE_NAME.split(" ")[1]}</span>
          </h1>
          <p
            style={{
              margin: "0 0 56px",
              fontSize: "clamp(16px,1.6vw,20px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 480,
              fontWeight: 400,
            }}
          >
            {HERO_DESCRIPTION}
          </p>

          <CountdownTimer targetDate={LAUNCH_DATE} />
          <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
            {LAUNCH_WINDOW_LABEL}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ scrollMarginTop: 80, padding: "120px clamp(20px,5vw,64px)", background: COLORS.BG_PAGE }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                color: COLORS.TEXT_HEADING,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 16,
                opacity: 0.55,
              }}
            >
              About
            </div>
            <h2 style={{ margin: "0 0 24px", fontWeight: 900, fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.5px" }}>
              {ABOUT_HEADING}
            </h2>
            {ABOUT_PARAGRAPHS.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  margin: i === ABOUT_PARAGRAPHS.length - 1 ? 0 : "0 0 18px",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: COLORS.TEXT_BODY,
                  maxWidth: 520,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Instagram — placeholder. Swap this block for the real embed later. */}
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: 1.5,
                color: COLORS.TEXT_FAINT,
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Instagram — placeholder
            </div>
            <div
              style={{
                maxWidth: 360,
                background: COLORS.WHITE,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 20px 40px -24px rgba(18,21,58,0.25)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px" }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background:
                      "repeating-linear-gradient(45deg,#DCE0F0,#DCE0F0 4px,#EEF0F8 4px,#EEF0F8 8px)",
                  }}
                />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700, fontSize: 14, color: COLORS.TEXT_DARK, textDecoration: "none" }}
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
              <div
                style={{
                  aspectRatio: "1/1",
                  background:
                    "repeating-linear-gradient(135deg,#E7E9F2 0px,#E7E9F2 10px,#F2F3F9 10px,#F2F3F9 20px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: COLORS.TEXT_FAINT,
                  fontFamily: "monospace",
                  fontSize: 12,
                }}
              >
                [ POST IMAGE ]
              </div>
              <div style={{ padding: 14 }}>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: COLORS.TEXT_BODY }}>
                  <span style={{ fontWeight: 700, color: COLORS.TEXT_DARK }}>{INSTAGRAM_HANDLE}</span>{" "}
                  {INSTAGRAM_CAPTION}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" style={{ scrollMarginTop: 80, padding: "120px clamp(20px,5vw,64px)", background: COLORS.BG_SECTION_ALT }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                color: COLORS.TEXT_HEADING,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 16,
                opacity: 0.55,
              }}
            >
              Sponsors
            </div>
            <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.5px" }}>
              Supported By
            </h2>
          </div>
          <SponsorGrid sponsors={SPONSORS} />
        </div>
      </section>

      {/* TEAM */}
      <section id="team" style={{ scrollMarginTop: 80, padding: "120px clamp(20px,5vw,64px)", background: COLORS.BG_PAGE }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                color: COLORS.TEXT_HEADING,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 16,
                opacity: 0.55,
              }}
            >
              Team
            </div>
            <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.5px" }}>
              The Team
            </h2>
          </div>
          <TeamGrid members={TEAM_MEMBERS} />
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer
        id="contact"
        style={{
          scrollMarginTop: 80,
          background: COLORS.FOOTER_BG,
          color: COLORS.WHITE,
          padding: "80px clamp(20px,5vw,64px) 28px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr",
              gap: 48,
              paddingBottom: 56,
              borderBottom: `1px solid ${COLORS.FOOTER_BORDER}`,
            }}
          >
            <div>
              <div style={{ marginBottom: 14 }}>
                <Logo />
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: COLORS.FOOTER_TEXT_MUTED, maxWidth: 280 }}>
                {FOOTER_DESCRIPTION}
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 18,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: COLORS.FOOTER_TEXT,
                  textDecoration: "none",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                IG
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: COLORS.FOOTER_TEXT_FAINT,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Navigate
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {NAV_LINKS.filter((l) => l.href !== "#contact").map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{ color: COLORS.FOOTER_TEXT, textDecoration: "none", fontSize: 14 }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: COLORS.FOOTER_TEXT_FAINT,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Contact
              </div>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: COLORS.FOOTER_TEXT, textDecoration: "none", fontSize: 14 }}>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
              paddingTop: 24,
            }}
          >
            <div style={{ fontSize: 13, color: COLORS.FOOTER_TEXT_FAINT }}>{COPYRIGHT_TEXT}</div>
            <div style={{ display: "flex", gap: 24 }}>
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ color: COLORS.FOOTER_TEXT_FAINT, textDecoration: "none", fontSize: 13 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
