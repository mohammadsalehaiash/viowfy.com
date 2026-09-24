import Link from "next/link";
import { SERVICE_GROUPS } from "@/app/_components/content";

export default function Services() {
  return (
    <section dir="rtl" id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">الخدمات</h2>
        <p className="mt-3 max-w-2xl text-lg text-navy/65">
          كل خدمة مبنية على معايير ميتا الرسمية، من التوثيق إلى الربط التقني الكامل.
        </p>

        <div className="mt-12 space-y-14">
          {SERVICE_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-navy">
                <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-mint to-brand" />
                {g.title}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s) => (
                  <article key={s.slug} className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5">
                    <h4 className="text-lg font-bold leading-snug text-navy">{s.title}</h4>
                    <p className="mt-2 leading-7 text-navy/65">{s.text}</p>
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-brand transition hover:text-navy"
                    >
                      اقرأ المزيد
                      <span aria-hidden className="transition group-hover:-translate-x-1">←</span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}