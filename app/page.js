import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import PortfolioPreview from "@/components/Portfolio/PortfolioPreview";
import Reviews from "@/components/Reviews/Reviews";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PortfolioPreview />
      <Reviews />
      <Contact />
    </>
  );
}
