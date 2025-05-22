import { Footer, Header } from "@/components/layout";
import {
  AboutUs,
  BubbleTeas,
  BubbleWaffles,
  Hero,
  KyboExperience,
  SocialMedia,
} from "@/components/sections";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa]">
      <Header />
      <main className="flex-1">
        <Hero />
        <BubbleTeas />
        <BubbleWaffles />
        <AboutUs />
        <SocialMedia />
        <KyboExperience />
      </main>
      <Footer />
    </div>
  );
}
