import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-food-startup');

  return (
    <section id="home" className="relative h-[90dvh] min-h-[600px] max-h-[1080px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full items-end pb-20 md:items-center md:pb-0">
        <div className="container mx-auto px-4 text-center md:text-left text-white">
          <div className="max-w-3xl">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight">
              Start Your Own Profitable Food Business Today
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-white/90">
              Join the Amisamishka family and turn your entrepreneurial dreams into reality with our proven franchise models.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#models">
                  View Franchise Models
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#download">Download Brochure</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
