"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Gift, Phone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SideTab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-1/2 right-0 z-40 -translate-y-1/2 flex items-center transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-[calc(100%-48px)]"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground p-3 h-24 w-12 rounded-l-md shadow-lg flex items-center justify-center"
        aria-label="Toggle quick links"
      >
        <ChevronLeft
          className={cn("h-6 w-6 transition-transform", isOpen && "rotate-180")}
        />
      </button>
      <div className="bg-secondary p-6 w-64 shadow-lg rounded-l-md">
        <h3 className="font-headline text-lg font-bold mb-4">Quick Links</h3>
        <div className="flex flex-col gap-3">
          <Button>
            <Zap className="mr-2 h-4 w-4" /> Flash Sale
          </Button>
          <Button>
            <Gift className="mr-2 h-4 w-4" /> Special Offer
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">
              <Phone className="mr-2 h-4 w-4" /> Quick Connect
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
