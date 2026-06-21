import { About } from "@/components/About";
import { Branches } from "@/components/Branches";
import { Coaches } from "@/components/Coaches";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Franchise } from "@/components/Franchise";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { Sponsors } from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <About />
        <Programs />
        <Coaches />
        <Branches />
        <Gallery />
        <Franchise />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
