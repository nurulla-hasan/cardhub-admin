"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Eye, AlertTriangle, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import type { Report } from "./report-columns";
import { getInitials } from "@/lib/utils";

interface ReportViewModalProps {
  report: Report;
}

export function ReportViewModal({ report }: ReportViewModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalWrapper
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Report Details"
      description={`Reviewing report ${report.reportId}`}
      showClose={true}
      actionTrigger={
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          title="View Details"
        >
          <Eye className="h-4 w-4" />
        </Button>
      }
    >
      <div className="p-6 space-y-6">
        {/* Report Summary */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{report.type}</Badge>
              <Badge
                variant={
                  report.status === "Pending"
                    ? "warning"
                    : report.status === "Resolved"
                    ? "success"
                    : "destructive"
                }
              >
                {report.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Reported on {report.date}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground uppercase font-semibold">Report ID</p>
            <p className="font-mono font-medium">{report.reportId}</p>
          </div>
        </div>

        {/* Reason Section */}
        <div className="space-y-2 p-4 rounded-lg bg-muted/30 border">
          <p className="text-xs text-muted-foreground uppercase font-semibold flex items-center gap-2">
            <AlertTriangle className="h-3 w-3" /> Reason for Report
          </p>
          <p className="text-sm leading-relaxed italic">
            "{report.reason}"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Reporter Info */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground uppercase font-semibold">Reporter</p>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
              <Avatar className="h-10 w-10">
                <AvatarImage src={report.reporter.avatar} alt={report.reporter.name} />
                <AvatarFallback>{getInitials(report.reporter.name)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{report.reporter.name}</span>
                <span className="text-xs text-muted-foreground truncate max-w-30">
                  {report.reporter.email}
                </span>
              </div>
            </div>
          </div>

          {/* Reported Entity Info */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground uppercase font-semibold">Reported Entity</p>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                {report.reportedEntity.type === "User" ? (
                  <User className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <FileText className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium flex items-center gap-1">
                  {report.reportedEntity.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {report.reportedEntity.type}: {report.reportedEntity.id}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {report.status === "Pending" && (
          <div className="flex gap-3 pt-4 border-t">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <CheckCircle className="mr-2 h-4 w-4" /> Resolve
            </Button>
            <Button variant="destructive" className="flex-1">
              <XCircle className="mr-2 h-4 w-4" /> Dismiss
            </Button>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
}
