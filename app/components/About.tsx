import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { about, ceo, team } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function About() {
  return (
    <div id="about" className="font-times mt-24 scroll-mt-24">
      <SectionHead
        eyebrow="About Us"
        title="Creativity and technology, together"
        titleClass="font-times"
      />

      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-card shadow-2xl shadow-black/5">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-[90px]" />

          {/* 1. CEO */}
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

          {/* 2. Team */}
          <div className="relative border-t border-line bg-paper/70 p-8 sm:p-12">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Our Team
              </span>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                The people behind your brand
              </h3>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.07} className="h-full">
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-paper text-lg font-semibold">
                      {m.photo ? (
                        <Image
                          src={m.photo}
                          alt={m.name}
                          fill
                          sizes="64px"
                          className="object-cover object-top"
                        />
                      ) : (
                        initials(m.name)
                      )}
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-bold leading-tight">{m.name}</h4>
                      <p className="mt-1 text-sm text-accent">{m.role}</p>

                      {(m.phone || m.email) && (
                        <ul className="mt-3 space-y-1.5 border-t border-line pt-3 text-sm">
                          {m.phone && (
                            <li>
                              <a
                                href={`tel:${m.phone.replace(/[^\d+]/g, "")}`}
                                className="inline-flex items-center gap-2 text-ink/65 transition hover:text-accent"
                              >
                                <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />
                                {m.phone}
                              </a>
                            </li>
                          )}
                          {m.email && (
                            <li>
                              <a
                                href={`mailto:${m.email}`}
                                className="inline-flex items-start gap-2 break-all text-ink/65 transition hover:text-accent"
                              >
                                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                                {m.email}
                              </a>
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* 3. Countries */}
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
    </div>
  );
}