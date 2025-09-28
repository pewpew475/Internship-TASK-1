"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, FileText, Gauge, Users } from "lucide-react";

const items = [
  {
    title: "AI-Powered Speaking Practice",
    desc: "Practice with AI that evaluates your fluency, pronunciation, and coherence. Get instant feedback on your speaking performance.",
    icon: Mic,
  },
  {
    title: "Real IELTS Mock Tests",
    desc: "Full-length Cambridge-style tests with detailed analytics. Track your progress across all four modules with precision.",
    icon: FileText,
  },
  {
    title: "Instant Band Score Prediction",
    desc: "Get accurate band score predictions using our advanced AI trained on thousands of IELTS responses.",
    icon: Gauge,
  },
  {
    title: "Expert Mentor Support",
    desc: "1:1 sessions with certified IELTS trainers. Get personalized feedback and strategies to boost your score.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything You Need to Ace IELTS</h2>
          <p className="mt-3 text-muted-foreground">Comprehensive preparation tools designed by IELTS experts to help you achieve your target band score.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="h-full">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-3 text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}