import { Card, CardContent } from "@/components/ui/card";

type Stat = {
  label: string;
  value: string;
  icon: string;
};

const items: Stat[] = [
  { label: "Income", value: "$8,250", icon: "/images/profits.svg" },
  { label: "Total Users", value: "852,650", icon: "/images/profile.svg" },
  { label: "Total Auctions", value: "52,650", icon: "/images/auction.svg" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((stat) => (
        <Card 
          key={stat.label} 
        >
          <CardContent className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 flex items-center justify-center shrink-0 p-3">
              <img
                src={stat.icon}
                alt={stat.label}
                className="h-14 w-14 object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider truncate">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-foreground">
                {stat.value}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;