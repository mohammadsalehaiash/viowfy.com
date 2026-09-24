import Image from "next/image";

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
  // النسخ مرتين بالضبط (مو 3) عشان نقدر نحرك -50% تمام
  // وبكذا آخر شعار بالنسخة الأولى يكمله أول شعار بالنسخة الثانية بنفس المسافة (gap)
  // اللي بين باقي الشعارات، فما تحس بفجوة ولا بالتصاق.
  const track = [...clients, ...clients];

  return (
    <section dir="rtl" className="bg-white py-16 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">
          شركات تثق بنا
        </h2>

        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          }}
        >
          <div dir="ltr" className="clients-track flex w-max items-center gap-8">
            {track.map((client, i) => (
              <div
                key={i}
                aria-hidden={i >= clients.length || undefined}
                className="flex h-20 w-32 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white px-5 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={100}
                  height={40}
                  className="h-auto max-h-9 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*
        الحركة مكتوبة هنا مباشرة بنفس الملف (بدون "use client")
        عشان يضل المكوّن Server Component.
        القائمة مكررة مرتين بالضبط، فالانتقال -50% يكوّن دورة كاملة
        سلسة بدون أي فجوة أو التصاق عند نقطة الالتفاف.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .clients-track {
              animation: clients-scroll 24s linear infinite;
              will-change: transform;
            }
            @keyframes clients-scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .clients-track {
                animation: none;
              }
            }
          `,
        }}
      />
    </section>
  );
}