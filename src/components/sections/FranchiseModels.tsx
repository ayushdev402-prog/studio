import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { KioskIcon, CafeIcon, RestaurantIcon } from "@/components/FoodIcons";

const franchiseModels = [
  {
    name: "QuickServe Kiosk",
    icon: KioskIcon,
    investment: "$15k - $25k",
    roi: "18-24 Months",
    space: "100-200 sq.ft.",
    audience: "Busy commuters, students",
    description: "A compact, high-efficiency model perfect for high foot-traffic areas like malls, airports, and business parks.",
    benefits: ["Low Initial Investment", "Minimal Staff Required", "High-Volume Sales", "Grab-and-Go Menu"],
  },
  {
    name: "Cafe Express",
    icon: CafeIcon,
    investment: "$50k - $80k",
    roi: "24-36 Months",
    space: "500-1000 sq.ft.",
    audience: "Families, remote workers",
    description: "A cozy cafe setup offering a wider menu, comfortable seating, and a welcoming atmosphere for dine-in and takeout.",
    benefits: ["Multiple Revenue Streams", "Community Hub Potential", "Expanded Menu Options", "Brand Loyalty"],
  },
  {
    name: "Full-Service Restaurant",
    icon: RestaurantIcon,
    investment: "$120k - $200k",
    roi: "36-48 Months",
    space: "1500-3000 sq.ft.",
    audience: "Diners, event organizers",
    description: "The complete Amisamishka dining experience. A full-scale restaurant with a comprehensive menu, bar, and event space.",
    benefits: ["Highest Profit Potential", "Premium Brand Experience", "Catering & Event Opportunities", "Full Bar & Alcohol Sales"],
  },
];

export default function FranchiseModels() {
  return (
    <section id="models" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Find Your Perfect Fit</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We offer three distinct franchise models designed for different investment levels and business goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {franchiseModels.map((model) => (
            <Card key={model.name} className="flex flex-col transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <model.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{model.name}</CardTitle>
                <CardDescription className="px-6">{model.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                    <div className="text-center"><p className="font-bold text-lg text-primary">{model.investment}</p><p className="text-muted-foreground">Investment</p></div>
                    <div className="text-center"><p className="font-bold text-lg text-primary">{model.roi}</p><p className="text-muted-foreground">Expected ROI</p></div>
                    <div className="text-center"><p className="font-bold text-lg text-primary">{model.space}</p><p className="text-muted-foreground">Space</p></div>
                    <div className="text-center"><p className="font-bold text-lg text-primary">{model.audience}</p><p className="text-muted-foreground">Target Audience</p></div>
                </div>
                <ul className="space-y-3">
                  {model.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg" asChild>
                    <a href="#contact">Apply Now</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
