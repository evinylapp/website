import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ForArtists from "@/components/ForArtists";
import ForLabels from "@/components/ForLabels";
import Features from "@/components/Features";
import XpSection from "@/components/XpSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ForArtists />
        <ForLabels />
        <Features />
        <XpSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
