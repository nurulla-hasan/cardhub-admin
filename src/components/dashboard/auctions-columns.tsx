import type { ColumnDef } from "@tanstack/react-table";
import { Link2 } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export type Auction = {
  serial: string;
  item: {
    name: string;
    image: string;
  };
  startTime: string;
  highestBidder: {
    name: string;
    avatar: string;
  };
  highestBid: string;
  totalBids: number;
  link: string;
};

export const auctionColumns: ColumnDef<Auction>[] = [
  {
    accessorKey: "serial",
    header: "SL no.",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">{row.original.serial}</span>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "item",
    header: "Auction Item",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.item.image}
          alt={row.original.item.name}
          className="h-10 w-10 rounded-md object-cover"
        />
        <span className="text-sm font-medium text-foreground">
          {row.original.item.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "startTime",
    header: "Starting Time",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.original.startTime}</span>
    ),
  },
  {
    accessorKey: "highestBidder",
    header: "Highest Bidder",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={row.original.highestBidder.avatar} alt={row.original.highestBidder.name} />
          <AvatarFallback>{row.original.highestBidder.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-foreground">
          {row.original.highestBidder.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "highestBid",
    header: "Highest Bid",
    cell: ({ row }) => (
      <span className="text-sm font-semibold text-foreground">{row.original.highestBid}</span>
    ),
  },
  {
    accessorKey: "totalBids",
    header: "Total Bids",
    cell: ({ row }) => (
      <span className="text-sm text-foreground">{row.original.totalBids}</span>
    ),
  },
  {
    id: "link",
    header: () => <div className="text-right">Auction Link</div>,
    cell: ({ row }) => (
      <div className="text-right">
        <Button
          size="icon"
          className="bg-amber-400 hover:bg-amber-500 text-white"
          asChild
        >
          <a href={row.original.link} target="_blank" rel="noreferrer">
            <Link2 className="h-4 w-4" />
          </a>
        </Button>
      </div>
    ),
  },
];
