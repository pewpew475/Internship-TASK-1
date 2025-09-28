"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { HydrationBoundary } from "@/components/HydrationBoundary";

export default function Home() {
  return (
    <HydrationBoundary>
      <div className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main id="main" className="flex-1">
          <Hero />
          <Stats />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <Contact />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </HydrationBoundary>
  );
}