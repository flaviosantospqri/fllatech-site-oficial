
import { About } from "@/components/About";
import Faq from "@/components/Faqs";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LightSpots } from "@/components/LightSpot";
import Navbar from "@/components/NavBar";
import Porfolio from "@/components/Porfolio";
import Process from "@/components/Process";
import { Service } from "@/components/Service";
import { LightParticles } from "@/components/SoftLightSpot";
import Script from "next/script";

export default function Home() {

  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Agencia de Marketing e Desenvolvimento",
            "name": "Fllatech Soluções",
            "url": "https://fllatech.com",
            "logo": "https://fllatech.com/assets/img/fllatechog.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-32-98473-8948",
              "contactType": "Orçamento e Suporte",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://instagram.com/fllatechsolucoes",
              "https://linkedin.com/company/fllatech"
            ]
          }),
        }}
      />

      <LightSpots />
      <LightParticles />
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Porfolio />
      <Faq />
      <Process />
      <Footer />
    </>
  );
}
