"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { about, approach, benefits, site } from "@/lib/site";
import About from "./About";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const NAME = "B-CREATIVE NETWORK AGENCY";

// First sentence = big heading, the rest = paragraph (same words, nothing added)
const cut = about.text.indexOf(". ");
const lead = cut === -1 ? about.text : about.text.slice(0, cut + 1);
const rest = cut === -1 ? "" : about.text.slice(cut + 2);
const afterName = lead.startsWith(NAME) ? lead.slice(NAME.length) : null;

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-32">
      <div className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-black/5 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* 1. Company intro (left) + logo (right) */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left lg:flex lg:aspect-square lg:flex-col lg:justify-center">
            <motion.h1
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="font-times text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]"
            >
              {afterName !== null ? (
                <>
                  <span className="text-gradient">{NAME}</span>
                  {afterName}
                </>
              ) : (
                lead
              )}
            </motion.h1>

            {rest && (
              <motion.p
                custom={1}
                variants={fade}
                initial="hidden"
                animate="show"
                className="font-times mt-6 hyphens-auto text-justify text-lg leading-relaxed text-ink/70 sm:text-xl"
              >
                {rest}
              </motion.p>
            )}

            <motion.div
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-first mx-auto w-full max-w-[220px] md:order-none md:max-w-none"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex aspect-square w-full items-center justify-center rounded-full border border-line bg-white/70 shadow-2xl shadow-black/5 backdrop-blur"
            >
              <Image
                src="/logo-mark.png"
                alt="B-Creative logo"
                width={753}
                height={674}
                className="h-auto w-3/5"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* 2. About (CEO + countries) */}
        <About />

        {/* 3. Approach + Benefits */}
               {/* 3. Approach + Benefits */}
        <div className="font-times mt-24 grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
            <h2 className="font-times text-3xl font-bold sm:text-4xl">
              Our Approach
            </h2>
            <ol className="mt-6 divide-y divide-line">
              {approach.map((a, i) => (
                <li key={a.title} className="group flex items-start gap-5 py-4">
                  <span className="w-10 shrink-0 text-3xl leading-none text-ink/20 transition group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{a.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink/70">
                      {a.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[2rem] bg-ink p-8 text-white shadow-xl shadow-black/20 sm:p-10">
            <h2 className="font-times text-3xl font-bold sm:text-4xl">
              Benefits
            </h2>
            <ul className="mt-6 divide-y divide-white/10">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4 py-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{b.title}</h3>
                    <p className="mt-1 leading-relaxed text-white/75">
                      {b.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}