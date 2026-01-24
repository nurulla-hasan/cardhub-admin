"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ListingViewModal } from "./listing-view-modal";

export type Listing = {
  id: string;
  listingId: string;
  seller: {
    name: string;
    avatar: string;
    email: string;
  };
  card: {
    name: string;
    image: string;
    set: string;
    condition: string;
  };
  price: number;
  date: string;
  status: "Active" | "Pending" | "Sold" | "Rejected";
};

export const listingColumns: ColumnDef<Listing>[] = [
  {
    accessorKey: "listingId",
    header: "Listing ID",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.listingId}
      </span>
    ),
  },
  {
    accessorKey: "seller",
    header: "Seller",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={row.original.seller.avatar}
            alt={row.original.seller.name}
          />
          <AvatarFallback>
            {row.original.seller.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            {row.original.seller.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {row.original.seller.email}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "card",
    header: "Card Details",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.card.image}
          alt={row.original.card.name}
          className="h-12 w-8 rounded-sm object-cover border border-border"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            {row.original.card.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {row.original.card.set} • {row.original.card.condition}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <span className="text-sm font-bold text-foreground">
        ${row.original.price.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          variant={
            status === "Active"
              ? "success"
              : status === "Pending"
              ? "warning"
              : status === "Sold"
              ? "info"
              : "destructive"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Submitted Date",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.date}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-end">Actions</div>,
    cell: ({ row }) => {
      const listing = row.original;
      return (
        <div className="flex items-center justify-end gap-2">
          <ListingViewModal listing={listing} />
        </div>
      );
    },
  },
];
