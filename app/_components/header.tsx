"use client";
import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "./", label: "الرئيسية" },
  { href: "#services", label: "الخدمات" },
  { href: "about", label: "من نحن" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header dir="rtl" className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-19 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="الرئيسية" className="flex items-center">
          <span className="block h-15 w-30 pt-4">
            <Image src="/logobg.png" alt="فيوفاي" width={240} height={120} priority className="h-full  scale-[1.9] object-contain" />
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="التنقل الرئيسي">
          {NAV_ITEMS.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-navy/75 transition hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="hidden rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand md:inline-block">
          ابدأ التوثيق
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="القائمة"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-navy md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 py-3 md:hidden">
          {NAV_ITEMS.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-navy">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-navy py-3 text-center font-semibold text-white">
            ابدأ التوثيق
          </a>
        </nav>
      )}
    </header>
  );
}