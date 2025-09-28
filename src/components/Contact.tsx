"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    description: "Mon-Fri 9AM-6PM IST"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@ielts.institute", "info@ielts.institute"],
    description: "We respond within 2 hours"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Education Street", "Mumbai, Maharashtra 400001"],
    description: "Visit us for in-person consultation"
  },
  {
    icon: Clock,
    title: "Support Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
    description: "24/7 online support available"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <p className="mt-3 text-muted-foreground">
            Have questions? We're here to help you succeed in your IELTS journey
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="targetBand">Target Band Score</Label>
                <Input id="targetBand" placeholder="e.g., 7.0, 7.5, 8.0" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your IELTS goals and how we can help..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm">{detail}</p>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Free Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Book a Demo Session
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="w-4 h-4 mr-2" />
                    Visit Our Center
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

