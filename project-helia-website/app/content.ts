// All the site's words and data in one place. Edit here, not in the JSX.
// Colors, fonts and spacing live in globals.css instead.

export const SITE_NAME = "Project Helia";
// Swap this for any shape — the logo is sized by height, so a wordmark, a
// square or a round file all work without touching the component. Crop off
// any blank padding first, or the artwork renders far smaller than the box.
export const LOGO_URL = "/HELIA_logo_trimmed.png";
export const SITE_TAGLINE = "Nottingham Space Society's";
export const HERO_BACKGROUND = "/axisq6034-e.png";
export const HERO_DESCRIPTION =
  "High-altitude Exposure Labratory for Incubation and Analysis. ";

// What the countdown counts down to, as an ISO timestamp.
export const LAUNCH_DATE = "2026-10-20T12:00:00Z";
export const LAUNCH_WINDOW_LABEL = "Target launch window: October 20";

// Content for the Mission section. Like the Blog section, setting a background
// turns the text white over a dark wash; leave it "" for a plain dark section.
export const MISSION_HEADING = "Our Mission";
export const MISSION_BACKGROUND_URL = "/Wireframe_Dark.png";
export const MISSION_PARAGRAPHS: string[] = [
  // Add a paragraph or two here and they'll appear under the heading.
];

// Content for the Hardware section. Same rules as Mission.
export const HARDWARE_HEADING = "The Payload";
export const HARDWARE_BACKGROUND_URL = "/Wireframe_Dark.png";
export const HARDWARE_LINK_URL = "/";
export const HARDWARE_LINK_LABEL = "Learn More";
export const HARDWARE_PARAGRAPHS: string[] = [
  // Add a paragraph or two here and they'll appear under the heading.
];

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
  { href: "#mission", label: "Mission" },
  { href: "#hardware", label: "Hardware" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#blog", label: "Blog" },
  { href: "#sponsors", label: "Sponsors" },
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
  /** Optional LinkedIn profile. The headshot isn't clickable without it. */
  linkedinUrl?: string;
};

// Headshots live in /public/team-photos, cropped square at 512px. To add one,
// drop the file there and point photoUrl at it. Leave photoUrl off entirely
// and the member gets a striped placeholder circle instead.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Harry Kaye",
    role: "Project Manager",
    photoUrl: "/IMG_5044.JPG",
    linkedinUrl: "https://www.linkedin.com/in/harrykaye/",
  },
  {
    name: "Harshvardhan Rana",
    role: "Systems Engineer",
    photoUrl: "/team-photos/harshvardhan-rana.jpg",
    linkedinUrl: "https://www.linkedin.com/in/harshvardhan-rana/",
  },
  {
    name: "Harry Szpuk",
    role: "Software Lead",
    photoUrl: "/team-photos/harry-remy-szpuk.jpg",
    linkedinUrl: "https://www.linkedin.com/in/harryszpuk/",
  },
  {
    name: "Kyane Perera",
    role: "Electrical Lead",
    photoUrl: "/team-photos/kyane-perera.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kyane-perera-524b2b21a/",
  },
  {
    name: "Ryuichi Nakamura",
    role: "Mechanical Lead",
    photoUrl: "/team-photos/ryuichi-nakamura.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ryuichi-nakamura-4796b7295/",
  },
  {
    name: "Sally Robinson",
    role: "Science Lead",
    photoUrl: "/team-photos/sally-robinson.jpg",
    // TODO: this is Ryuichi's profile, not Sally's.
    linkedinUrl: "https://www.linkedin.com/in/ryuichi-nakamura-4796b7295/",
  },
  {
    name: "Konstantinos Konstantinidis",
    role: "Fluidics Lead",
    photoUrl: "/team-photos/konstantinos-konstantinidis.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/konstantinos-konstantinidis-23511938b/",
  },
  {
    name: "Rujul Wankhede",
    role: "Thermal Lead",
    photoUrl: "/team-photos/rujul-wankhede.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rujul-wankhede/",
  },
  {
    name: "Sayyed Farbod Rassouli",
    role: "Mission analyst",
    photoUrl: "/team-photos/farbod-rassouli.jpg",
  },
  {
    name: "Jeevan Natt",
    role: "Shutter system",
    photoUrl: "/team-photos/jeevan-natt.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jeevan-natt/",
  },
  {
    name: "Aarav Shah",
    role: "Thermal Design",
    photoUrl: "/team-photos/aarav-shah.jpg",
  },
  {
    name: "Chrysler Viegas",
    role: "Electrical Team",
    // TODO: no photo shot yet, and this LinkedIn is Aarav Shah's.
    linkedinUrl: "https://www.linkedin.com/in/aarav-shah-5629472a4/",
  },
  {
    name: "Tsz Ryan Au",
    role: "Mechanical Team",
    // TODO: no photo shot yet.
  },
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
    name: "University of Nottingham",
    logoUrl: "/Sponsors/BrandEvolution-NottinghamBlue.png",
    websiteUrl: "https://www.nottingham.ac.uk",
  },
  {
    name: "Hamamatsu Photonics",
    logoUrl: "/Sponsors/Hamamatsu.png",
    websiteUrl: "https://www.hamamatsu.com/jp/en.html",
  },
  {
    name: "Ansys",
    logoUrl: "/Sponsors/ANSYS_logo.png",
    websiteUrl: "https://www.ansys.com",
  },
  {
    name: "CPI Pneumatics",
    logoUrl: "/Sponsors/b15e27_27b70db21d8441ad83d351a1246aab28~mv2.png",
    websiteUrl: "https://www.cpi-pneumatics.co.uk",
  },
  {
    name: "IMechE",
    logoUrl: "/Sponsors/imeche-logo.png",
    websiteUrl: "www.imeche.org",
  },
  {
    name: "Onshape",
    logoUrl: "/Sponsors/Onshape_logo_full.png",
    websiteUrl: "https://www.onshape.com/en/",
  },
];
