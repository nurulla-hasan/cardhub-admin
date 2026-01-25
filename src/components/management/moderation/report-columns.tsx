"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReportViewModal } from "./report-view-modal";
import { formatDate, getInitials, cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CheckCircle,
  ChevronDown,
  Trash2,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

export type ReportStatus = "Pending" | "Resolved" | "Dismissed";
export type ReportType =
  | "Fake Listing"
  | "Trade Dispute"
  | "Harassment"
  | "Other";

export interface Report {
  id: string;
  reportId: string;
  type: ReportType;
  reporter: {
    name: string;
    email: string;
    avatar: string;
  };
  reportedEntity: {
    type: "User" | "Listing";
    name: string; // Name of user or listing title
    id: string; // ID of user or listing
    image?: string; // Optional image for listing or user avatar
  };
  reason: string;
  status: ReportStatus;
  date: string;
}

export const reportColumns: ColumnDef<Report>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center px-1">
        <label
          className="flex items-center gap-2 cursor-pointer select-none group"
          title="Select all rows on this page"
        >
          <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
            Select All
          </span>
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </label>
      </div>
    ),
    cell: ({ row }) => (
      <div className="px-1">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "reportId",
    header: "Report ID",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("reportId")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as ReportType;
      return (
        <Badge variant="outline" className="font-normal">
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "reporter",
    header: "Reporter",
    cell: ({ row }) => {
      const reporter = row.original.reporter;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={reporter.avatar} alt={reporter.name} />
            <AvatarFallback>
              {getInitials(reporter.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{reporter.name}</span>
            <span className="text-xs text-muted-foreground">
              {reporter.email}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "reportedEntity",
    header: "Reported Entity",
    cell: ({ row }) => {
      const entity = row.original.reportedEntity;
      return (
        <div className="flex flex-col">
          <span className="text-sm font-medium flex items-center gap-2">
            {entity.type === "User" ? "User:" : "Listing:"} {entity.name}
          </span>
          <span className="text-xs text-muted-foreground">ID: {entity.id}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as ReportStatus;
      return (
        <Badge
          variant={
            status === "Pending"
              ? "warning"
              : status === "Resolved"
                ? "success"
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
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date");
      return (
        <div className="text-sm text-muted-foreground">
          {formatDate(date as string)}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: ({ table }) => {
      const selectedCount = table.getSelectedRowModel().rows.length;
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "flex gap-1 items-center font-semibold transition-all",
                  selectedCount > 0 
                    ? "text-primary bg-primary/10 hover:bg-primary/20" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {selectedCount > 0 ? `Bulk Actions (${selectedCount})` : "Actions"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                {selectedCount > 0 ? `Selected: ${selectedCount} Reports` : "Global Actions"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                disabled={selectedCount === 0}
                onClick={() => {
                  toast.success(`Resolved ${selectedCount} reports`);
                  table.resetRowSelection();
                }}
              >
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                Bulk Resolve
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled={selectedCount === 0}
                onClick={() => {
                  toast.success(`Dismissed ${selectedCount} reports`);
                  table.resetRowSelection();
                }}
              >
                <XCircle className="mr-2 h-4 w-4 text-yellow-500" />
                Bulk Dismiss
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                disabled={selectedCount === 0}
                onClick={() => table.resetRowSelection()}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Selection
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    cell: ({ row }) => {
      const report = row.original;

      return (
        <div className="flex items-center justify-end gap-2 pr-2">
          <ReportViewModal report={report} />
        </div>
      );
    },
  },
];
