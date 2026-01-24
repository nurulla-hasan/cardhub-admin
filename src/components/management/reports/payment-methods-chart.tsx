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
  { name: "Credit Card", value: 45, color: "#8b5cf6" },
  { name: "PayPal", value: 30, color: "#ec4899" },
  { name: "Crypto", value: 15, color: "#06b6d4" },
  { name: "Bank Transfer", value: 10, color: "#f59e0b" },
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
          className="mx-auto aspect-square max-h-62"
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
