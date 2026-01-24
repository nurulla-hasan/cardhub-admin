"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Transaction = {
  id: string;
  slNo: string;
  date: string;
  user: {
    name: string;
    avatar: string;
  };
  item: string;
  paymentStatus: string;
  paidAmount: number;
  paymentType: "Full Payment" | "Installment";
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "SL no.",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.id}
      </span>
    ),
    enableSorting: false,
  },

  {
    accessorKey: "user",
    header: "User's Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={row.original.user.avatar}
            alt={row.original.user.name}
          />
          <AvatarFallback>
            {row.original.user.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-foreground">
          {row.original.user.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.original.date}</span>
    ),
  },
  {
    accessorKey: "item",
    header: "Item",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.item}
      </span>
    ),
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }) => (
      <span className="text-sm text-foreground">
        {row.original.paymentStatus}
      </span>
    ),
  },
  {
    accessorKey: "paidAmount",
    header: "Paid Ammount",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        ${row.original.paidAmount.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "paymentType",
    header: "Payment Type",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.paymentType}
      </span>
    ),
  },
];
