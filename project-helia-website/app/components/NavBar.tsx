"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../content";

// Three lines that morph into an X — swaps two of the SVG's line elements
// for a cross when open, so this covers both icons without a second import.
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function NavBar() {
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);
  // Only ever used below the md breakpoint — the button that toggles it is
  // hidden above that, so this can't get stuck open on a resize to desktop.
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight whichever section is currently crossing the middle of the screen.
  // The rootMargin shrinks the "visible" band to a thin strip at mid-viewport so
  // exactly one section counts as active at a time.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1)),
    ).filter((element) => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    // 1fr / auto / 1fr centers the middle column no matter how wide the logo
    // is. Below md there are 8 links — too many to fit in a row without
    // wrapping onto several lines, so that middle column is hidden and the
    // third column holds a hamburger button instead of standing empty.
    //
    // The middle track is pinned to a hard 0px below md rather than left as
    // `auto` — an empty `display:none` child doesn't reliably collapse an
    // `auto` track to true zero. It also drops out of grid auto-placement
    // entirely (a `display:none` element isn't a grid item at all), which
    // is why the button needs `col-start-3` explicitly below — otherwise it
    // auto-places into the second slot, since the hidden middle div no
    // longer occupies the first one.
    <nav className="fixed inset-x-0 top-0 z-100 border-b border-white/8 bg-nav/65 backdrop-blur-lg">
      <div className="grid grid-cols-[1fr_0px_1fr] items-center px-gutter py-3.5 md:grid-cols-[1fr_auto_1fr]">
        <a href="#home" className="halo-shape justify-self-start">
          <Logo />
        </a>

        <div className="hidden flex-wrap justify-center gap-[clamp(16px,3vw,36px)] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`halo rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-[0.3px] text-white/85 hover:bg-white/10 ${
                link.href === activeHref ? "bg-accent/15" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="halo-shape col-start-3 justify-self-end text-white md:hidden"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* The dropdown itself — links stacked in one column, closing on tap
          so it doesn't sit open over the section you just jumped to. */}
      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-white/8 px-gutter py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3.5 py-2.5 text-sm font-semibold tracking-[0.3px] text-white/85 hover:bg-white/10 ${
                link.href === activeHref ? "bg-accent/15" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
