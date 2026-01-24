"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Order = {
  id: string;
  orderId: string;
  winner: {
    name: string;
    avatar: string;
  };
  product: {
    name: string;
    image: string;
  };
  winningPrice: number;
  expectedDelivery: string;
  status: "Payment Success" | "Pending" | "Shipped" | "Delivered";
};

export const orderColumns: ColumnDef<Order>[] = [
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
    accessorKey: "winner",
    header: "Winner",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={row.original.winner.avatar}
            alt={row.original.winner.name}
          />
          <AvatarFallback>
            {row.original.winner.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-foreground">
          {row.original.winner.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "product",
    header: "Winning Product",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.product.image}
          alt={row.original.product.name}
          className="h-10 w-10 rounded-md object-cover"
        />
        <span className="text-sm font-medium text-foreground">
          {row.original.product.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "winningPrice",
    header: "Winning Price",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        ${row.original.winningPrice.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "expectedDelivery",
    header: "Expected Delivery Time",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          {row.original.expectedDelivery}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Select defaultValue={row.original.status}>
        <SelectTrigger className="w-fit bg-background shadow-none border-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Payment Success">Payment Success</SelectItem>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Shipped">Shipped</SelectItem>
          <SelectItem value="Delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: () => (
      <div className="text-right">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-amber-500 border-amber-500 hover:bg-amber-50 hover:text-amber-600"
        >
          <Eye />
        </Button>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
