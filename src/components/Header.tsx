"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const navLinks = [
  { name: "Franchise Models", href: "#models" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Earnings", href: "#earnings" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Youtube, href: "#", name: "YouTube" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-headline font-bold text-primary">
            Amisamishka
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.href} aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex h-full flex-col">
                  <div className="p-6">
                    <Link href="/" className="text-2xl font-headline font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>
                      Amisamishka
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 px-6 mt-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-semibold text-foreground/80 transition-colors hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto p-6 flex justify-center gap-4">
                     {socialLinks.map((social) => (
                      <Button key={social.name} variant="ghost" size="icon" asChild>
                        <a href={social.href} aria-label={social.name}>
                          <social.icon className="h-6 w-6" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
