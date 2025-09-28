"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Users, Trophy } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: BookOpen,
    title: "Assessment & Planning",
    description: "Take our diagnostic test to identify your current level and get a personalized study plan tailored to your target band score.",
    details: [
      "Comprehensive skill assessment",
      "Personalized study roadmap",
      "Target band score planning",
      "Timeline optimization"
    ]
  },
  {
    step: "02", 
    icon: Target,
    title: "Structured Practice",
    description: "Engage in daily practice sessions with AI-powered feedback and real-time performance tracking across all four modules.",
    details: [
      "Daily practice exercises",
      "AI-powered instant feedback",
      "Performance analytics",
      "Weakness identification"
    ]
  },
  {
    step: "03",
    icon: Users,
    title: "Expert Mentorship",
    description: "Get guidance from certified IELTS trainers through 1:1 sessions, group practice, and personalized coaching.",
    details: [
      "1:1 mentor sessions",
      "Speaking practice rooms",
      "Writing task reviews",
      "Strategy guidance"
    ]
  },
  {
    step: "04",
    icon: Trophy,
    title: "Achieve Your Goal",
    description: "Take full-length mock tests, track your progress, and confidently sit for your IELTS exam with guaranteed results.",
    details: [
      "Full-length mock tests",
      "Progress tracking",
      "Exam day preparation",
      "Score guarantee"
    ]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How It Works</h2>
          <p className="mt-3 text-muted-foreground">
            Our proven 4-step methodology has helped thousands of students achieve their target band scores
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-lg font-bold">
                  {step.step}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Trophy className="w-4 h-4" />
            <span>Average time to target band: 3 months</span>
          </div>
        </div>
      </div>
    </section>
  );
}
