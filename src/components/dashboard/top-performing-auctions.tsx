import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const items = [
  { 
    id: 1, 
    title: "iPhone 13 Pro", 
    bid: "$1248", 
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=50&h=50&fit=crop" 
  },
  { 
    id: 2, 
    title: "Rolex M2 Watch", 
    bid: "$1058", 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=50&h=50&fit=crop" 
  },
];

const TopPerformingAuctions = () => {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top-Performing Auctions</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Table Header */}
        <div className="grid grid-cols-12 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 px-2">
          <div className="col-span-2">SL no.</div>
          <div className="col-span-7">Auction Item</div>
          <div className="col-span-3 text-right">Winning Bid</div>
        </div>

        {/* List Items */}
        <div className="space-y-4">
          {items.map((it, idx) => (
            <div 
              key={it.id} 
              className="grid grid-cols-12 items-center rounded-lg transition-colors"
            >
              {/* SL Number */}
              <div className="col-span-2 text-sm font-medium text-muted-foreground">
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Item Info with Avatar */}
              <div className="col-span-7 flex items-center gap-3">
                <Avatar className="h-10 w-10 rounded-full border border-border">
                  <AvatarImage src={it.image} alt={it.title} className="object-cover" />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {it.title.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-foreground truncate">
                  {it.title}
                </span>
              </div>

              {/* Winning Bid */}
              <div className="col-span-3 text-right text-sm font-bold text-primary">
                {it.bid}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPerformingAuctions;