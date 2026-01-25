;

import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { DataTable } from "@/components/ui/custom/data-table";
import {
  reportColumns,
  type Report,
} from "@/components/management/moderation/report-columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

const mockReports: Report[] = [
  {
    id: "1",
    reportId: "#RPT-1001",
    type: "Fake Listing",
    reporter: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    reportedEntity: {
      type: "Listing",
      name: "Charizard 1st Edition",
      id: "LST-8851",
    },
    reason: "The item shown in the picture is clearly a proxy card, not authentic.",
    status: "Pending",
    date: "Oct 25, 2024",
  },
  {
    id: "2",
    reportId: "#RPT-1002",
    type: "Trade Dispute",
    reporter: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    reportedEntity: {
      type: "User",
      name: "Scammer123",
      id: "USR-5521",
    },
    reason: "User agreed to trade but never sent their card after I sent mine.",
    status: "Pending",
    date: "Oct 24, 2024",
  },
  {
    id: "3",
    reportId: "#RPT-1003",
    type: "Harassment",
    reporter: {
      name: "Mike Ross",
      email: "mike@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    reportedEntity: {
      type: "User",
      name: "AngryUser",
      id: "USR-9988",
    },
    reason: "Sent abusive messages in chat.",
    status: "Resolved",
    date: "Oct 22, 2024",
  },
  {
    id: "4",
    reportId: "#RPT-1004",
    type: "Fake Listing",
    reporter: {
      name: "Sarah Connor",
      email: "sarah@example.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    reportedEntity: {
      type: "Listing",
      name: "Black Lotus",
      id: "LST-1122",
    },
    reason: "Price is too good to be true, likely a scam.",
    status: "Dismissed",
    date: "Oct 20, 2024",
  },
  {
    id: "5",
    reportId: "#RPT-1005",
    type: "Trade Dispute",
    reporter: {
      name: "Ash Ketchum",
      email: "ash@cardhub.gg",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ash",
    },
    reportedEntity: {
      type: "User",
      name: "RocketGrunt",
      id: "USR-0001",
    },
    reason: "Card received was damaged, description said Near Mint.",
    status: "Pending",
    date: "Oct 26, 2024",
  },
];

export default function ReportManagement() {
  const pendingCount = mockReports.filter((r) => r.status === "Pending").length;
  const resolvedCount = mockReports.filter((r) => r.status === "Resolved").length;

  return (
    <PageLayout>
      <PageHeader
        title="Report Management"
        description="Handle user reports related to fake listings or trade disputes."
      />

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCount}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Reports</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resolvedCount}</div>
            <p className="text-xs text-muted-foreground">Total resolved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24h</div>
            <p className="text-xs text-muted-foreground">Target: &lt; 48h</p>
          </CardContent>
        </Card>
      </div>

      <DataTable columns={reportColumns} data={mockReports} />
    </PageLayout>
  );
}
