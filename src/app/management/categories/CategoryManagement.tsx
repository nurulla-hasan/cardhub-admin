;

import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  categoryColumns,
  type Category,
} from "@/components/management/categories/category-columns";
import { CategoryFilter } from "@/components/management/categories/category-filter";

const mockCategories: Category[] = [
  {
    id: "1",
    name: "Pokemon",
    slug: "pokemon",
    description: "Pokemon Trading Card Game",
    count: 1250,
    status: "active",
  },
  {
    id: "2",
    name: "Yu-Gi-Oh!",
    slug: "yugioh",
    description: "Yu-Gi-Oh! Trading Card Game",
    count: 850,
    status: "active",
  },
  {
    id: "3",
    name: "Magic: The Gathering",
    slug: "mtg",
    description: "Magic: The Gathering TCG",
    count: 2100,
    status: "active",
  },
  {
    id: "4",
    name: "One Piece",
    slug: "one-piece",
    description: "One Piece Card Game",
    count: 450,
    status: "active",
  },
  {
    id: "5",
    name: "Dragon Ball Super",
    slug: "dbs",
    description: "Dragon Ball Super Card Game",
    count: 320,
    status: "inactive",
  },
];

const meta = {
  total: mockCategories.length,
  page: 1,
  limit: 10,
  totalPages: 1,
};

const CategoryManagement = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <PageHeader
            title="Category Management"
            description="Manage card categories and their settings."
            length={meta.total}
          />
          <CategoryFilter />
        </div>

        <DataTable columns={categoryColumns} data={mockCategories} meta={meta} />
      </div>
    </PageLayout>
  );
};

export default CategoryManagement;
