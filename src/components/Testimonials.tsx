"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Band 8.0 • Software Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=160&auto=format&fit=crop",
    quote:
      "Started with Band 6.0, achieved Band 8.0 in just 3 months! The AI feedback on writing tasks was incredibly accurate and helped me improve my coherence and task response significantly.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Band 7.5 • MBA Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=160&auto=format&fit=crop",
    quote:
      "The speaking practice rooms were a game-changer. Practicing with other students and getting real-time feedback from mentors boosted my confidence and fluency.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Band 7.0 • Medical Student",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=160&auto=format&fit=crop",
    quote:
      "The mock tests were exactly like the real exam. The detailed analytics helped me identify my weak areas and the personalized study plan made all the difference.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Success Stories from Real Students</h2>
          <p className="mt-3 text-muted-foreground">Hear from students who achieved their dream band scores with our proven methodology.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-background">
                    <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                  </span>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-current" : "opacity-30"}`} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}