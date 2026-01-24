import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import { TransactionFilter } from "@/components/management/transactions/transaction-filter";
import {
  transactionColumns,
  type Transaction,
} from "@/components/management/transactions/transaction-columns";

const transactions: Transaction[] = [
  {
    id: "TRX-9876",
    user: {
      name: "Zahirul Islam",
      email: "zahir@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zahir",
    },
    type: "Escrow",
    amount: "$4,200.00",
    status: "Pending",
    date: "Oct 20, 2024",
  },
  {
    id: "TRX-9877",
    user: {
      name: "Eleanor Pena",
      email: "eleanor@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eleanor",
    },
    type: "Release",
    amount: "$850.00",
    status: "Completed",
    date: "Oct 19, 2024",
  },
  {
    id: "TRX-9878",
    user: {
      name: "Savannah Nguyen",
      email: "savannah@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Savannah",
    },
    type: "Payment",
    amount: "$1,120.00",
    status: "Completed",
    date: "Oct 19, 2024",
  },
  {
    id: "TRX-9879",
    user: {
      name: "Tanvir Ahmed",
      email: "tanvir@dev.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvir",
    },
    type: "Refund",
    amount: "$320.00",
    status: "Failed",
    date: "Oct 18, 2024",
  },
  {
    id: "TRX-9880",
    user: {
      name: "Bessie Cooper",
      email: "bessie@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bessie",
    },
    type: "Escrow",
    amount: "$6,700.00",
    status: "Pending",
    date: "Oct 17, 2024",
  },
  {
    id: "TRX-9881",
    user: {
      name: "Robert Fox",
      email: "robert@fox.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    },
    type: "Payment",
    amount: "$45.00",
    status: "Completed",
    date: "Oct 17, 2024",
  },
  {
    id: "TRX-9882",
    user: {
      name: "Darlene Robertson",
      email: "darlene@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darlene",
    },
    type: "Release",
    amount: "$2,900.00",
    status: "Completed",
    date: "Oct 16, 2024",
  },
  {
    id: "TRX-9883",
    user: {
      name: "Jacob Jones",
      email: "jacob@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jacob",
    },
    type: "Escrow",
    amount: "$150.00",
    status: "Pending",
    date: "Oct 15, 2024",
  },
  {
    id: "TRX-9884",
    user: {
      name: "Kristin Watson",
      email: "kristin@test.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kristin",
    },
    type: "Refund",
    amount: "$99.00",
    status: "Completed",
    date: "Oct 15, 2024",
  },
  {
    id: "TRX-9885",
    user: {
      name: "Cody Fisher",
      email: "cody@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cody",
    },
    type: "Payment",
    amount: "$500.00",
    status: "Failed",
    date: "Oct 14, 2024",
  },
];
const meta = {
  total: transactions.length,
  page: 1,
  limit: 10,
  totalPages: 4,
};
const Transactions = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <PageHeader
            title="Transactions"
            description="View and manage all financial transactions and history."
            // showBack={true}
            length={meta.total}
          />
          <TransactionFilter />
        </div>
        <DataTable columns={transactionColumns} data={transactions} meta={meta} />
      </div>
    </PageLayout>
  );
};

export default Transactions;
