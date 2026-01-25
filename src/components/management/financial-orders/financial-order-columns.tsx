;

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FinancialOrderViewModal } from "./financial-order-view-modal";

export type OrderData = {
  id: string;
  slNo: string;
  userName: string;
  userAvatar: string;
  email: string;
  contactNumber: string;
  item: string;
  itemImage: string;
  totalFee: string;
  months: number;
  perMonthFee: string;
  lastPayment?: string;
  status?: "Paid" | "Due";
  orderStatus: "Applied" | "Approved";
  shippingAddress: string;
  orderDate: string;
  expectedDeliveryDate: string;
};

// Merged Table Columns
export const financialOrderColumns: ColumnDef<OrderData>[] = [
  {
    accessorKey: "id",
    header: "SL no.",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">
        {row.index + 1}
      </span>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "userName",
    header: "User's Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border">
          <AvatarImage
            src={row.original.userAvatar}
            alt={row.original.userName}
          />
          <AvatarFallback>{row.original.userName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{row.original.userName}</span>
          <span className="text-xs text-muted-foreground">
            {row.original.email}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "contactNumber",
    header: "Contact",
  },
  {
    accessorKey: "item",
    header: "Winning Product",
  },
  {
    accessorKey: "totalFee",
    header: "Total Fee",
  },
  {
    accessorKey: "months",
    header: "Months",
  },
  {
    accessorKey: "perMonthFee",
    header: "Monthly Fee",
  },
  {
    accessorKey: "orderStatus",
    header: "Order Status",
    cell: ({ row }) => {
      const status = row.original.orderStatus;
      return (
        <Badge
          variant={status === "Approved" ? "success" : "secondary"}
          className="rounded-full px-4"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Payment Status",
    cell: ({ row }) => {
      const status = row.original.status;
      if (!status) return <span className="text-muted-foreground">-</span>;
      return (
        <Badge
          variant={status === "Paid" ? "success" : "warning"}
          className="rounded-full px-4"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => (
      <div className="text-end">
        <FinancialOrderViewModal order={row.original} />
      </div>
    ),
  },
];
