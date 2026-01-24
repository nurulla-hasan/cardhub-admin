"use client";

import { Cell, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { name: "Credit Card", value: 45, color: "hsl(var(--chart-1))" },
  { name: "PayPal", value: 30, color: "hsl(var(--chart-2))" },
  { name: "Crypto", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Bank Transfer", value: 10, color: "hsl(var(--chart-4))" },
];

const chartConfig = {
  payment: {
    label: "Payment Methods",
  },
} satisfies ChartConfig;

export function PaymentMethodsChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-base font-medium">Payment Methods</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-75"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
               {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Pie>
             <ChartTooltip
              content={<ChartTooltipContent nameKey="name" hideLabel />}
            />
          </PieChart>
        </ChartContainer>
        <div className="flex justify-center gap-4 p-4">
            {chartData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
