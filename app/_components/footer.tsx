import Image from "next/image";
import { BRAND, FOOTER_SERVICES, NAV, SITE_URL } from "@/app/_components/content";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-navy-deep text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="inline-block rounded-xl bg-white px-3 py-1 pt-6">
            <span className="block h-15 w-24">
              <Image src="/logobg.png" alt="فيوفاي" width={240} height={100} priority className="h-full  scale-[1.9] object-contain" />
            </span>
          </span>
          <p className="mt-4 max-w-sm leading-7">
            خدمات تقنية متخصصة في توثيق وتشغيل الأنشطة التجارية على منصات ميتا: فيسبوك، انستقرام، وواتساب بيزنس.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">الخدمات</h3>
          <ul className="space-y-2">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}><a href={`${SITE_URL}/#services`} className="hover:text-mint">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">عنا</h3>
          <ul className="space-y-2">
            {[...NAV.slice(2), { label: "تواصل معنا", href: "#contact" }].map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-mint">{n.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 text-sm text-white/50 md:flex-row md:justify-between">
          <p>© 2026 {BRAND}. جميع الحقوق محفوظة.</p>
          <p>هذا الموقع مستقل وغير تابع رسميًا لشركة Meta.</p>
        </div>
      </div>
    </footer>
  );
}