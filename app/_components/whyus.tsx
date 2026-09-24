import { BRAND, WHY } from "@/app/_components/content";

export default function WhyUs() {
  return (
    <section dir="rtl" id="why-us" className="bg-mist py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">لماذا {BRAND}</h2>
          <p className="mt-3 text-lg leading-8 text-navy/65">
            خبرة تقنية مركّزة على أنظمة ميتا التجارية، وليست خدمة عامة ضمن باقة تسويقية.
          </p>
        </div>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {WHY.map((w) => (
            <li key={w.title} className="border-t-2 border-brand pt-4">
              <h3 className="text-lg font-bold text-navy">{w.title}</h3>
              <p className="mt-2 leading-7 text-navy/65">{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}