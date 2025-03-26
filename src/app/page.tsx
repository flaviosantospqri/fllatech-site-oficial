
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/NavBar";
import Porfolio from "@/components/Porfolio";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Porfolio />
    </>
  );
}
