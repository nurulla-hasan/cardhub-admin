/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AuctionEditModal } from "./auction-edit-modal";
import { DeleteConfirmModal } from "@/components/ui/custom/delete-confirm";

export type Auction = {
  id: string;
  serial: string;
  item: {
    name: string;
    image: string;
  };
  category: string;
  reserveBid: number;
  incrementValue: string;
  financing: "Available" | "Not available";
  startingDateTime: string;
  status: "Active" | "Upcoming" | "Completed";
};

export const auctionColumns: ColumnDef<Auction>[] = [
  {
    accessorKey: "serial",
    header: "SL no.",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.id}
      </span>
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
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.category}
      </span>
    ),
  },
  {
    accessorKey: "reserveBid",
    header: "Reserve Bid",
    cell: ({ row }) => (
      <span className="text-sm text-foreground">{row.original.reserveBid}</span>
    ),
  },
  {
    accessorKey: "incrementValue",
    header: "Increment Value",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.incrementValue}
      </span>
    ),
  },
  {
    accessorKey: "financing",
    header: "Financing",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.financing}
      </span>
    ),
  },
  {
    accessorKey: "startingDateTime",
    header: "Starting Date & Time",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.startingDateTime}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      let variant: any = "outline";

      if (status === "Active") {
        variant = "info";
      } else if (status === "Upcoming") {
        variant = "warning";
      } else if (status === "Completed") {
        variant = "success";
      }

      return (
        <Badge
          variant={variant}
          className="rounded-full px-3 py-1 text-xs font-normal"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right mr-3">Actions</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-end gap-1">
        <AuctionEditModal auction={row.original} />

        <DeleteConfirmModal
          onDelete={() => console.log("Delete auction:", row.original.id)}
          trigger={
            <Button
              variant="outline"
              size="icon-sm"
              className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          }
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
