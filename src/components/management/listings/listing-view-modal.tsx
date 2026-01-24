"use client";

import { useState } from "react";
import { Check, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import type { Listing } from "./listing-columns";

interface ListingViewModalProps {
  listing: Listing;
}

export function ListingViewModal({ listing }: ListingViewModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalWrapper
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Listing Details"
      description={`Moderating listing ${listing.listingId}`}
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
        <div className="flex gap-6">
          <div className="w-1/3">
            <img
              src={listing.card.image}
              alt={listing.card.name}
              className="w-full aspect-3/4 object-cover rounded-lg border shadow-sm"
            />
          </div>
          <div className="w-2/3 space-y-4">
            <div>
              <h3 className="text-lg font-bold">{listing.card.name}</h3>
              <p className="text-sm text-muted-foreground">
                {listing.card.set} • {listing.card.condition}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-semibold">
                  Price
                </p>
                <p className="text-lg font-bold text-primary">
                  ${listing.price.toFixed(2)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase font-semibold">
                  Status
                </p>
                <Badge
                  variant={
                    listing.status === "Active"
                      ? "success"
                      : listing.status === "Pending"
                      ? "warning"
                      : listing.status === "Sold"
                      ? "info"
                      : "destructive"
                  }
                >
                  {listing.status}
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">
                Seller Information
              </p>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={listing.seller.avatar}
                    alt={listing.seller.name}
                  />
                  <AvatarFallback>
                    {listing.seller.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {listing.seller.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {listing.seller.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {listing.status === "Pending" && (
          <div className="flex gap-3 pt-4 border-t">
            <Button className="flex-1 bg-green-600 hover:bg-green-700 gap-2">
              <Check className="h-4 w-4" /> Approve Listing
            </Button>
            <Button variant="destructive" className="flex-1 gap-2">
              <X className="h-4 w-4" /> Reject Listing
            </Button>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
}
