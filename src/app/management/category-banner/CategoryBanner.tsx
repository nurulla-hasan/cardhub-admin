
import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  type Category,
  categoryColumns,
} from "@/components/management/category-banner/category-columns";
import { CategoryAddModal } from "@/components/management/category-banner/category-add-modal";

const mockCategories: Category[] = [
  {
    id: "1",
    slNo: "#12333",
    name: "Electronics",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "2",
    slNo: "#12333",
    name: "Fashion",
    image: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    slNo: "#12333",
    name: "Home & Living",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "4",
    slNo: "#12333",
    name: "Sports & Fitness",
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "5",
    slNo: "#12333",
    name: "Books & Magazine",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "6",
    slNo: "#12333",
    name: "Health & Beauty",
    image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "7",
    slNo: "#12333",
    name: "Jewelry",
    image: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "8",
    slNo: "#12333",
    name: "Kitchen & Garden",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "9",
    slNo: "#12333",
    name: "Kids & Toys",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoshi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "10",
    slNo: "#12333",
    name: "Vehicles",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=400",
    bannerImage: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const CategoryBanner = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <PageHeader
            title="Category & Banner"
            description="Manage application categories and promotional banners."
            showBack={true}
          />
          <CategoryAddModal />
        </div>

        <DataTable columns={categoryColumns} data={mockCategories} />
      </div>
    </PageLayout>
  );
};

export default CategoryBanner;
