
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  status: "active" | "inactive";
};

export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground">
          {row.original.name}
        </span>
        <span className="text-xs text-muted-foreground">
          {row.original.description}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.slug}
      </span>
    ),
  },
  {
    accessorKey: "count",
    header: "Listings",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.original.count}
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
          variant={status === "active" ? "success" : "secondary"}
        >
          {status === "active" ? "Active" : "Inactive"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-end mr-2">Actions</div>,
    cell: () => (
      <div className="flex items-center justify-end gap-2">
        <Button variant="outline" size="icon-sm" className="text-muted-foreground hover:text-foreground">
          <Edit />
        </Button>
        <Button variant="outline" size="icon-sm" className="text-muted-foreground hover:text-destructive">
          <Trash2 />
        </Button>
      </div>
    ),
  },
];
