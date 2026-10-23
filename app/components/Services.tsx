import {
  ArrowUpRight,
  Check,
  Globe,
  PenTool,
  Server,
  Share2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { services } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const icons = { Sparkles, PenTool, Globe, Smartphone, Share2, Server };

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        eyebrow="Services"
        title="Everything your brand needs"
        text="Design and technology from one team."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons];
          return (
            <Reveal key={s.title} delay={i * 0.07} className="h-full ">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-2xl hover:shadow-black/10">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-paper text-accent transition duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl text-ink/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-black">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {s.text}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2.5 text-sm text-ink/70"
                    >
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold transition hover:text-accent"
                >
                  Get a quote
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}