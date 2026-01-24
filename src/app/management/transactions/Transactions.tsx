
import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  transactionColumns,
  type Transaction,
} from "@/components/management/transactions/transaction-columns";
import { TransactionFilter } from "@/components/management/transactions/transaction-filter";

const mockTransactions: Transaction[] = [
  {
    id: "1",
    slNo: "#12333",
    date: "12/06/24",
    user: {
      name: "Kathryn Murphy",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "iPhone 13 Pro Max",
    paymentStatus: "Paid",
    paidAmount: 24.0,
    paymentType: "Full Payment",
  },
  {
    id: "2",
    slNo: "#12333",
    date: "10/06/24",
    user: {
      name: "Devon Lane",
      avatar:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "Samsung L2 Smart TV",
    paymentStatus: "Paid",
    paidAmount: 20.0,
    paymentType: "Installment",
  },
  {
    id: "3",
    slNo: "#12333",
    date: "10/06/24",
    user: {
      name: "Foysal Rahman",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "Men's T-shirt",
    paymentStatus: "Paid",
    paidAmount: 45.0,
    paymentType: "Full Payment",
  },
  {
    id: "4",
    slNo: "#12333",
    date: "05/06/24",
    user: {
      name: "Hari Danang",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "Logitech A4 Mouse",
    paymentStatus: "Paid",
    paidAmount: 35.0,
    paymentType: "Installment",
  },
  {
    id: "5",
    slNo: "#12333",
    date: "04/06/24",
    user: {
      name: "Floyd Miles",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "100 Credits",
    paymentStatus: "Paid",
    paidAmount: 15.0,
    paymentType: "Installment",
  },
  {
    id: "6",
    slNo: "#12333",
    date: "04/06/24",
    user: {
      name: "Eleanor Pena",
      avatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "Men's T-shirt",
    paymentStatus: "Paid",
    paidAmount: 18.0,
    paymentType: "Full Payment",
  },
  {
    id: "7",
    slNo: "#12333",
    date: "04/06/24",
    user: {
      name: "Devon Lane",
      avatar:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "500 Credits",
    paymentStatus: "Paid",
    paidAmount: 24.0,
    paymentType: "Installment",
  },
  {
    id: "8",
    slNo: "#12333",
    date: "04/06/24",
    user: {
      name: "Devon Lane",
      avatar:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "Rolax M2 Watch",
    paymentStatus: "Paid",
    paidAmount: 28.0,
    paymentType: "Full Payment",
  },
  {
    id: "9",
    slNo: "#12333",
    date: "04/06/24",
    user: {
      name: "Devon Lane",
      avatar:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "Rolax M2 Watch",
    paymentStatus: "Paid",
    paidAmount: 28.0,
    paymentType: "Installment",
  },
  {
    id: "10",
    slNo: "#12333",
    date: "04/06/24",
    user: {
      name: "Hari Danang",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    item: "Rolax M2 Watch",
    paymentStatus: "Paid",
    paidAmount: 28.0,
    paymentType: "Full Payment",
  },
];

const Transactions = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <PageHeader
            title="Transactions"
            description="View and manage all financial transactions and history."
            showBack={true}
          />
          <TransactionFilter />
        </div>
        <DataTable columns={transactionColumns} data={mockTransactions} />
      </div>
    </PageLayout>
  );
};

export default Transactions;
