
import { About } from "@/components/About";
import Faq from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Porfolio from "@/components/Porfolio";
import Process from "@/components/Process";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Porfolio />
      <Faq />
      <Process />
    </>
  );
}
