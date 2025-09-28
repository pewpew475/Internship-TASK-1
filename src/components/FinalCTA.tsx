"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            🎯 Limited Time Offer
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to Achieve Your Target Band Score?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their IELTS goals with our proven methodology. 
            Start your free trial today and see the difference expert guidance makes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3">
              Book Free Consultation
            </Button>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-green-600" />
              <span>50,000+ success stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

