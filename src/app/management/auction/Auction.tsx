import PageLayout from "@/components/common/page-layout";
import { auctionColumns, type Auction } from "@/components/management/auction/auction-columns";
import { AuctionFilter } from "@/components/management/auction/auction-filter";
import { DataTable } from "@/components/ui/custom/data-table";
import PageHeader from "@/components/ui/custom/page-header";

const auctions: Auction[] = [
  {
    id: "1",
    serial: "#1233",
    item: {
      name: "iPhone 13 Pro Max",
      image: "https://images.unsplash.com/photo-1546053185-2479b0986426?auto=format&fit=crop&w=200&q=60",
    },
    category: "Electronics",
    reserveBid: 2,
    incrementValue: "1 cent",
    financing: "Not available",
    startingDateTime: "10/06/24 at 4:45 PM",
    status: "Active",
  },
  {
    id: "2",
    serial: "#1233",
    item: {
      name: "Samsung L2 Smart TV",
      image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=200&q=60",
    },
    category: "Electronics",
    reserveBid: 2,
    incrementValue: "1 cent",
    financing: "Available",
    startingDateTime: "10/06/24 at 4:45 PM",
    status: "Upcoming",
  },
  {
    id: "3",
    serial: "#1233",
    item: {
      name: "Men's T-shirt",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=60",
    },
    category: "Fashion",
    reserveBid: 1,
    incrementValue: "1 cent",
    financing: "Available",
    startingDateTime: "10/06/24 at 4:45 PM",
    status: "Active",
  },
  {
    id: "4",
    serial: "#1233",
    item: {
      name: "Prestige Oven",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=200&q=60",
    },
    category: "Electronics",
    reserveBid: 2,
    incrementValue: "1 cent",
    financing: "Not available",
    startingDateTime: "10/06/24 at 4:45 PM",
    status: "Completed",
  },
  {
    id: "5",
    serial: "#1233",
    item: {
      name: "Rolex M2 Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=60",
    },
    category: "Fashion",
    reserveBid: 2,
    incrementValue: "1 cent",
    financing: "Available",
    startingDateTime: "10/06/24 at 4:45 PM",
    status: "Upcoming",
  },
  {
    id: "6",
    serial: "#1233",
    item: {
      name: "Leather Money Bag",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=200&q=60",
    },
    category: "Fashion",
    reserveBid: 1,
    incrementValue: "1 cent",
    financing: "Available",
    startingDateTime: "10/06/24 at 4:45 PM",
    status: "Completed",
  },
];

const AuctionManagement = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <PageHeader 
            title="Auction Management" 
            description="Manage all your active and scheduled auctions from here." 
            length={auctions.length}
            showBack={true}
          />
          <AuctionFilter />
        </div>
        
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <DataTable columns={auctionColumns} data={auctions} />
        </div>
      </div>
    </PageLayout>
  );
};

export default AuctionManagement;
