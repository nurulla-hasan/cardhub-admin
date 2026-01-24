import PageLayout from "@/components/common/page-layout";
import Stats from "@/components/dashboard/stats";
import EarningGrowthChart from "@/components/dashboard/earning-growth";
import TopBidder from "@/components/dashboard/top-bidder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  transactionColumns,
  type Transaction,
} from "@/components/management/transactions/transaction-columns";
import { DataTable } from "@/components/ui/custom/data-table";

const Dashboard = () => {

  return (
    <PageLayout>
      <div className="space-y-8">
        {/* User Overview Section */}
        <section className="space-y-4">
          <Stats />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Transaction Overview Chart */}
             <EarningGrowthChart />
          </div>
          <div className="space-y-6">
             {/* Recent User Activity */}
            <TopBidder />
          </div>
        </div>

        {/* Transaction Overview Section */}
        <section className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">
                  Recent Transactions
                </CardTitle>
                <span className="text-xs text-primary cursor-pointer">View all</span>
              </div>
            </CardHeader>
            <CardContent>
              <DataTable columns={transactionColumns} data={transactions} />
            </CardContent>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default Dashboard;

const transactions: Transaction[] = [
  {
    id: "TRX-9871",
    user: {
      name: "Kathryn Murphy",
      email: "kathryn@example.com",
      avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=96&q=60",
    },
    type: "Escrow",
    amount: "$2,450.00",
    status: "Pending",
    date: "Oct 24, 2024",
  },
  {
    id: "TRX-9872",
    user: {
      name: "Devon Lane",
      email: "devon@example.com",
      avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=96&q=60",
    },
    type: "Release",
    amount: "$1,200.00",
    status: "Completed",
    date: "Oct 24, 2024",
  },
  {
    id: "TRX-9873",
    user: {
      name: "Foysal Rahman",
      email: "foysal@example.com",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&q=60",
    },
    type: "Payment",
    amount: "$593.00",
    status: "Completed",
    date: "Oct 23, 2024",
  },
  {
    id: "TRX-9874",
    user: {
      name: "Courtney Henry",
      email: "courtney@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=60",
    },
    type: "Escrow",
    amount: "$3,100.00",
    status: "Pending",
    date: "Oct 22, 2024",
  },
  {
    id: "TRX-9875",
    user: {
      name: "Arlene McCoy",
      email: "arlene@example.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&q=60",
    },
    type: "Refund",
    amount: "$150.00",
    status: "Failed",
    date: "Oct 21, 2024",
  },
];
