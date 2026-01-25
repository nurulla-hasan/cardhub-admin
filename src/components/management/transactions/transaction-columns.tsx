
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Transaction = {
  id: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  type: "Escrow" | "Release" | "Payment" | "Refund";
  amount: string;
  status: "Completed" | "Pending" | "Failed";
  date: string;
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "Transaction ID",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-foreground">{row.original.id}</span>
    ),
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src={row.original.user.avatar} alt={row.original.user.name} />
          <AvatarFallback>{row.original.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            {row.original.user.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {row.original.user.email}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.original.type;
      return (
        <Badge
          variant={
            type === "Escrow"
              ? "info"
              : type === "Release"
              ? "success"
              : type === "Payment"
              ? "default"
              : "destructive"
          }
        >
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span className="text-sm font-bold text-foreground">
        {row.original.amount}
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
            status === "Completed"
              ? "success"
              : status === "Pending"
              ? "warning"
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
    header: () => <div className="text-end w-full">Date</div>,
    cell: ({ row }) => (
      <div className="text-sm text-end text-muted-foreground">{row.original.date}</div>
    ),
  },
];
