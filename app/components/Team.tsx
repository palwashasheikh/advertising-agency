import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { team } from "@/lib/site";
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

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-5 pb-24">
      <SectionHead
        eyebrow="Our Team"
        title="The people behind your brand"
      />

      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.07} className="h-full">
            <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
              <div className="font-display relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-paper text-lg font-semibold">
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
                <h3 className="font-bold leading-tight">{m.name}</h3>
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
    </section>
  );
}