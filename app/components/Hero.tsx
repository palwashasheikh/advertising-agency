"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

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
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24">
      <div className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-black/5 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <motion.span
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="inline-block rounded-full border border-line bg-ink/5 px-4 py-1.5 text-xs text-ink/70"
          >
          B-CREATIVE NETWORK AGENCY, SAUDI ARABIA
          </motion.span>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >Company
          {" "}
            <span className="text-gradient">Introduction</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-base text-ink/60 sm:text-lg md:mx-0"
          >
            Branding, social media, graphic design, websites and apps. One team.
            Fast delivery. Designs ready in 2 to 3 days.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start sm:justify-center"
          >
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-7 py-3.5 font-semibold transition hover:bg-ink/5"
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
          className="mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex aspect-square items-center justify-center rounded-full border border-line bg-white/70 shadow-2xl shadow-black/5 backdrop-blur"
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
    </section>
  );
}