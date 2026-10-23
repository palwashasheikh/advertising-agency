import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-lg font-extrabold">
          B<span className="text-gradient">-Creative</span>
        </div>
        <ul className="flex gap-6 text-sm text-white/60">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}