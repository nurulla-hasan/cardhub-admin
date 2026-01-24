/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnDef } from "@tanstack/react-table";
import { Ban } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type User = {
  id: number;
  name: string;
  email: string;
  role: "Trainer" | "Individual";
  status: "Approved" | "Decline";
};

export const usersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
          {row.original.name.charAt(0)}
        </div>
        <span className="text-sm font-medium text-foreground">
          {row.original.name}
        </span>
      </div>
    ),
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
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className="rounded-full px-3 py-1 text-xs font-normal bg-primary/10 border-primary/40 text-primary"
      >
        {row.original.role}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const approved = row.original.status === "Approved";
      const variant = approved ? "success" : "destructive";
      return (
        <Badge variant={variant as any} className="rounded-full px-3 py-1">
          {row.original.status}
        </Badge>
      );
    },
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
