
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/NavBar";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
    </div>
  );
}
