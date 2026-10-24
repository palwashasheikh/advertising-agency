import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { about, approach, benefits, ceo } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        eyebrow="About Us"
        title="Creativity and technology, together"
      />

      <div className="grid gap-5 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-card p-8">
            <p className="text-lg leading-relaxed text-ink/80">{about.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {about.locations.map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium"
                >
                  <MapPin className="h-4 w-4 text-accent" />
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="flex h-full flex-col items-center rounded-3xl bg-ink p-8 text-center text-white sm:p-10">
            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-brand ring-offset-4 ring-offset-ink">
              {ceo.photo ? (
                <Image
                  src={ceo.photo}
                  alt={ceo.name}
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="font-display flex h-full w-full items-center justify-center bg-white text-3xl font-semibold text-ink">
                  MB
                </div>
              )}
            </div>

            <h3 className="font-display mt-6 text-2xl font-semibold">
              {ceo.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {ceo.role}
            </p>
            <span className="my-6 h-px w-12 bg-white/20" />
            <p className="text-sm leading-relaxed text-white/70">{ceo.text}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-3xl border border-line bg-card p-8">
            <h3 className="font-display text-2xl font-semibold">
              Our Approach
            </h3>
            <ol className="mt-6 space-y-5">
              {approach.map((a, i) => (
                <li key={a} className="flex gap-4">
                  <span className="font-display text-2xl leading-none text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-ink/70">
                    {a}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <div className="h-full rounded-3xl border border-line bg-card p-8">
            <h3 className="font-display text-2xl font-semibold">Benefits</h3>
            <ul className="mt-6 space-y-5">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="btn-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/70">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}