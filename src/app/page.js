import Benefits from "@/components/Benefits";
import Blog from "@/components/Blog";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Benefits />
      <Courses/>
      <Blog/>
      <Footer />
    </div>
  );
}
