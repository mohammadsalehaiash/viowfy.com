import Header from "@/app/_components/headre";
import Hero from "@/app/_components/hero";
import Services from "@/app/_components/servieces";
import Process from "@/app/_components/process";
import WhyUs from  "@/app/_components/whyus";
import FAQ from "@/app/_components/faq";
import CTA from "@/app/_components/cta";
// import Contact from "@/_components/Contact";
import Footer from "@/app/_components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
         <CTA />
         <FAQ />

        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}