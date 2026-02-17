import { CircleDollarSign, Award, ShieldCheck, UserCheck, LifeBuoy, Leaf } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const benefits = [
  {
    icon: CircleDollarSign,
    title: "Low Risk, High Reward",
    description: "Start your entrepreneurial journey with an affordable setup package from just ₹51,000."
  },
  {
    icon: Award,
    title: "Be Your Own Boss",
    description: "You are the sole owner of your business and you keep 100% of the profits. We take no commission."
  },
  {
    icon: UserCheck,
    title: "Expert Training & Skills",
    description: "We provide 5 days of comprehensive training for you and your staff, covering all business operations."
  },
  {
    icon: LifeBuoy,
    title: "Partners in Your Growth",
    description: "Benefit from our continuous support for sales, menu innovation, and operational excellence."
  },
  {
    icon: Leaf,
    title: "Premium Quality Products",
    description: "We provide all the necessary high-quality raw materials and secret spices for our signature chai."
  },
  {
    icon: ShieldCheck,
    title: "Leverage a Trusted Brand",
    description: "Gain immediate customer trust by leveraging the growing brand recognition of AFS."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The AFS Advantage</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            We're not just a franchise; we're your dedicated partner in success. We provide the tools, support, and brand power you need to build a thriving business and create employment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="text-center border-0 shadow-none bg-transparent animate-in fade-in zoom-in-95"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
                <CardDescription className="mt-2 text-base">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
