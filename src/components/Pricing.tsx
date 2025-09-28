"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/month",
    description: "Perfect for beginners starting their IELTS journey",
    features: [
      "5 Mock Tests per month",
      "Basic AI Essay Feedback",
      "Speaking Practice Rooms (2/week)",
      "Study Materials Access",
      "Progress Tracking",
      "Email Support"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "₹4,999",
    period: "/month",
    description: "Most popular choice for serious IELTS aspirants",
    features: [
      "Unlimited Mock Tests",
      "Advanced AI Feedback (All Modules)",
      "Daily Speaking Practice Rooms",
      "1:1 Mentor Sessions (2/month)",
      "Personalized Study Plans",
      "Priority Support",
      "Band Score Predictor",
      "Writing Task Analysis"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Premium",
    price: "₹7,999",
    period: "/month",
    description: "Complete preparation with maximum support",
    features: [
      "Everything in Professional",
      "Unlimited 1:1 Mentor Sessions",
      "Custom Study Roadmap",
      "Exam Day Preparation",
      "Dedicated Success Manager",
      "24/7 Priority Support",
      "Score Guarantee (Band 7+)",
      "Free Retake if Target Not Met"
    ],
    popular: false,
    cta: "Start Free Trial"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Choose Your Success Plan</h2>
          <p className="mt-3 text-muted-foreground">
            Flexible pricing designed to fit your budget and timeline. All plans include a 7-day free trial.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 7-day free trial. No credit card required. Cancel anytime.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

