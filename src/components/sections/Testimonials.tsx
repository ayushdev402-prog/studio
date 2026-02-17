import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Sharma",
    location: "Jabalpur",
    quote: "Joining AFS was the best decision of my life. The support is incredible, and my business is thriving. I was able to create jobs for 3 people in my local area!",
    avatarId: "testimonial-avatar-1",
  },
  {
    name: "Priya Singh",
    location: "Indore",
    quote: "I was just a student with a dream. The 51 Model was perfect for me. Low investment, easy to manage, and I'm already seeing great profits. Thank you, AFS!",
    avatarId: "testimonial-avatar-2",
  },
  {
    name: "Amit Patel",
    location: "Bhopal",
    quote: "As an experienced entrepreneur, I was looking for a scalable model. The 151 Model from AFS provided the perfect balance of investment and high-growth potential. Highly recommended.",
    avatarId: "testimonial-avatar-3",
  },
   {
    name: "Sunita Verma",
    location: "Raipur",
    quote: "The training and support from the AFS team are top-notch. They guide you at every step. It feels like being part of a big family that wants you to succeed.",
    avatarId: "testimonial-avatar-4",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Success Stories from Our Partners
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            See how AFS is helping entrepreneurs like you achieve financial independence.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
               const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
               return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col items-center text-center p-6 gap-6 justify-between">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                           {avatarImage && (
                             <Avatar>
                               <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                               <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                           )}
                           <div>
                              <p className="font-bold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
