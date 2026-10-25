import Image from "next/image";
import { MapPin } from "lucide-react";
import { about, ceo } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

// First sentence = big heading, the rest = normal text (same words, nothing added)
const cut = about.text.indexOf(". ");
const lead = cut === -1 ? about.text : about.text.slice(0, cut + 1);
const rest = cut === -1 ? "" : about.text.slice(cut + 2);

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        eyebrow="About Us"
        title="Creativity and technology, together"
      />

      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] border border-line shadow-2xl shadow-black/5 md:grid-cols-5">
          {/* Company side */}
          <div className="flex flex-col justify-between bg-card p-8 sm:p-12 md:col-span-3">
            <div>
              <span className="block h-1 w-12 rounded-full bg-brand" />
              <h3 className="font-display mt-8 text-2xl font-semibold leading-snug sm:text-3xl">
                {lead}
              </h3>
              {rest && (
                <p className="mt-6 leading-relaxed text-ink/65">{rest}</p>
              )}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
              {about.locations.map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                >
                  <MapPin className="h-4 w-4 text-accent" />
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* CEO side */}
          <div className="relative overflow-hidden bg-ink p-8 text-white sm:p-12 md:col-span-2">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/25 blur-[90px]" />

            <div className="relative flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-brand ring-offset-4 ring-offset-ink">
                {ceo.photo ? (
                  <Image
                    src={ceo.photo}
                    alt={ceo.name}
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="font-display flex h-full w-full items-center justify-center bg-white text-2xl font-semibold text-ink">
                    MB
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight">
                  {ceo.name}
                </h3>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {ceo.role}
                </p>
              </div>
            </div>

            <span className="relative my-8 block h-px w-full bg-white/15" />

            <p className="relative text-sm leading-loose text-white/70">
              {ceo.text}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}