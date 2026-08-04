"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../content";

export default function NavBar() {
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);

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
    // 1fr / auto / 1fr centers the middle column no matter how wide the
    // logo is — the empty third column is a spacer that balances it.
    <nav className="fixed inset-x-0 top-0 z-100 grid grid-cols-[1fr_auto_1fr] items-center border-b border-white/8 bg-nav/65 px-gutter py-3.5 backdrop-blur-lg">
      <a href="#home" className="halo-shape justify-self-start">
        <Logo />
      </a>

      <div className="flex flex-wrap justify-center gap-[clamp(16px,3vw,36px)]">
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

      <div />
    </nav>
  );
}
