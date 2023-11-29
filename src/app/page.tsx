import Image from "next/image";
import Header from "./components/base/Header";
import About from "./components/sections/About";
import Privacy from "./components/sections/Privacy";
import Features from "./components/sections/Features";
import WhyUs from "./components/sections/WhyUs";
import Waitlist from "./components/sections/Waitlist";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <About />
      <Privacy />
      <Features />
      <WhyUs />
      <Waitlist />
    </main>
  );
}
