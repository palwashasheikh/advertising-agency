"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { approach, benefits, site } from "@/lib/site";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <h1 className="sr-only">
          B-Creative: Advertising and IT Agency in Saudi Arabia and Pakistan
        </h1>

        <div className="flex flex-col items-center text-center">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            <Image
              src="/logo-mark.png"
              alt="B-Creative logo"
              width={753}
              height={674}
              className="h-24 w-auto sm:h-28"
              priority
            />
          </motion.div>

          <motion.span
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 inline-block rounded-full border border-line bg-white/70 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/70 backdrop-blur"
          >
            Advertising + IT Agency · Saudi Arabia & Pakistan
          </motion.span>
        </div>

        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              How we work
            </span>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Our Approach
            </h2>
            <ol className="mt-6 divide-y divide-line">
              {approach.map((a, i) => (
                <li key={a} className="group flex items-start gap-5 py-4">
                  <span className="font-display w-10 shrink-0 text-3xl leading-none text-ink/20 transition group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-0.5 leading-relaxed text-ink/75">{a}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[2rem] bg-ink p-8 text-white shadow-xl shadow-black/20 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              What you get
            </span>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Benefits</h2>
            <ul className="mt-6 divide-y divide-white/10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-8 py-4 font-semibold transition hover:bg-ink/5"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}