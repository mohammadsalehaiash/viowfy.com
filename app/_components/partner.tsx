"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const clients = [
  { src: "/azzad.png", alt: "عزّاد" },
  { src: "/تحفةlogo.png", alt: "تحفة" },
  { src: "/سحابة.png", alt: "سحابة" },
  { src: "/سيبر.png", alt: "سيبر" },
  { src: "/وصل.png", alt: "وصل" },
  { src: "/هورايزمس.png", alt: "هورايزونس" },
  { src: "/Flux.png", alt: "Flux" },
];

export default function ClientsSection() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // نتأكد هل المحتوى أصلاً أعرض من الحاوية (يعني فيه داعي للأسهم) ولا لا،
  // ونحدّث حالة تفعيل كل سهم حسب موضع السكرول الحالي.
  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    const hasOverflow = el.scrollWidth > el.clientWidth + 1;
    setCanScrollLeft(hasOverflow && el.scrollLeft > 1);
    setCanScrollRight(
      hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 1
    );
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateArrows();
    const onResize = () => updateArrows();
    el.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // بما إن المحتوى LTR بالترتيب، السهم اللي يودّي "يمين" (للأمام
  // بترتيب الشعارات) يسحب السكرول بمقدار موجب، والعكس بالعكس.
  const scrollByAmount = (amount) => {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section dir="rtl" className="bg-white py-16 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">
          شركات تثق بنا
        </h2>

        <div className="relative flex items-center gap-3">
          {/* السهم الأيمن (بصريًا) = يرجّع للخلف بترتيب الشعارات */}
          <button
            type="button"
            onClick={() => scrollByAmount(-300)}
            disabled={!canScrollLeft}
            aria-label="السابق"
            className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          >
            <span className="text-lg" style={{ transform: "scaleX(-1)" }}>
              ›
            </span>
          </button>

          <div
            ref={trackRef}
            dir="ltr"
            className="flex flex-1 items-center gap-8 overflow-x-auto scroll-smooth px-1 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={130}
                  height={52}
                  className="h-auto max-h-12 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* السهم الأيسر (بصريًا) = يقدّم بترتيب الشعارات */}
          <button
            type="button"
            onClick={() => scrollByAmount(300)}
            disabled={!canScrollRight}
            aria-label="التالي"
            className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-30 sm:flex"
          >
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}