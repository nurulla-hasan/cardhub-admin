"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function OrderFilter() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="relative w-full md:w-65">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by item name"
          className="pl-9 pr-3 rounded-full"
        />
      </div>
    </div>
  );
}
