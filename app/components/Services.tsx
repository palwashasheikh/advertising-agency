import { ArrowUpRight, Globe, PenTool, Share2, Smartphone } from "lucide-react";
import { services, servicesIntro } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const icons = { PenTool, Globe, Smartphone, Share2 };

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        eyebrow="Services"
        title="Our Services"
        text={servicesIntro}
      />

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons];
          return (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-line bg-card p-8 transition duration-500 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:shadow-2xl hover:shadow-black/20 sm:p-10">
                <span className="font-display pointer-events-none absolute right-6 top-2 text-8xl leading-none text-ink/[0.06] transition duration-500 group-hover:text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-paper text-accent transition duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-brand">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-display relative mt-8 text-2xl font-semibold transition duration-500 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-ink/60 transition duration-500 group-hover:text-white/70">
                  {s.text}
                </p>

                <a
                  href="#contact"
                  className="relative mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold transition duration-500 group-hover:text-brand"
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