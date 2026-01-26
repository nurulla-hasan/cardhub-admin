
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AddCategoryModal } from "./add-category-modal";

export function CategoryFilter() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-full md:w-65">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search categories..."
          className="pl-9 pr-3 rounded-full"
        />
      </div>
      <AddCategoryModal/>
    </div>
  );
}
