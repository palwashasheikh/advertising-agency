import { stats } from "@/lib/site";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <Reveal className="grid grid-cols-1 gap-8 rounded-3xl border border-line bg-card p-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-gradient text-4xl font-extrabold sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-ink/60">{s.label}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}