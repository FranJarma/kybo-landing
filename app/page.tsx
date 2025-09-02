import { Footer, Header } from "@/components/layout";
import { AboutUs, Hero, KyboExperience, OurProducts, SocialMedia } from "@/components/sections";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa]">
      <Header />
      <main className="flex-1">
        <Hero />
        <OurProducts />
        <AboutUs />
        <SocialMedia />
        <KyboExperience />
      </main>
      <Footer />
    </div>
  );
}
