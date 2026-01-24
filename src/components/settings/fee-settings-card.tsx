"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Save, Percent } from "lucide-react";

export function FeeSettingsCard() {
  const [feePercentage, setFeePercentage] = useState<string>("2.5");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Transaction fee updated successfully");
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Fee</CardTitle>
        <CardDescription>
          Configure the percentage taken from each successful sale.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fee">Fee Percentage</Label>
          <div className="relative">
            <Input
              id="fee"
              type="number"
              step="0.1"
              min="0"
              max="100"
              value={feePercentage}
              onChange={(e) => setFeePercentage(e.target.value)}
              className="pl-9"
            />
            <Percent className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground">
            Current fee is set to {feePercentage}% per transaction.
          </p>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button onClick={handleSave} disabled={isSaving} className="ml-auto">
          {isSaving ? "Saving..." : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
