import NavBar from "@/components/NavBar";
import TopIntro from "components/TopIntro";
import { HomeInputForm } from "components/HomeInputForm";
import { HeroSection } from "components/HeroSection";
import { JobHeroSection } from "@/components/JobHeroSection";
import AsideElem from "@/components/AsideElem";
import { WhoIsLinkedInFor } from "components/WhoIsLinkedInFor";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <TopIntro />
      <HomeInputForm />
      <HeroSection />
      <JobHeroSection />
      <AsideElem />
      <WhoIsLinkedInFor />
      <Footer />
    </>
  )

}