import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CtaDownload() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'cta-background');

  return (
    <section id="download" className="relative py-20 lg:py-32">
       {ctaImage && (
        <Image
          src={ctaImage.imageUrl}
          alt={ctaImage.description}
          fill
          className="object-cover"
          data-ai-hint={ctaImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Ready to Dive Deeper?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/90">
          Get all the details about our franchise models, investment breakdown, and support systems in our comprehensive business plan.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-card text-card-foreground hover:bg-card/90" asChild>
            <a href="/brochure.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Franchise Brochure (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
