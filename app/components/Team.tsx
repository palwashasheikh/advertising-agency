import Image from "next/image";
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

      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.07}>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
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
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}