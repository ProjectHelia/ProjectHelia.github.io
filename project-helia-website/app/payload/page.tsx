import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import SectionHeading from "../components/SectionHeading";
import SiteFooter from "../components/SiteFooter";
import { PAYLOAD_INTRO, PAYLOAD_SYSTEMS, SITE_NAME } from "../content";

export const metadata: Metadata = {
  title: `The Payload | ${SITE_NAME}`,
};

export default function PayloadPage() {
  return (
    <div className="w-full overflow-x-hidden bg-page text-ink">
      <NavBar prefix="/" />

      {/* pt-32 clears the fixed nav bar. */}
      <main className="px-gutter pt-32 pb-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Hardware" title="The Payload" centered />
          <p className="mb-10 text-center text-[17px] leading-[1.75] text-body">
            {PAYLOAD_INTRO}
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {PAYLOAD_SYSTEMS.map((system) => (
              <section
                key={system.title}
                className="rounded-xl border border-line bg-white p-6"
              >
                <h3 className="mb-2 text-lg font-extrabold">{system.title}</h3>
                <p className="text-[15px] leading-[1.7] text-body">
                  {system.description}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter prefix="/" />
    </div>
  );
}
