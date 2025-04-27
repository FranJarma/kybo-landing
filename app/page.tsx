import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { BubbleTeas } from "@/components/sections/bubble-teas"
import { BubbleWaffles } from "@/components/sections/bubble-waffles"
import { AboutUs } from "@/components/sections/about-us"
import { KyboExperience } from "@/components/sections/kybo-experience"
import { SocialMedia } from "@/components/sections/social-media"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa]">
      <Header/>
      <main className="flex-1">
        <Hero/>
        <BubbleTeas/>
        <BubbleWaffles/>
        <AboutUs/>
        <SocialMedia/>
        <KyboExperience/>
      </main>
      <Footer/>
    </div>
  )
}
