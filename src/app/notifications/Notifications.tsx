import PageLayout from "@/components/common/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, CheckCircle2, Info, AlertTriangle, Clock, Trash2, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import PageHeader from "@/components/ui/custom/page-header";
import { SendGlobalNotification } from "./SendGlobalNotification";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const notifications = [
  {
    id: 1,
    title: "New Trainer Registration",
    description: "A new trainer named 'Sarah Connor' has registered and is waiting for approval.",
    time: "2 minutes ago",
    type: "info",
    isRead: false,
  },
  {
    id: 2,
    title: "Subscription Renewal",
    description: "User 'John Doe' has successfully renewed their premium subscription.",
    time: "1 hour ago",
    type: "success",
    isRead: false,
  },
  {
    id: 3,
    title: "System Alert",
    description: "The database backup process was completed with minor warnings.",
    time: "5 hours ago",
    type: "warning",
    isRead: true,
  },
  {
    id: 4,
    title: "Support Ticket Update",
    description: "Ticket #1234 has been updated by the support team.",
    time: "Yesterday",
    type: "info",
    isRead: true,
  },
  {
    id: 5,
    title: "Security Warning",
    description: "Multiple failed login attempts detected from a new IP address.",
    time: "2 days ago",
    type: "error",
    isRead: true,
  },
];

const sentNotifications = [
  {
    id: 1,
    title: "System Maintenance",
    description: "Scheduled maintenance on Sunday from 2 AM to 4 AM UTC.",
    time: "2 days ago",
    type: "warning",
    target: "All Users",
  },
  {
    id: 2,
    title: "New Feature: Auction Sniping Protection",
    description: "We've added protection against last-second bids to ensure fair play.",
    time: "5 days ago",
    type: "success",
    target: "All Users",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "success":
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    case "error":
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    default:
      return <Info className="h-5 w-5 text-blue-500" />;
  }
};

const Notifications = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <PageHeader title="Notifications" description="Manage and view your notifications." />
          <div className="flex items-center gap-2">
            <SendGlobalNotification />
            <div className="h-8 w-px bg-border mx-2 hidden md:block" />
            <Button variant="outline" size="sm" className="gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Mark all as read
            </Button>
            <Button variant="destructive" size="sm" className="gap-2">
              <Trash2 className="h-4 w-4" />
              Clear all
            </Button>
          </div>
        </div>

        <Tabs defaultValue="inbox" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="inbox" className="gap-2">
              <Bell className="h-4 w-4" />
              Admin Inbox
              {notifications.filter(n => !n.isRead).length > 0 && (
                <Badge variant="secondary" className="ml-1 px-1.5 py-0 h-5">
                  {notifications.filter(n => !n.isRead).length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="sent" className="gap-2">
              <Megaphone className="h-4 w-4" />
              Global Sent
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inbox" className="space-y-3">
            {notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={cn(
                  "border-none shadow-sm transition-all duration-200 hover:shadow-md",
                  !notification.isRead ? "bg-primary/5 ring-1 ring-primary/10" : "bg-background/50"
                )}
              >
                <CardContent className="p-4 flex gap-4">
                  <div className={cn(
                    "p-2 rounded-full shrink-0 h-fit",
                    !notification.isRead ? "bg-background shadow-sm" : "bg-muted/50"
                  )}>
                    {getIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className={cn(
                          "font-semibold text-sm md:text-base",
                          !notification.isRead ? "text-foreground" : "text-muted-foreground"
                        )}>
                          {notification.title}
                        </h3>
                        {!notification.isRead && (
                          <Badge variant="default" className="h-2 w-2 rounded-full p-0 bg-primary" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                        <Clock className="h-3 w-3" />
                        {notification.time}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {notification.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {notifications.length === 0 && (
              <EmptyState message="No notifications yet" />
            )}
          </TabsContent>

          <TabsContent value="sent" className="space-y-3">
            {sentNotifications.map((notification) => (
              <Card 
                key={notification.id} 
                className="border-none shadow-sm bg-background/50 transition-all duration-200 hover:shadow-md"
              >
                <CardContent className="p-4 flex gap-4">
                  <div className="p-2 rounded-full shrink-0 h-fit bg-muted/50">
                    {getIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-sm md:text-base text-foreground">
                          {notification.title}
                        </h3>
                        <Badge variant="outline" className="text-[10px] h-4 uppercase">
                          {notification.target}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                        <Clock className="h-3 w-3" />
                        {notification.time}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {notification.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            {sentNotifications.length === 0 && (
              <EmptyState message="No sent notifications yet" />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

const EmptyState = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
    <div className="p-6 bg-muted rounded-full">
      <Bell className="h-12 w-12 text-muted-foreground" />
    </div>
    <div className="space-y-1">
      <h3 className="text-xl font-semibold">{message}</h3>
      <p className="text-muted-foreground max-w-xs">
        When there are notifications, they will appear here.
      </p>
    </div>
  </div>
);

export default Notifications;
