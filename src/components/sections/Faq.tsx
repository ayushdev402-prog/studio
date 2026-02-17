import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is the initial investment?",
    answer: "The initial investment varies depending on the franchise model you choose, ranging from $15,000 for a QuickServe Kiosk to $200,000 for a Full-Service Restaurant. This includes the franchise fee, equipment, and initial inventory."
  },
  {
    question: "What kind of training will I receive?",
    answer: "We provide comprehensive training covering all aspects of the business, including food preparation, customer service, marketing, and financial management. You'll get both classroom and hands-on training at one of our corporate locations."
  },
  {
    question: "Can I own multiple franchise locations?",
    answer: "Yes, we encourage successful franchisees to expand their business by opening multiple locations. We offer a discounted franchise fee for subsequent units."
  },
  {
    question: "How much can I make?",
    answer: "Profitability depends on various factors like location, management, and market conditions. Our franchise disclosure document (FDD) provides detailed financial performance representations. You can also use our AI-powered earnings projection tool for a personalized estimate."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Have questions? We have answers. Here are some of the most common inquiries we receive.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
