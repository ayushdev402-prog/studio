import { TrendingUp, CircleDollarSign, Award, Megaphone, ShieldCheck, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Profit Margins",
    description: "Our efficient business models are designed for profitability and quick returns."
  },
  {
    icon: CircleDollarSign,
    title: "Low Investment",
    description: "Start your business with a manageable initial investment and clear financial planning."
  },
  {
    icon: Award,
    title: "Complete Training Support",
    description: "From day one, you'll receive comprehensive training on operations, marketing, and more."
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description: "Leverage our national marketing campaigns and local marketing toolkits."
  },
  {
    icon: ShieldCheck,
    title: "Brand Recognition",
    description: "Benefit from a growing brand name that customers know and trust."
  },
  {
    icon: Rocket,
    title: "Growing Food Industry",
    description: "Tap into a resilient and ever-growing market with our innovative food concepts."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The Amisamishka Advantage</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            We're more than just a franchise; we're your partners in success. We provide the tools, support, and brand power you need to thrive.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
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
