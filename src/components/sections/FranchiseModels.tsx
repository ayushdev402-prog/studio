import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, UtensilsCrossed } from "lucide-react";

const franchisePackage = {
    name: "AFS Franchise Setup Package",
    price: "₹51,000",
    features: [
        "Tea Material Included",
        "Entire Support Provided",
        "100% Your Ownership",
        "100% Your Profit",
        "5 Days Complete Training",
        "Monthly Growth Support",
        "24x7 Always Available Support",
    ],
    menu: [
        "Chai (Gud, Regular, Lemon, Green, Coffee)",
        "8 Varieties of Pizza",
        "8 Varieties of Maggi",
        "8 Varieties of Sandwiches",
        "8 Varieties of Patties",
    ]
};

export default function FranchiseModels() {
  return (
    <section id="models" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Franchise Package</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            One simple package to start your dream cafe business. We provide everything you need.
          </p>
        </div>
        <div className="flex justify-center">
            <Card className="max-w-4xl w-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <div>
                            <CardTitle className="font-headline text-3xl">{franchisePackage.name}</CardTitle>
                            <CardDescription>All-inclusive package to kickstart your business.</CardDescription>
                        </div>
                        <div className="bg-primary text-primary-foreground rounded-lg px-6 py-3 text-center shrink-0">
                            <p className="text-sm font-semibold">One-Time Investment</p>
                            <p className="text-3xl font-bold">{franchisePackage.price}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-10 pt-6">
                    <div>
                        <h3 className="font-headline text-xl font-bold mb-4">What You Get</h3>
                        <ul className="space-y-3">
                            {franchisePackage.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-bold mb-4">What You'll Serve</h3>
                         <ul className="space-y-3">
                            {franchisePackage.menu.map(item => (
                                <li key={item} className="flex items-center gap-3">
                                    <UtensilsCrossed className="h-5 w-5 text-primary" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" size="lg" asChild>
                        <a href="#contact">Get Started Now for only {franchisePackage.price}</a>
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
