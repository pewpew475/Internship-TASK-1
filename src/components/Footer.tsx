"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">IELTS Mastery</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              India's #1 IELTS preparation platform. Join 50,000+ students who achieved their target band scores.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Company</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Resources</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#">IELTS Study Guide</Link></li>
              <li><Link href="#">Free Mock Tests</Link></li>
              <li><Link href="#">Speaking Tips</Link></li>
              <li><Link href="#">Writing Templates</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Contact</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@ieltsmastery.com</li>
              <li>+91 98765 43210</li>
              <li>WhatsApp: +91 98765 43211</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} IELTS Mastery. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}