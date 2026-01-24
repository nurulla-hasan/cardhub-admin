"use client";

import PageLayout from "@/components/common/page-layout";
import { TradesChart } from "@/components/management/reports/trades-chart";
import { PaymentMethodsChart } from "@/components/management/reports/payment-methods-chart";
import { UserActivityChart } from "@/components/management/reports/user-activity-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, DollarSign, Activity, Users, CreditCard } from "lucide-react";

const TransactionReports = () => {
  return (
    <PageLayout>
      <div>
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card> 
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Volume
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <span className="text-green-500 flex items-center mr-1">
                  +20.1% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Trades
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <span className="text-green-500 flex items-center mr-1">
                  +180.1% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <span className="text-red-500 flex items-center mr-1">
                  -4.5% <ArrowDownRight className="h-3 w-3 ml-0.5" />
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Transaction
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$345.00</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <span className="text-green-500 flex items-center mr-1">
                  +8% <ArrowUpRight className="h-3 w-3 ml-0.5" />
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <TradesChart />
          </div>
          <div className="lg:col-span-3">
             <PaymentMethodsChart />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-1">
           <UserActivityChart />
        </div>
      </div>
    </PageLayout>
  );
};

export default TransactionReports;
