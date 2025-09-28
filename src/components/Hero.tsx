"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop"
          alt="Classroom background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">🎯 Band 7+ Guaranteed</Badge>
            <h1 className="text-4xl sm:text-5xl/none font-bold tracking-tight">
              Master IELTS with India's #1 Online Platform
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-prose">
              Join 50,000+ students who achieved their target band scores with our proven methodology, 
              AI-powered feedback, and expert mentors. Start your journey to IELTS success today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="#pricing">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Book Free Consultation</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=160&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=160&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=160&auto=format&fit=crop",
                ].map((src, i) => (
                  <span key={i} className="relative inline-block h-8 w-8 overflow-hidden rounded-full ring-2 ring-background">
                    <Image src={src} alt="student" fill sizes="32px" className="object-cover" />
                  </span>
                ))}
              </div>
              <p>
                50,000+ successful students • 94% success rate • Avg. improvement 1.5 bands
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl border bg-card shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="IELTS preparation"
                fill
                sizes="(max-width: 1024px) 0px, 512px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                <p className="text-sm text-muted-foreground">
                  Real speaking rooms • Instant essay feedback • Weekly mocks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}