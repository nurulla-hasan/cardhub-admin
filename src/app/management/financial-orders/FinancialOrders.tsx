

import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  financialOrderColumns,
  type OrderData,
} from "@/components/management/financial-orders/financial-order-columns";

const mockOrders: OrderData[] = [
  {
    id: "1",
    slNo: "#3205994835657",
    userName: "Robert Smith",
    userAvatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "robert.smith@example.com",
    contactNumber: "+85345466754",
    item: "iphone 14 pro max",
    itemImage: "https://images.pexels.com/photos/14666017/pexels-photo-14666017.jpeg?auto=compress&cs=tinysrgb&w=150",
    totalFee: "$445.00",
    months: 12,
    perMonthFee: "$37.08",
    lastPayment: "12/06/24",
    status: "Paid",
    orderStatus: "Approved",
    shippingAddress: "Royal Ln. Mesa, New Jersey",
    orderDate: "11/08/24",
    expectedDeliveryDate: "12/08/24",
  },
  {
    id: "2",
    slNo: "#3205994835658",
    userName: "Devon Lane",
    userAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "csilvers@rizon.com",
    contactNumber: "(219) 555-0114",
    item: "Samsung Smart TV",
    itemImage: "https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=150",
    totalFee: "$20.00",
    months: 6,
    perMonthFee: "$2.00",
    lastPayment: "10/06/24",
    status: "Paid",
    orderStatus: "Approved",
    shippingAddress: "2972 Westheimer Rd. Santa Ana, Illinois",
    orderDate: "10/06/24",
    expectedDeliveryDate: "15/06/24",
  },
  {
    id: "3",
    slNo: "#3205994835659",
    userName: "Hari Danang",
    userAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "qamaho@mail.com",
    contactNumber: "(316) 555-0116",
    item: "Men's T-shirt",
    itemImage: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=150",
    totalFee: "$45.00",
    months: 12,
    perMonthFee: "$4.00",
    lastPayment: "10/06/24",
    status: "Due",
    orderStatus: "Applied",
    shippingAddress: "4517 Washington Ave. Manchester, Kentucky",
    orderDate: "10/06/24",
    expectedDeliveryDate: "20/06/24",
  },
  {
    id: "4",
    slNo: "#3205994835660",
    userName: "Eleanor Pena",
    userAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "xterris@gmail.com",
    contactNumber: "(704) 555-0127",
    item: "Logitech A4 Mouse",
    itemImage: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=150",
    totalFee: "$18.00",
    months: 12,
    perMonthFee: "$8.00",
    lastPayment: "04/06/24",
    status: "Due",
    orderStatus: "Approved",
    shippingAddress: "3891 Ranchview Dr. Richardson, California",
    orderDate: "04/06/24",
    expectedDeliveryDate: "10/06/24",
  },
  {
    id: "5",
    slNo: "#3205994835661",
    userName: "Floyd Miles",
    userAvatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    email: "xterris@gmail.com",
    contactNumber: "(505) 555-0125",
    item: "100 Credits",
    itemImage: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=150",
    totalFee: "$15.00",
    months: 16,
    perMonthFee: "$5.00",
    lastPayment: "04/06/24",
    status: "Paid",
    orderStatus: "Applied",
    shippingAddress: "4140 Parker Rd. Allentown, New Mexico",
    orderDate: "04/06/24",
    expectedDeliveryDate: "08/06/24",
  },
];

const FinancialOrders = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <PageHeader
            title="Financial Orders"
            description="Monitor and process financial orders and payouts."
            showBack={true}
          />
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search here..."
              className="pl-10 rounded-full"
            />
          </div>
        </div>

        <DataTable columns={financialOrderColumns} data={mockOrders} />
      </div>
    </PageLayout>
  );
};

export default FinancialOrders;
