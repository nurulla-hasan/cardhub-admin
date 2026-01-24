"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
  { month: "Jan", trades: 85 },
  { month: "Feb", trades: 110 },
  { month: "Mar", trades: 145 },
  { month: "Apr", trades: 130 },
  { month: "May", trades: 190 },
  { month: "Jun", trades: 220 },
  { month: "Jul", trades: 280 },
  { month: "Aug", trades: 260 },
  { month: "Sep", trades: 310 },
  { month: "Oct", trades: 295 },
];

const chartConfig = {
  trades: {
    label: "Completed Trades",
    color: "#a855f7",
  },
} satisfies ChartConfig;

export function TradesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">
          Completed Trades Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-75 w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="tradesFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={30}
              tickMargin={4}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="trades"
              type="natural"
              fill="url(#tradesFill)"
              stroke="var(--color-trades)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
