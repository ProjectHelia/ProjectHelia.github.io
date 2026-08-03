// Central place for colors, fonts, and site content.
// Change values here to re-theme or re-word the whole site.

export const FONT_FAMILY = "'Inter', system-ui, sans-serif";

export const COLORS = {
  CYAN: "#2FC7FA",
  WHITE: "#FFFFFF",

  // Hero gradient (dark navy -> deep blue)
  HERO_GRADIENT_TOP: "#080B24",
  HERO_GRADIENT_MID_1: "#121A4A",
  HERO_GRADIENT_MID_2: "#1B2560",
  HERO_GRADIENT_BOTTOM: "#0E1638",

  NAV_BG: "rgba(15,20,60,0.65)",
  NAV_BORDER: "rgba(255,255,255,0.08)",
  NAV_LINK: "rgba(255,255,255,0.85)",

  TEXT_DARK: "#12153A",
  TEXT_HEADING: "#1B2560",
  TEXT_BODY: "#4A4E70",
  TEXT_FAINT: "#9296B5",

  BG_PAGE: "#F7F8FC",
  BG_SECTION_ALT: "#EEF0F8",
  BORDER_LIGHT: "#E7E9F2",

  FOOTER_BG: "#12153A",
  FOOTER_TEXT: "rgba(255,255,255,0.75)",
  FOOTER_TEXT_MUTED: "rgba(255,255,255,0.55)",
  FOOTER_TEXT_FAINT: "rgba(255,255,255,0.4)",
  FOOTER_BORDER: "rgba(255,255,255,0.1)",

  PLACEHOLDER_STRIPE_1: "#DCE0F0",
  PLACEHOLDER_STRIPE_2: "#EEF0F8",
} as const;

export const SITE_NAME = "Project Helia";
export const SITE_TAGLINE = "Student Space Society";
export const HERO_DESCRIPTION =
  "A student-engineered rocket, built from propulsion to recovery. Follow the build as we count down to launch.";

// ISO timestamp the countdown counts down to.
export const LAUNCH_DATE = "2026-10-20T12:00:00Z";
export const LAUNCH_WINDOW_LABEL = "Target launch window: October 20";

export const ABOUT_HEADING = "Building Helia";
export const ABOUT_PARAGRAPHS = [
  "Project Helia is our society's current rocket build, designed, manufactured and tested entirely by students. The team covers propulsion, structures, avionics and recovery, working toward a launch window this October.",
  "We post build updates, test milestones and behind-the-scenes progress on our socials as we get closer to launch.",
];

export const INSTAGRAM_HANDLE = "project.helia";
export const INSTAGRAM_URL = "https://instagram.com";
export const INSTAGRAM_CAPTION =
  "Static fire testing continues ahead of our October launch window.";

export const CONTACT_EMAIL = "hello@projecthelia.org";
export const FOOTER_DESCRIPTION =
  "A student-engineered rocket project, built by our university space society.";
export const COPYRIGHT_TEXT = `© 2026 ${SITE_NAME}. All rights reserved.`;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" },
] as const;

export type TeamMember = {
  name: string;
  role: string;
};

// Placeholder roster — swap in real names/roles when ready.
export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Member Name", role: "Role / Subteam" },
  { name: "Member Name", role: "Role / Subteam" },
  { name: "Member Name", role: "Role / Subteam" },
  { name: "Member Name", role: "Role / Subteam" },
];

export type Sponsor = {
  name: string;
  logoUrl?: string;
};

// Placeholder sponsors — add real names/logos as they're confirmed.
export const SPONSORS: Sponsor[] = [
  { name: "SPONSOR LOGO" },
  { name: "SPONSOR LOGO" },
  { name: "SPONSOR LOGO" },
  { name: "SPONSOR LOGO" },
  { name: "SPONSOR LOGO" },
  { name: "SPONSOR LOGO" },
  { name: "SPONSOR LOGO" },
  { name: "SPONSOR LOGO" },
];
