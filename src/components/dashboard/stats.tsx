import { Card, CardContent } from "@/components/ui/card";
import { Users, ShieldCheck, Activity } from "lucide-react";

type Stat = {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
};

const items: Stat[] = [
  { 
    label: "Total Collectors", 
    value: "852,650", 
    icon: <Users className="h-6 w-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  { 
    label: "Active Traders", 
    value: "450,200", 
    icon: <Activity className="h-6 w-6" />,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  { 
    label: "Verified Sellers", 
    value: "12,450", 
    icon: <ShieldCheck className="h-6 w-6" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="flex items-center gap-4 p-6">
            <div className={`rounded-full ${stat.bgColor} ${stat.color} flex items-center justify-center shrink-0 p-4`}>
              {stat.icon}
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider truncate">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-foreground mt-1">
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
