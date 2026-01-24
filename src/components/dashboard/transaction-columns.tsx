
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
        <Avatar className="h-8 w-8">
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
        <Badge variant="outline" className={
          type === "Escrow" ? "border-blue-500 text-blue-500" :
          type === "Release" ? "border-green-500 text-green-500" :
          type === "Payment" ? "border-purple-500 text-purple-500" :
          "border-gray-500 text-gray-500"
        }>
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <span className="text-sm font-bold text-foreground">{row.original.amount}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge className={
          status === "Completed" ? "bg-green-100 text-green-700 hover:bg-green-100" :
          status === "Pending" ? "bg-amber-100 text-amber-700 hover:bg-amber-100" :
          "bg-red-100 text-red-700 hover:bg-red-100"
        }>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.original.date}</span>
    ),
  },
];
