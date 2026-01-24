"use client";

import { useState } from "react";
import { Megaphone, Send, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function SendGlobalNotification() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "info",
  });

  const handleSend = async () => {
    if (!formData.title || !formData.description) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSending(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSending(false);
    setIsOpen(false);
    setFormData({ title: "", description: "", type: "info" });
    toast.success("Global notification sent successfully!");
  };

  return (
    <ModalWrapper
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Send Global Notification"
      description="This notification will be sent to all users on the platform."
      actionTrigger={
        <Button className="gap-2 gradient-button">
          <Megaphone className="h-4 w-4" />
          Send Global Notification
        </Button>
      }
    >
      <div className="p-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="type">Notification Type</Label>
          <Select
            value={formData.type}
            onValueChange={(value) => setFormData({ ...formData, type: value })}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="info">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-blue-500" />
                  <span>Info / Update</span>
                </div>
              </SelectItem>
              <SelectItem value="success">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Success / Announcement</span>
                </div>
              </SelectItem>
              <SelectItem value="warning">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span>Warning / Maintenance</span>
                </div>
              </SelectItem>
              <SelectItem value="error">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <span>Urgent / Critical</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Notification Title</Label>
          <Input
            id="title"
            placeholder="e.g., System Maintenance Scheduled"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Message Content</Label>
          <Textarea
            id="description"
            placeholder="Provide details about the update or maintenance..."
            className="min-h-30 resize-none"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="pt-4 flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setIsOpen(false)}
            disabled={isSending}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 gap-2 gradient-button"
            onClick={handleSend}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send to All Users"}
            {!isSending && <Send className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
}
