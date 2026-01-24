import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activeUsers = [
  { id: 1, name: "Kathryn Murphy", activity: "Purchased Item", time: "2 min ago", avatar: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=50&h=50&fit=crop" },
  { id: 2, name: "Devon Lane", activity: "Placed a Bid", time: "15 min ago", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop" },
  { id: 3, name: "Hari Danang", activity: "Updated Profile", time: "1 hr ago", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop" },
  { id: 4, name: "Jane Cooper", activity: "Requested Release", time: "2 hrs ago", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" },
  { id: 5, name: "Robert Fox", activity: "New Registration", time: "3 hrs ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" },
];

const TopBidder = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Recent User Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.activity}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{user.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopBidder;
