import PageLayout from "@/components/common/page-layout";
import Stats from "@/components/dashboard/stats";
import EarningGrowthChart from "@/components/dashboard/earning-growth";
import TopBidder from "@/components/dashboard/top-bidder";
import TopPerformingAuctions from "@/components/dashboard/top-performing-auctions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  auctionColumns,
  type Auction,
} from "@/components/dashboard/auctions-columns";
import { DataTable } from "@/components/ui/custom/data-table";

const Dashboard = () => {

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Stats />
            <EarningGrowthChart />
          </div>
          <div className="space-y-6">
            <TopBidder />
            <TopPerformingAuctions />
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">
                Active Auctions
              </CardTitle>
              <span className="text-xs text-primary cursor-pointer">View all</span>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable columns={auctionColumns} data={auctions} />
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Dashboard;



const auctions: Auction[] = [
  {
    serial: "#1233",
    item: {
      name: "iPhone 13 Pro Max",
      image:
        "https://images.unsplash.com/photo-1546053185-2479b0986426?auto=format&fit=crop&w=200&q=60",
    },
    startTime: "4:45 PM",
    highestBidder: {
      name: "Kathryn Murp",
      avatar:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=96&q=60",
    },
    highestBid: "$248",
    totalBids: 348,
    link: "https://example.com/auctions/iphone-pro",
  },
  {
    serial: "#1233",
    item: {
      name: "Leather Money Bag",
      image:
        "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=200&q=60",
    },
    startTime: "3:25 PM",
    highestBidder: {
      name: "Devon Lane",
      avatar:
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=96&q=60",
    },
    highestBid: "$145",
    totalBids: 567,
    link: "https://example.com/auctions/leather-bag",
  },
  {
    serial: "#1233",
    item: {
      name: "Prestige Oven",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=200&q=60",
    },
    startTime: "3:12 PM",
    highestBidder: {
      name: "Foysal Rahman",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&q=60",
    },
    highestBid: "$593",
    totalBids: 435,
    link: "https://example.com/auctions/prestige-oven",
  },
];
