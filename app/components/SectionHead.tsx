import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  text,
  titleClass = "",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  titleClass?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-semibold sm:text-5xl ${titleClass}`}
      >
        {title}
      </h2>
      {text && <p className="mt-4 text-ink/60">{text}</p>}
    </Reveal>
  );
}