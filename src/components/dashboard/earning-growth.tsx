
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
  { month: "Jan", transactions: 120 },
  { month: "Feb", transactions: 150 },
  { month: "Mar", transactions: 180 },
  { month: "Apr", transactions: 140 },
  { month: "May", transactions: 200 },
  { month: "Jun", transactions: 250 },
  { month: "Jul", transactions: 300 },
  { month: "Aug", transactions: 280 },
];

const chartConfig = {
  transactions: {
    label: "Transactions",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

const EarningGrowthChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">
          Transaction Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-66 w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="transactionFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.6} />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
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
              type="natural"
              dataKey="transactions"
              stroke="var(--primary)"
              fill="url(#transactionFill)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default EarningGrowthChart;
