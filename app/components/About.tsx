import Image from "next/image";
import { MapPin } from "lucide-react";
import { about, ceo } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="font-times mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        eyebrow="About Us"
        title="Creativity and technology, together"
        titleClass="font-times"
      />

      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-card shadow-2xl shadow-black/5">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-[90px]" />

          {/* CEO */}
          <div className="relative grid items-center gap-10 p-8 sm:p-12 md:grid-cols-[260px_1fr] lg:gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-brand ring-offset-4 ring-offset-card">
                {ceo.photo ? (
                  <Image
                    src={ceo.photo}
                    alt={ceo.name}
                    fill
                    sizes="144px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-ink text-4xl font-semibold text-white">
                    MB
                  </div>
                )}
              </div>
              <h3 className="mt-6 text-2xl font-bold">{ceo.name}</h3>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {ceo.role}
              </p>
            </div>

            <div className="md:border-l md:border-line md:pl-12 lg:pl-16">
              <span className="block h-1 w-12 rounded-full bg-brand" />
              <p className="mt-6 text-xl leading-relaxed text-ink/85 sm:text-2xl sm:leading-relaxed">
                {ceo.text}
              </p>
            </div>
          </div>

          {/* Countries */}
          <div className="relative grid divide-y divide-white/10 bg-ink text-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {about.locations.map((l) => (
              <div
                key={l}
                className="flex items-center justify-center gap-3 px-6 py-6"
              >
                <MapPin className="h-5 w-5 text-brand" />
                <span className="text-xl font-bold">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}