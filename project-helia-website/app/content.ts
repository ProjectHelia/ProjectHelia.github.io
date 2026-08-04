// All the site's words and data in one place. Edit here, not in the JSX.
// Colors, fonts and spacing live in globals.css instead.

export const SITE_NAME = "Project Helia";
// Swap this for any shape — the logo is sized by height, so a wordmark, a
// square or a round file all work without touching the component. Crop off
// any blank padding first, or the artwork renders far smaller than the box.
export const LOGO_URL = "/HELIA_logo_trimmed.png";
export const SITE_TAGLINE = "Nottingham Space Society's";
export const HERO_BACKGROUND = "/6081E982-B82E-42E1-BE73-A55CE3CCB419.PNG";
export const HERO_DESCRIPTION =
  "A student-engineered rocket, built from propulsion to recovery. Follow the build as we count down to launch.";

// What the countdown counts down to, as an ISO timestamp.
export const LAUNCH_DATE = "2026-10-20T12:00:00Z";
export const LAUNCH_WINDOW_LABEL = "Target launch window: October 20";

// The banner between the hero and About, for a partner programme (e.g. REXUS/BEXUS).
// Drop your files in /public and update the two paths below.
export const PROGRAM_NAME = "REXUS/BEXUS";
export const PROGRAM_LOGO_URL = "/RexBexLogoCap.png";
export const PROGRAM_BACKGROUND_URL = "/IMG_1068.JPEG";
export const PROGRAM_DESCRIPTION =
  "REXUS/BEXUS is a campaign organized by a bilateral Agency Agreement between the German Aerospace Center (DLR) and the Swedish National Space Agency (SNSA) in cooperation with European Space Agency (ESA). It gives European students the opportunity to carry out scientific experiments on-board sounding rockets and high-altitude balloons.";
export const PROGRAM_LINK_URL = "https://rexusbexus.net";
export const PROGRAM_LINK_LABEL = "Learn More";

// Optional background photo for the Blog section. Set it and the section's
// text turns white over a dark wash; leave it "" for plain white with dark text.
export const BLOG_BACKGROUND_URL = "/IMG_4961.JPG";

export const BLOG_HEADING = "Building Helia";
export const BLOG_PARAGRAPHS = [
  "Build updates, test milestones and behind-the-scenes progress as we count down to launch.",
];

export const TEAM_PHOTO_URL = "/IMG_5036.JPG";

export const INSTAGRAM_HANDLE = "project.helia";
export const INSTAGRAM_URL = "https://www.instagram.com/uonspacesoc/";

export const CONTACT_EMAIL = "space@uonsu.com";
export const FOOTER_DESCRIPTION =
  "A student-engineered rocket project, built by our university space society.";
export const COPYRIGHT_TEXT = `© 2026 ${SITE_NAME}. All rights reserved.`;

// Drives the top nav, the scroll highlighting, and the footer's Navigate column.
export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const LEGAL_LINKS = [
  { href: "#", label: "Terms & Conditions" },
  {
    href: "https://su.nottingham.ac.uk/about/privacy",
    label: "Privacy Policy",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  /** Optional headshot in /public. Falls back to a striped circle. */
  photoUrl?: string;
};

// Placeholder roster — swap in real names and roles when ready.
export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Harry Kaye", role: "Project Manager", photoUrl: "/IMG_5044.JPG" },
  {
    name: "Harshvardhan Rana",
    role: "Systems Engineer",
    photoUrl: "/IMG_5044.JPG",
  },
  { name: "Harry Szpuk", role: "Software Lead", photoUrl: "/IMG_5044.JPG" },
  { name: "Kyane Perera", role: "Electrical Lead", photoUrl: "/IMG_5044.JPG" },
  {
    name: "Ryuichi Nakamura",
    role: "Mechanical Lead",
    photoUrl: "/IMG_5044.JPG",
  },
  { name: "Sally Robinson", role: "Science Lead", photoUrl: "/IMG_5044.JPG" },
  {
    name: "Konstantinos Konstantinidis",
    role: "Fluidics Lead",
    photoUrl: "/IMG_5044.JPG",
  },
  { name: "Rujul Wankhede", role: "Thermal Lead", photoUrl: "/IMG_5044.JPG" },
  {
    name: "Sayyed Farbod Rassouli",
    role: "Mission analyst",
    photoUrl: "/IMG_5044.JPG",
  },
  { name: "Jeevan Natt", role: "Shutter system", photoUrl: "/IMG_5044.JPG" },
  { name: "Aarav Shah", role: "Thermal Design", photoUrl: "/IMG_5044.JPG" },
  {
    name: "Chrysler Viegas",
    role: "Electrical Team",
    photoUrl: "/IMG_5044.JPG",
  },
  { name: "Tsz Ryan Au", role: "Mechanical Team", photoUrl: "/IMG_5044.JPG" },
];

export type Sponsor = {
  name: string;
  /** Optional logo in /public. Falls back to the sponsor's name as text. */
  logoUrl?: string;
  /** Optional link to the sponsor's website. Logo isn't clickable without it. */
  websiteUrl?: string;
};

// Add real sponsors here as they're confirmed. logoUrl is optional —
// leave it out and the box just shows the name as text.
export const SPONSORS: Sponsor[] = [
  {
    name: "Nottingham Biodiscovery Institute",
    logoUrl: "/1784538772632.png",
    websiteUrl:
      "https://www.nottingham.ac.uk/research/research-areas/biodiscovery-institute/biodiscovery-institute.aspx",
  },
  {
    name: "Hamamatsu Photonics",
    logoUrl: "/Hamamatsu.png",
    websiteUrl: "https://www.hamamatsu.com/jp/en.html",
  },
];
