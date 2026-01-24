 
import type { ColumnDef } from "@tanstack/react-table";
import { Ban } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  joiningDate: string;
  totalSpent: string;
  collectionValue: string;
};

export const usersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-border">
            <AvatarImage src={row.original.avatar} alt={row.original.name} />
            <AvatarFallback>
              {row.original.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground leading-none">
              {row.original.name}
            </span>
            <span className="text-[10px] text-muted-foreground mt-1">
              Verified Collector
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.email}
      </span>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <span className="text-sm text-foreground">
        {row.original.phone}
      </span>
    ),
  },
  {
    accessorKey: "collectionValue",
    header: "Collection Value",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.collectionValue}
      </span>
    ),
  },
  {
    accessorKey: "joiningDate",
    header: "Joining Date",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.joiningDate}
      </span>
    ),
  },
  {
    accessorKey: "totalSpent",
    header: "Total Spent",
    cell: ({ row }) => (
      <span className="text-sm font-semibold text-primary">
        {row.original.totalSpent}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right mr-7">Actions</div>,
    cell: () => {
      return (
        <div className="flex items-center justify-end gap-2 px-2">
          <Button
            variant="outline"
            size="sm"
            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-red-900/30 dark:hover:bg-red-950 flex items-center gap-2"
          >
            <Ban />
            <span>Block</span>
          </Button>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
