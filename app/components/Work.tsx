import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="Our Work" title="Projects we are proud of" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((w, i) => (
          <Reveal key={w.href} delay={i * 0.07}>
            <a
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-ink"
            >
              {w.image ? (
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-brand/40 transition duration-700 group-hover:scale-110" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink opacity-0 transition duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {w.category}
                </span>
                <h3 className="font-display mt-1.5 text-xl font-semibold leading-snug">
                  {w.title}
                </h3>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}