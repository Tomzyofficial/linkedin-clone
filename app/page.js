import NavBar from "@/components/NavBar";
import { HomeInputForm } from "components/HomeInputForm";
import { HeroSection } from "components/HeroSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HomeInputForm />
      <HeroSection />
      <Footer />
    </>
  );
}
