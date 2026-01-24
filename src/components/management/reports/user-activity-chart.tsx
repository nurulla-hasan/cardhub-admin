"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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
  { day: "Mon", active: 400, new: 240 },
  { day: "Tue", active: 300, new: 139 },
  { day: "Wed", active: 200, new: 980 },
  { day: "Thu", active: 278, new: 390 },
  { day: "Fri", active: 189, new: 480 },
  { day: "Sat", active: 239, new: 380 },
  { day: "Sun", active: 349, new: 430 },
];

const chartConfig = {
  active: {
    label: "Active Users",
    color: "#a855f7",
  },
  new: {
    label: "New Registrations",
    color: "#71717a",
  },
} satisfies ChartConfig;

export function UserActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">User Activity (Weekly)</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-75 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="activeBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity={1} />
                <stop offset="100%" stopColor="#a855f7" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
             <YAxis
              tickLine={false}
              axisLine={false}
              width={30}
              tickMargin={4}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="active" fill="url(#activeBarGradient)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="new" fill="#71717a" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
