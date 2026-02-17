"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "Jan", revenue: 5200, expenses: 3100 },
  { month: "Feb", revenue: 5500, expenses: 3200 },
  { month: "Mar", revenue: 6000, expenses: 3400 },
  { month: "Apr", revenue: 6800, expenses: 3600 },
  { month: "May", revenue: 7200, expenses: 3700 },
  { month: "Jun", revenue: 8000, expenses: 3900 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function EarningsPotential() {
  return (
    <section id="earnings" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Visualize Your Success</h2>
            <p className="mt-6 text-lg text-foreground/80">
              Our franchise model is built for profitability. See a conservative projection of your potential monthly earnings. Your drive and our support can make these numbers a reality.
            </p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              * The figures presented are estimates for our franchise model and are not a guarantee of performance. Actual results may vary based on location, management, and market conditions.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Amishka Franchise: Monthly Earning Example</CardTitle>
              <CardDescription>First 6 months projection</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer>
                  <BarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <YAxis
                      tickFormatter={(value) => `$${Number(value) / 1000}k`}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(var(--muted))" }}
                      content={<ChartTooltipContent />}
                    />
                    <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
