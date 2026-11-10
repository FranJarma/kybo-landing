import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Footer, Header } from "@/components/layout";
import { AboutUs, Hero, OurProducts, SocialMedia } from "@/components/sections";
export const dynamic = "force-static";
export default function LandingPage() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <OurProducts />
        <section className="menu-banner" aria-labelledby="menu-title">
          <div className="shell menu-banner-inner">
            <h2 id="menu-title">Hay más para tentarte.</h2>
            <Link className="action" href="/menu">
              Ver el menú completo <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
        <AboutUs />
        <SocialMedia />
      </main>
      <Footer />
    </>
  );
}
