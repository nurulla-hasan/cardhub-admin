"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryEditModal } from "./category-edit-modal";

export type Category = {
  id: string;
  slNo: string;
  name: string;
  image: string;
  bannerImage: string;
  viewOrder?: string;
};

export const categoryColumns: ColumnDef<Category>[] = [
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
    accessorKey: "name",
    header: "Category Name",
    cell: ({ row }) => (
      <div className="flex items-center">
        <span className="text-sm font-medium text-foreground">
          {row.original.name}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "image",
    header: "Category Image",
    cell: ({ row }) => (
      <div className="flex items-center">
        <img
          src={row.original.image}
          alt={row.original.name}
          className="h-12 w-12 rounded-lg object-cover border border-neutral-200"
        />
      </div>
    ),
  },
  {
    accessorKey: "bannerImage",
    header: "Banner Image",
    cell: ({ row }) => (
      <div className="flex items-center">
        <img
          src={row.original.bannerImage}
          alt={`${row.original.name} banner`}
          className="h-12 w-24 rounded-lg object-cover border border-neutral-200"
        />
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right mr-4">Action</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-end gap-2">
        <CategoryEditModal category={row.original} />
        <Button
          variant="outline"
          size="icon-sm"
          className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 />
        </Button>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
