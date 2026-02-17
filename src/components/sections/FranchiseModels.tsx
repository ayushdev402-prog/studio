import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BarChart, Blend, Gem, MapPin, Megaphone, ShieldCheck, Store, TrendingUp, Wallet, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const franchiseModels = [
    {
        name: "51 Franchise Model",
        tagline: "Start Small. Earn Smart.",
        description: "Low investment food business model designed for fast setup and quick returns.",
        hindiLine: "Apna khud ka business shuru karein kam investment ke saath.",
        investment: "Low Budget Category",
        bestFor: "Students | Small investors | Tier 2 & 3 cities",
        highlights: [
            { icon: Wallet, text: "Low Investment" },
            { icon: Store, text: "Small Space Required" },
            { icon: Zap, text: "Quick Setup" },
            { icon: Blend, text: "Easy Operations" },
        ],
        cta: "Start Your Journey",
        ctaHref: "#contact",
        accentColor: "text-green-500",
        shadowColor: "hover:shadow-green-500/20",
    },
    {
        name: "151 Franchise Model",
        tagline: "Smart Investment. Bigger Growth.",
        description: "Balanced franchise model with strong earning potential and brand support.",
        hindiLine: "Thoda zyada invest karein, zyada kamaayein.",
        investment: "Medium Budget",
        bestFor: "Business-minded individuals | Expanding entrepreneurs",
        highlights: [
            { icon: TrendingUp, text: "Higher Revenue Potential" },
            { icon: Award, text: "Strong Brand Presence" },
            { icon: Megaphone, text: "Marketing Support" },
            { icon: MapPin, text: "Better Location Options" },
        ],
        cta: "Grow With Us",
        ctaHref: "#contact",
        isPopular: true,
        accentColor: "text-amber-500",
        shadowColor: "hover:shadow-amber-500/20",
    },
    {
        name: "281 Franchise Model",
        tagline: "Scale Big. Earn Bigger.",
        description: "Premium large-scale franchise model with maximum earning potential.",
        hindiLine: "High investment, high profit opportunity.",
        investment: "High Budget",
        bestFor: "Metro cities | Investors | Large commercial spaces",
        highlights: [
            { icon: BarChart, text: "Maximum Revenue Potential" },
            { icon: Gem, text: "Premium Setup" },
            { icon: ShieldCheck, text: "Full Branding Support" },
            { icon: TrendingUp, text: "Long-term Scalability" },
        ],
        cta: "Scale Your Success",
        ctaHref: "#contact",
        accentColor: "text-red-500",
        shadowColor: "hover:shadow-red-500/20",
    }
];

const modelSelector = [
  { title: "Low Budget?", model: "51 Model", description: "Best for starting your first venture." },
  { title: "Mid-Range Budget?", model: "151 Model", description: "Balanced growth and returns." },
  { title: "High Investment?", model: "281 Model", description: "For maximum profit and scale." },
];

export default function FranchiseModels() {
  return (
    <section id="models" className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center justify-center">
            {franchiseModels.map((model, index) => (
                <Card key={model.name} className={cn(
                    "w-full max-w-sm mx-auto flex flex-col transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl",
                    model.isPopular && "lg:scale-110 lg:z-10 bg-secondary",
                    model.shadowColor
                )}>
                    {model.isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full px-4 py-1">
                                Most Popular
                            </div>
                        </div>
                    )}
                    <CardHeader className="text-center pt-10">
                        <CardTitle className="font-headline text-3xl">{model.name}</CardTitle>
                        <p className={cn("font-semibold", model.accentColor)}>{model.tagline}</p>
                        <CardDescription className="pt-2 text-base !mt-2">
                          {model.description}<br/>
                          <span className="italic">"{model.hindiLine}"</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <h4 className="font-bold text-center mb-4">Key Highlights</h4>
                        <ul className="space-y-3">
                            {model.highlights.map(highlight => (
                                <li key={highlight.text} className="flex items-center gap-3">
                                    <highlight.icon className={cn("h-5 w-5", model.accentColor)} />
                                    <span>{highlight.text}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                         <div className="text-center w-full">
                            <p className="font-bold text-sm text-muted-foreground">BEST FOR</p>
                            <p className="font-semibold">{model.bestFor}</p>
                        </div>
                        <Button className="w-full" size="lg" asChild>
                            <a href={model.ctaHref}>{model.cta}</a>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

        <div className="mt-24 lg:mt-32 text-center">
          <h3 className="font-headline text-3xl font-bold">Kaunsa Model Aapke Liye Sahi Hai?</h3>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Find the perfect fit for your investment and goals.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {modelSelector.map(item => (
              <div key={item.title} className="p-6 rounded-lg border bg-card text-card-foreground">
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-sm text-primary font-bold mt-1">{item.model}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </div>
            ))}
          </div>
           <div className="mt-8">
            <Button size="lg" asChild>
              <a href="#contact">Get Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
