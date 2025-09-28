"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Success Stories" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 shrink-0">
            <div className="relative h-8 w-8 overflow-hidden rounded-md ring-1 ring-border">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=256&auto=format&fit=crop"
                alt="IELTS Institute"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-base font-semibold tracking-tight">IELTS Mastery</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="px-3">Login</Button>
            <Button className="px-4">Get Started</Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <div className="relative h-7 w-7 overflow-hidden rounded-md ring-1 ring-border">
                      <Image
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=256&auto=format&fit=crop"
                        alt="IELTS Institute"
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                    IELTS Mastery
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Button variant="ghost" className="flex-1">Login</Button>
                  <Button className="flex-1">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}