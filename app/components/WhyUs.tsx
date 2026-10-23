import { Check } from "lucide-react";
import { why } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead eyebrow="Why Us" title="Why businesses choose B-Creative" />
      <div className="grid gap-4 md:grid-cols-2">
        {why.map((w, i) => (
          <Reveal
            key={w.title}
            delay={i * 0.07}
            className="flex gap-4 rounded-3xl border border-line bg-card p-6"
          >
            <div className="btn-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <Check className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-black">{w.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}