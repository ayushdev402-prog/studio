import { CircleDollarSign, Award, ShieldCheck, UserCheck, LifeBuoy, Leaf } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const benefits = [
  {
    icon: CircleDollarSign,
    title: "Affordable Investment",
    description: "Start your business with a setup package of just ₹51,000."
  },
  {
    icon: Award,
    title: "100% Ownership & Profit",
    description: "You are the sole owner of your business and you keep all the profits."
  },
  {
    icon: UserCheck,
    title: "Complete Training",
    description: "We provide 5 days of comprehensive training to get you and your staff started."
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description: "Benefit from 24x7 and monthly support for sales, menu updates, and operations."
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description: "We provide all the necessary high-quality tea materials and ingredients for your cafe."
  },
  {
    icon: ShieldCheck,
    title: "Brand Recognition",
    description: "Leverage the growing brand name and recognition of Amishka Food Service."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The Amishka Advantage</h2>
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
