"use client";

import { useState } from "react";
import { Eye, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { OrderData } from "./financial-order-columns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface FinancialOrderViewModalProps {
  order: OrderData;
}

export function FinancialOrderViewModal({ order }: FinancialOrderViewModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title="Financial Order Details"
      description="View full details of the winning product and winner information."
      showClose={true}
      actionTrigger={
        <Button variant="outline" size="icon">
          <Eye className="h-4 w-4 text-primary" />
        </Button>
      }
    >
      <ScrollArea className="max-h-[70vh] p-6">
        <div className="space-y-6 pr-4">
          {/* Winner Section */}
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border">
              <AvatarImage src={order.userAvatar} alt={order.userName} />
              <AvatarFallback>{order.userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-base font-semibold">{order.userName}</h4>
              <p className="text-sm text-muted-foreground">{order.contactNumber}</p>
              <div className="flex items-center gap-1.5 text-sm pt-1">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-muted-foreground">{order.shippingAddress}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Winning Product Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Winning Product</h3>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-md overflow-hidden border bg-muted shrink-0">
                <img
                  src={order.itemImage}
                  alt={order.item}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{order.item}</h4>
                <p className="text-sm">
                  Winning Price: <span className="font-bold text-primary">{order.totalFee}</span>
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Order Info List */}
          <div className="grid gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Order ID</span>
              <span className="font-medium">{order.slNo}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Order Date</span>
              <span className="font-medium">{order.orderDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Expected Delivery</span>
              <span className="font-medium">{order.expectedDeliveryDate}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold pt-1 border-t border-dashed">
              <span>Status</span>
              <span className={order.status === "Paid" ? "text-green-600" : "text-amber-500"}>
                {order.status === "Paid" ? "Payment Success" : "Payment Pending"}
              </span>
            </div>
          </div>
        </div>
      </ScrollArea>
    </ModalWrapper>
  );
}