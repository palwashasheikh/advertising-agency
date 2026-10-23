"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const inputClass =
  "w-full rounded-xl border border-line bg-paper text-ink placeholder:text-ink/40 px-4 py-3 text-sm outline-none transition focus:border-brand";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Branding",
    message: "",
  });

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello B-Creative,\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead
        eyebrow="Contact"
        title="Let's build your brand"
        text="Tell us what you need. We reply fast."
      />
      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="space-y-4 md:col-span-2">
          {[
            { Icon: Phone, text: site.phone, href: `tel:${site.phone}` },
            { Icon: Mail, text: site.email, href: `mailto:${site.email}` },
            { Icon: MapPin, text: site.address, href: undefined },
          ].map(({ Icon, text, href }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-2xl border border-line bg-card p-5"
            >
              <Icon className="h-5 w-5 shrink-0 text-accent" />
              {href ? (
                <a href={href} className="break-all text-sm hover:text-accent">
                  {text}
                </a>
              ) : (
                <span className="text-sm">{text}</span>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form
            onSubmit={submit}
            className="space-y-4 rounded-3xl border border-line bg-card p-7"
          >
            <input
              required
              placeholder="Your name"
              className={inputClass}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
            <input
              required
              placeholder="Phone number"
              className={inputClass}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
            <select
              className={inputClass}
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              {["Branding", "Graphic Design", "Website", "App", "Social Media", "IT & ERP"].map(
                (s) => (
                  <option key={s} className="bg-ink">
                    {s}
                  </option>
                )
              )}
            </select>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your project"
              className={inputClass}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
            <button
              type="submit"
              className="btn-primary w-full rounded-full py-3.5 font-semibold text-white"
            >
              Send on WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}