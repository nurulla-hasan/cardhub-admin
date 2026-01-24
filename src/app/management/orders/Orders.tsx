"use client";

import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  orderColumns,
  type Order,
} from "@/components/management/orders/order-columns";
import { OrderFilter } from "@/components/management/orders/order-filter";

const mockOrders: Order[] = [
  {
    id: "1",
    orderId: "#1233",
    winner: {
      name: "Kathryn Murp",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    product: {
      name: "iPhone 13 Pro Max",
      image:
        "https://images.pexels.com/photos/12718912/pexels-photo-12718912.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    winningPrice: 24.0,
    expectedDelivery: "23/07/24",
    status: "Payment Success",
  },
  {
    id: "2",
    orderId: "#1233",
    winner: {
      name: "Devon Lane",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    product: {
      name: "Samsung L2 Smart TV",
      image:
        "https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    winningPrice: 20.0,
    expectedDelivery: "23/07/24",
    status: "Payment Success",
  },
  {
    id: "3",
    orderId: "#1233",
    winner: {
      name: "Foysal Rahman",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    product: {
      name: "Men's T-shirt",
      image:
        "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    winningPrice: 45.0,
    expectedDelivery: "23/07/24",
    status: "Payment Success",
  },
  {
    id: "4",
    orderId: "#1233",
    winner: {
      name: "Hari Danang",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    product: {
      name: "Prestige Oven",
      image:
        "https://images.pexels.com/photos/7245466/pexels-photo-7245466.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    winningPrice: 35.0,
    expectedDelivery: "23/07/24",
    status: "Payment Success",
  },
  {
    id: "5",
    orderId: "#1233",
    winner: {
      name: "Floyd Miles",
      avatar:
        "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    product: {
      name: "Rolex M2 Watch",
      image:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    winningPrice: 15.0,
    expectedDelivery: "23/07/24",
    status: "Payment Success",
  },
  {
    id: "6",
    orderId: "#1233",
    winner: {
      name: "Eleanor Pena",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    product: {
      name: "Leather Money Bag",
      image:
        "https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    winningPrice: 18.0,
    expectedDelivery: "23/07/24",
    status: "Payment Success",
  },
];

const OrderManagement = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <PageHeader
            title="Order Management"
            description="Track and manage customer orders and shipments."
            showBack={true}
          />
          <OrderFilter />
        </div>

        <DataTable columns={orderColumns} data={mockOrders} />
      </div>
    </PageLayout>
  );
};

export default OrderManagement;
