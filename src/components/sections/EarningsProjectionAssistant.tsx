"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  personalizedEarningProjection,
  type PersonalizedEarningProjectionOutput,
} from "@/ai/flows/personalized-earning-projection-flow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  location: z.string().min(3, { message: "Please enter a specific location (e.g., Downtown San Francisco)." }),
  marketConditions: z
    .string()
    .min(10, { message: "Describe market conditions (e.g., high foot traffic, nearby offices)." }),
});

export default function EarningsProjectionAssistant() {
  const [projection, setProjection] = useState<PersonalizedEarningProjectionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      marketConditions: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setProjection(null);

    try {
      const result = await personalizedEarningProjection(values);
      setProjection(result);
    } catch (e) {
      setError("An error occurred while generating the projection. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="ai-tool" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Personalized Earnings Projection</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            Use our AI-powered tool to get a custom earning projection based on your target location and local market conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-background/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Wand2 className="text-primary" />
                Your Projection Details
              </CardTitle>
              <CardDescription>Fill in the details below to generate your personalized report.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 'Suburban Atlanta'" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="marketConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Market Conditions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'High foot traffic near offices, strong demand for healthy fast food...'"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Generate Projection"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                 <Loader2 className="h-12 w-12 animate-spin text-primary" />
                 <p className="text-muted-foreground">Our AI is crunching the numbers...</p>
              </div>
            )}
            {error && (
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            {projection && (
              <div className="space-y-6 animate-in fade-in-50 duration-500">
                {projection.projections.map((model) => (
                   <Card key={model.modelName}>
                     <CardHeader>
                       <CardTitle>{model.modelName}</CardTitle>
                       <CardDescription>{model.notes}</CardDescription>
                     </CardHeader>
                     <CardContent className="grid grid-cols-3 gap-4 text-center">
                       <div>
                         <p className="font-bold text-xl text-green-600">${model.estimatedMonthlyRevenue.toLocaleString()}</p>
                         <p className="text-sm text-muted-foreground">Est. Revenue</p>
                       </div>
                       <div>
                         <p className="font-bold text-xl text-destructive">${model.estimatedMonthlyExpenses.toLocaleString()}</p>
                         <p className="text-sm text-muted-foreground">Est. Expenses</p>
                       </div>
                       <div>
                         <p className="font-bold text-xl text-primary">${model.estimatedMonthlyProfit.toLocaleString()}</p>
                         <p className="text-sm text-muted-foreground">Est. Profit</p>
                       </div>
                     </CardContent>
                   </Card>
                ))}
                 <p className="text-xs text-muted-foreground italic text-center">{projection.disclaimer}</p>
              </div>
            )}
            {!projection && !isLoading && !error && (
                <div className="flex items-center justify-center h-full rounded-lg border-2 border-dashed bg-secondary p-8">
                    <p className="text-center text-muted-foreground">Your personalized projection will appear here.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
