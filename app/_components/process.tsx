import {  STEPS } from "@/app/_components/content";

const AR_NUM = ["١", "٢", "٣"];

export default function Process() {
  return (
    <section dir="rtl" id="process" className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-extrabold md:text-4xl">آلية العمل</h2>
        <ol className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          <div className="absolute inset-x-10 top-6 hidden h-px bg-gradient-to-l from-mint/60 via-sky/60 to-brand/60 md:block" aria-hidden />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-mint to-brand text-xl font-extrabold text-navy-deep">
                {AR_NUM[i]}
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-7 text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}