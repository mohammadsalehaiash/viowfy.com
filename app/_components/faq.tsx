import { FAQ as ITEMS } from "@/app/_components/content";

export default function FAQ() {
  return (
    <section dir="rtl" id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">الأسئلة الشائعة</h2>
        <p className="mt-3 text-lg text-navy/65">أكثر ما يُسأل عن خدمة التحقق من النشاط التجاري.</p>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {ITEMS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-xl text-brand transition group-open:rotate-45 group-open:bg-brand group-open:text-white">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-8 text-navy/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}