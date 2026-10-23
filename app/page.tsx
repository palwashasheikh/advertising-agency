import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Stats from "@/app/components/Stats";
import Work from "@/app/components/Work";
import WhyUs from "@/app/components/WhyUs";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Work />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}