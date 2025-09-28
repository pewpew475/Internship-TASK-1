"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Students Trained",
    description: "Successfully helped students achieve their target bands"
  },
  {
    icon: Award,
    value: "94%",
    label: "Success Rate",
    description: "Students achieve their target band score within 3 months"
  },
  {
    icon: TrendingUp,
    value: "1.5",
    label: "Avg Band Improvement",
    description: "Average band score improvement across all students"
  },
  {
    icon: Clock,
    value: "3 Months",
    label: "Average Prep Time",
    description: "Time taken to reach target band score"
  }
];

export function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Proven Results</h2>
          <p className="mt-3 text-muted-foreground">
            Our data-driven approach has helped thousands of students achieve their IELTS goals
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

