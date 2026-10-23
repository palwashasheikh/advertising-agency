import { cacheLife } from "next/cache";
import { navLinks, site } from "@/lib/site";

async function getYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-lg font-extrabold">
          B<span className="text-gradient">-Creative</span>
        </div>
        <ul className="flex gap-6 text-sm text-ink/60">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-ink/40">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}