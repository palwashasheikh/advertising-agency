import { Check } from "lucide-react";
import { achievements } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="Why Us" title="Why businesses choose B-Creative" />

  
      <Reveal className="mt-10 rounded-3xl bg-ink p-8 text-white sm:p-12">
        <div className="text-center">
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            Great Achievement
          </h3>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/60">
            Your brand is in experienced hands
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
          {achievements.map((a) => (
            <div key={a.year}>
              <div className="flex items-center gap-4">
                <span className="font-display rounded-full bg-white px-5 py-1.5 text-2xl font-semibold text-ink">
                  {a.year}
                </span>
                <span className="h-px flex-1 bg-white/20" />
              </div>

              <p className="mt-6 leading-relaxed text-white/70">
                {a.parts.map((p, i) => (
                  <span
                    key={i}
                    className={p.b ? "font-bold text-white" : undefined}
                  >
                    {p.t}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}