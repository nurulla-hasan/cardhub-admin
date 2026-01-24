"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function TransactionFilter() {
  return (
    <div className="flex items-center justify-end">
      <div className="relative w-full md:w-64">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search here..."
          className="pl-9 rounded-full"
        />
      </div>
    </div>
  );
}
