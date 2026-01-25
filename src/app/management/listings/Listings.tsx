;

import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  listingColumns,
  type Listing,
} from "@/components/management/listings/listing-columns";
import { ListingFilter } from "@/components/management/listings/listing-filter";

const mockListings: Listing[] = [
  {
    id: "1",
    listingId: "#LST-8851",
    seller: {
      name: "Ash Ketchum",
      email: "ash@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ash",
    },
    card: {
      name: "Charizard 1st Edition",
      image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=300&q=80",
      set: "Base Set",
      condition: "Near Mint",
    },
    price: 4500.00,
    date: "Oct 24, 2024",
    status: "Pending",
  },
  {
    id: "2",
    listingId: "#LST-8852",
    seller: {
      name: "Yugi Muto",
      email: "yugi@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yugi",
    },
    card: {
      name: "Blue-Eyes White Dragon",
      image: "https://images.unsplash.com/photo-1622643048696-673e86f5c531?auto=format&fit=crop&w=300&q=80",
      set: "Legend of Blue Eyes",
      condition: "Mint",
    },
    price: 1250.00,
    date: "Oct 23, 2024",
    status: "Active",
  },
  {
    id: "3",
    listingId: "#LST-8853",
    seller: {
      name: "Seto Kaiba",
      email: "kaiba@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kaiba",
    },
    card: {
      name: "Dark Magician",
      image: "https://images.unsplash.com/photo-1593814681473-05440a43c518?auto=format&fit=crop&w=300&q=80",
      set: "Yugi Starter Deck",
      condition: "Played",
    },
    price: 450.00,
    date: "Oct 22, 2024",
    status: "Sold",
  },
  {
    id: "4",
    listingId: "#LST-8854",
    seller: {
      name: "Gary Oak",
      email: "gary@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gary",
    },
    card: {
      name: "Blastoise Holo",
      image: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?auto=format&fit=crop&w=300&q=80",
      set: "Base Set",
      condition: "Damaged",
    },
    price: 120.00,
    date: "Oct 21, 2024",
    status: "Rejected",
  },
  {
    id: "5",
    listingId: "#LST-8855",
    seller: {
      name: "Misty Waterflower",
      email: "misty@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Misty",
    },
    card: {
      name: "Gyarados Star Delta",
      image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=300&q=80",
      set: "Holon Phantoms",
      condition: "Near Mint",
    },
    price: 850.00,
    date: "Oct 20, 2024",
    status: "Pending",
  },
  {
    id: "6",
    listingId: "#LST-8856",
    seller: {
      name: "Brock Harrison",
      email: "brock@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brock",
    },
    card: {
      name: "Onix Holo",
      image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=300&q=80",
      set: "Gym Heroes",
      condition: "Excellent",
    },
    price: 150.00,
    date: "Oct 19, 2024",
    status: "Active",
  },
  {
    id: "7",
    listingId: "#LST-8857",
    seller: {
      name: "Joey Wheeler",
      email: "joey@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joey",
    },
    card: {
      name: "Red-Eyes B. Dragon",
      image: "https://images.unsplash.com/photo-1622643048696-673e86f5c531?auto=format&fit=crop&w=300&q=80",
      set: "Legend of Blue Eyes",
      condition: "Near Mint",
    },
    price: 950.00,
    date: "Oct 18, 2024",
    status: "Pending",
  },
  {
    id: "8",
    listingId: "#LST-8858",
    seller: {
      name: "Mai Valentine",
      email: "mai@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mai",
    },
    card: {
      name: "Harpie's Feather Duster",
      image: "https://images.unsplash.com/photo-1593814681473-05440a43c518?auto=format&fit=crop&w=300&q=80",
      set: "Tournament Pack 1",
      condition: "Mint",
    },
    price: 1200.00,
    date: "Oct 17, 2024",
    status: "Active",
  },
  {
    id: "9",
    listingId: "#LST-8859",
    seller: {
      name: "Lance Dragon",
      email: "lance@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lance",
    },
    card: {
      name: "Dragonite VMAX",
      image: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?auto=format&fit=crop&w=300&q=80",
      set: "Evolving Skies",
      condition: "Gem Mint",
    },
    price: 350.00,
    date: "Oct 16, 2024",
    status: "Sold",
  },
  // {
  //   id: "10",
  //   listingId: "#LST-8860",
  //   seller: {
  //     name: "Cynthia Garchomp",
  //     email: "cynthia@cardhub.gg",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cynthia",
  //   },
  //   card: {
  //     name: "Garchomp LV.X",
  //     image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=300&q=80",
  //     set: "Supreme Victors",
  //     condition: "Lightly Played",
  //   },
  //   price: 280.00,
  //   date: "Oct 15, 2024",
  //   status: "Pending",
  // },
];

const meta = {
  total: mockListings.length,
  page: 1,
  limit: 10,
  totalPages: 12,
};

const ListingManagement = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <PageHeader
            title="Listing Management"
            description="Approve, reject, and moderate card listings from sellers."
            // showBack={true}
            length={meta.total}
          />
          <ListingFilter />
        </div>

        <DataTable columns={listingColumns} data={mockListings} meta={meta} />
      </div>
    </PageLayout>
  );
};

export default ListingManagement;
