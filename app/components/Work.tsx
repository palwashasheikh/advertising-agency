import { work } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="Our Work" title="Projects we are proud of" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.07}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-paper to-brand/20 transition duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 p-6">
                <span className="text-xs uppercase tracking-widest text-ink/60">
                  {w.category}
                </span>
                <h3 className="text-xl font-bold text-black">{w.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}