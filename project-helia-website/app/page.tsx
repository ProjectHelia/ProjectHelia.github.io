import { ReactNode } from "react";
import Image from "next/image";
import Script from "next/script";
import CountdownTimer from "./components/CountdownTimer";
import TeamGrid from "./components/TeamGrid";
import SponsorGrid from "./components/SponsorGrid";
import NavBar from "./components/NavBar";
import SectionHeading from "./components/SectionHeading";
import SiteFooter from "./components/SiteFooter";
import {
  BLOG_BACKGROUND_URL,
  BLOG_HEADING,
  BLOG_PARAGRAPHS,
  HERO_DESCRIPTION,
  HERO_BACKGROUND,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LAUNCH_DATE,
  LAUNCH_WINDOW_LABEL,
  LOGO_URL,
  PROGRAM_BACKGROUND_URL,
  PROGRAM_DESCRIPTION,
  PROGRAM_LINK_LABEL,
  PROGRAM_LINK_URL,
  PROGRAM_LOGO_URL,
  PROGRAM_NAME,
  TEAM_PHOTO_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SPONSORS,
  TEAM_MEMBERS,
  MISSION_BACKGROUND_URL,
  MISSION_HEADING,
  MISSION_PARAGRAPHS,
  HARDWARE_BACKGROUND_URL,
  HARDWARE_HEADING,
  HARDWARE_PARAGRAPHS,
  HARDWARE_LINK_LABEL,
  HARDWARE_LINK_URL,
} from "./content";

// A standard section: eyebrow, title, optional paragraphs, and an optional
// photo backdrop. With a photo the text turns white over a dark wash; without
// one the section keeps its own background and dark text. `children` goes
// below the copy, which is how the blog section adds its feed.
function PhotoSection({
  id,
  eyebrow,
  title,
  backgroundUrl,
  paragraphs,
  className = "",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  backgroundUrl: string;
  paragraphs: string[];
  className?: string;
  children?: ReactNode;
}) {
  const onPhoto = Boolean(backgroundUrl);

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 overflow-hidden px-gutter pt-10 pb-24 ${className}`}
    >
      {onPhoto && (
        <>
          <Image src={backgroundUrl} alt="" fill className="object-cover" />
          {/* Lower this number to show more of the photo, raise it for more
              contrast behind the text. */}
          <div className="absolute inset-0 bg-ink/60" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Body copy is capped near 70 characters per line — past that, long
            lines get noticeably harder to track back to the next one. */}
        <div className="mx-auto max-w-[680px] text-center">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            centered
            compact
            onPhoto={onPhoto}
          />
          <div className="space-y-[18px]">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className={`text-[17px] leading-[1.75] ${
                  onPhoto ? "text-white/80" : "text-body"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}

// Every section is `scroll-mt-20` so the fixed nav doesn't cover its heading
// when you jump to it from the nav.
export default function Home() {
  const [firstWord, ...restOfName] = SITE_NAME.split(" ");
  // With a photo behind the blog section its text flips to white; without
  // one the section is plain white and the text stays dark.
  const onPhoto = Boolean(BLOG_BACKGROUND_URL);

  return (
    <div className="w-full overflow-x-hidden bg-page text-ink">
      <NavBar />

      {/* HERO */}
      <section
        id="home"
        className="hero-sky relative flex min-h-screen scroll-mt-20 items-center justify-center overflow-hidden px-gutter pt-35 pb-25"
      >
        {/* priority: this is the biggest thing above the fold, so Next loads
            it straight away instead of lazily. Clears the LCP warning. */}
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* Same dark wash as the other photo sections. Lower the number
                to show more of the photo, raise it for more contrast. */}
        <div className="absolute inset-0 bg-ink/20" />

        <div className="relative z-10 flex w-full max-w-[800px] flex-col items-center text-center">
          <p className="mb-[22px] text-xs font-semibold uppercase tracking-[3px] text-accent">
            {SITE_TAGLINE}
          </p>

          {/* "Project" stays as text; "Helia" is the logo artwork. Its height
              is ~72% of the font size, which is roughly the cap height of the
              word beside it, so the two line up as one wordmark. */}
          <h1 className="mb-[22px] flex flex-wrap items-center justify-center gap-x-[0.25em] text-[clamp(48px,7vw,96px)] font-extrabold leading-none tracking-[-2px] text-white">
            {firstWord}
            <Image
              src={LOGO_URL}
              alt={restOfName.join(" ")}
              width={909}
              height={205}
              priority
              className="h-[clamp(35px,5vw,69px)] w-auto"
            />
          </h1>

          <p className="mb-14 max-w-[480px] text-[clamp(16px,1.6vw,20px)] leading-[1.6] text-white/65">
            {HERO_DESCRIPTION}
          </p>

          <CountdownTimer targetDate={LAUNCH_DATE} />

          <p className="mt-5 text-[13px] text-white/40">
            {LAUNCH_WINDOW_LABEL}
          </p>
        </div>
      </section>
      {/* MISSION */}
      <PhotoSection
        id="mission"
        eyebrow="Mission"
        title={MISSION_HEADING}
        backgroundUrl={MISSION_BACKGROUND_URL}
        paragraphs={MISSION_PARAGRAPHS}
        // min-height keeps the backdrop readable while the copy is still short.
        className="min-h-[60vh] bg-ink"
      />

      {/* HARDWARE — same layout as Mission, plus a button under the copy. */}
      <PhotoSection
        id="hardware"
        eyebrow="Hardware"
        title={HARDWARE_HEADING}
        backgroundUrl={HARDWARE_BACKGROUND_URL}
        paragraphs={HARDWARE_PARAGRAPHS}
        className="min-h-[60vh] bg-ink"
      >
        <div className="mt-10 text-center">
          <a
            href={HARDWARE_LINK_URL}
            target={HARDWARE_LINK_URL.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent px-8 py-3 font-bold text-ink shadow-lg shadow-black/40 transition-transform hover:scale-105"
          >
            {HARDWARE_LINK_LABEL}
          </a>
        </div>
      </PhotoSection>

      {/* ABOUT — the REXUS/BEXUS partner programme banner. */}
      <section
        id="about"
        className="relative scroll-mt-20 overflow-hidden px-gutter py-24"
      >
        <Image
          src={PROGRAM_BACKGROUND_URL}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Image
            src={PROGRAM_LOGO_URL}
            alt={PROGRAM_NAME}
            width={140}
            height={140}
          />
          <p className="text-lg leading-relaxed text-white">
            {PROGRAM_DESCRIPTION}
          </p>
          <a
            href={PROGRAM_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gold px-8 py-3 font-bold text-ink shadow-lg shadow-black/40 transition-transform hover:scale-105"
          >
            {PROGRAM_LINK_LABEL}
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="relative scroll-mt-20 overflow-hidden bg-page px-gutter pt-10 pb-24"
      >
        {/* Blurred so the group photo reads as texture rather than as a second
            set of faces competing with the headshots. scale-110 hides the soft
            edges blur leaves at the section boundary. */}
        <Image
          src={TEAM_PHOTO_URL}
          alt=""
          fill
          className="scale-110 object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-ink/70" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Team"
            title="The Team"
            centered
            onPhoto
            compact
          />
          <TeamGrid members={TEAM_MEMBERS} />
        </div>
      </section>

      {/* BLOG — the Building Helia write-up plus the social feed. */}
      <PhotoSection
        id="blog"
        eyebrow="Blog"
        title={BLOG_HEADING}
        backgroundUrl={BLOG_BACKGROUND_URL}
        paragraphs={BLOG_PARAGRAPHS}
        className="bg-white"
      >
        {/* Feed gets the full container width, so each card is wide enough
            that captions wrap sensibly instead of one word per line. */}
        <div className="mt-8 min-w-0">
          <div
            className={`mb-5 flex justify-end border-t pt-5 ${
              onPhoto ? "border-white/20" : "border-line"
            }`}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold ${
                onPhoto
                  ? "text-white/80 hover:text-white"
                  : "text-body hover:text-ink"
              }`}
            >
              Follow @{INSTAGRAM_HANDLE} →
            </a>
          </div>

          {/* min-w-0 + overflow-hidden are load-bearing: the feed renders a
              horizontal carousel, and grid/flex children default to
              min-width:auto, which lets that carousel's intrinsic width blow
              its container out to millions of pixels wide. */}
          <div className="min-w-0 overflow-hidden">
            <div
              className="juicer-feed"
              data-feed-id="projecthelia-20140f1f-fc8f-438b-87e2-e0d8f12c5122"
              data-per="6"
            />
            <Script
              src="https://www.juicer.io/embed/projecthelia-20140f1f-fc8f-438b-87e2-e0d8f12c5122/embed-code.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </PhotoSection>

      {/* SPONSORS */}
      <section
        id="sponsors"
        className="scroll-mt-20 bg-surface px-gutter pt-10 pb-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Sponsors"
            title="Sponsors and Partners"
            centered
          />
          <SponsorGrid sponsors={SPONSORS} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
