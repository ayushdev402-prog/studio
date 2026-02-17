import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Youtube, href: "#", name: "YouTube" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
             <Link href="/" className="text-2xl font-headline font-bold text-primary">
                Amishka
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Amishka Food Service. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
