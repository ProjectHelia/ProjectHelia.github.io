import Logo from "./Logo";
import {
  CONTACT_EMAIL,
  COPYRIGHT_TEXT,
  FOOTER_DESCRIPTION,
  INSTAGRAM_URL,
  LEGAL_LINKS,
  NAV_LINKS,
} from "../content";

// Instagram glyph: rounded square, lens, flash dot. Drawn as strokes so it
// takes its color from the link around it.
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Small uppercase label above each footer column.
function ColumnLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-white/60">
      {children}
    </p>
  );
}

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-ink px-gutter pt-20 pb-7 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Single column on mobile — three columns this narrow left the logo's
            column so tight that the browser's max-width:100% clamped its
            width while the fixed height stayed put, stretching it out of
            shape. Full-width columns give it room to size proportionally. */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          <div>
            <div className="mb-3.5">
              <Logo size={56} />
            </div>
            <p className="max-w-[280px] text-sm leading-[1.6] text-white/55">
              {FOOTER_DESCRIPTION}
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="halo mt-4.5 inline-flex size-9 items-center justify-center rounded-full border border-white/25 text-white/75 hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>

          <div>
            <ColumnLabel>Navigate</ColumnLabel>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.filter((link) => link.href !== "#contact").map(
                (link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/75"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <ColumnLabel>Contact</ColumnLabel>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-white/75"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="text-[13px] text-white/60">{COPYRIGHT_TEXT}</p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                // Links off-site open in a new tab; in-page ones don't.
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[13px] text-white/60"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
