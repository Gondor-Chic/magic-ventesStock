import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import Separator from "@/components/ui/Separator";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Separator />
        <ProductsSection />
        <Separator />
        <AboutSection />
        <Separator />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
