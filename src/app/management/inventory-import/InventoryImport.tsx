
import PageLayout from "@/components/common/page-layout";
import PageHeader from "@/components/ui/custom/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Scan, 
  PlusCircle, 
  Upload, 
  User, 
  CheckCircle2, 
  Info,
  Camera,
  History,
  FolderTree,
  Folder,
  Check,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { AddCategoryModal } from "@/components/management/categories/add-category-modal";
import type { Category } from "@/components/management/categories/category-columns";

export default function InventoryImport() {
  const [selectedUser, setSelectedUser] = useState<{ name: string; email: string } | null>({
    name: "Marc Admin",
    email: "marc@example.com"
  });
  const [searchQuery, setSearchQuery] = useState("marc@example.com");
  const [categories] = useState<Category[]>([
    { id: "1", name: "General Inventory", slug: "general", description: "Default folder", count: 120, status: "active" },
    { id: "2", name: "Pokemon Collection", slug: "pokemon", description: "Pokemon cards", count: 45, status: "active" },
  ]);
  const [activeCategoryId, setActiveCategoryId] = useState("1");
  
  // Edit & Delete States
  const [editingCategory, setEditingCategory] = useState<{ id: string; name: string } | null>(null);
  const [deletingCategoryId, setDeletingCategoryId] = useState<string | null>(null);

  const handleUserSearch = () => {
    // Mock user search
    if (searchQuery.toLowerCase().includes("marc") || searchQuery.toLowerCase().includes("test")) {
      setSelectedUser({ name: "Marc Admin", email: "marc@example.com" });
      toast.success("User selected successfully");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Inventory Import Service"
        description="Admin tool to scan and import cards directly into user accounts."
      />

      <div className="grid gap-6">
        {/* Step 1: User Selection */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Step 1: Select User Account
            </CardTitle>
            <CardDescription>
              Search for the user who sent their cards for the scan service.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search User</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by email or name..."
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleUserSearch()}
                    />
                  </div>
                  <Button onClick={handleUserSearch} className="bg-primary hover:bg-primary/90">
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {selectedUser && (
              <div className="mt-4 p-3 rounded-lg border bg-background flex items-center justify-between animate-in fade-in slide-in-from-top-1">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{selectedUser.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4" />
                  Account Linked
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 2: Manage Categories */}
        {selectedUser && (
          <Card className="border-primary/20 animate-in fade-in slide-in-from-top-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    <FolderTree className="h-5 w-5 text-primary" />
                    Step 2: Manage & Select Category
                  </CardTitle>
                  <CardDescription>
                    Select a target folder for this import session or create a new one.
                  </CardDescription>
                </div>
                <AddCategoryModal />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={cn(
                      "group relative cursor-pointer rounded-lg border p-4 transition-all hover:border-primary/50 hover:bg-primary/5",
                      activeCategoryId === cat.id
                        ? "border-primary bg-primary/10 ring-1 ring-primary"
                        : "bg-background"
                    )}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Folder className={cn("h-5 w-5", activeCategoryId === cat.id ? "text-primary fill-primary/20" : "text-muted-foreground")} />
                      {activeCategoryId === cat.id && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex justify-between items-start">
                        <div className="flex-1 overflow-hidden">
                            <p className="font-medium truncate" title={cat.name}>{cat.name}</p>
                            <p className="text-xs text-muted-foreground">{cat.count} cards</p>
                        </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Edit Category Dialog */}
              <Dialog open={!!editingCategory} onOpenChange={(open) => !open && setEditingCategory(null)}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Rename Category</DialogTitle>
                    <DialogDescription>
                      Update the name of this category folder.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Input
                      value={editingCategory?.name || ""}
                      onChange={(e) => setEditingCategory(prev => prev ? { ...prev, name: e.target.value } : null)}
                      placeholder="Category name"
                    />
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setEditingCategory(null)}>Cancel</Button>
                    <Button>Update Name</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Delete Confirmation Dialog */}
              <AlertDialog open={!!deletingCategoryId} onOpenChange={(open) => !open && setDeletingCategoryId(null)}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete this category and remove it from the list. 
                      Cards inside may need to be reassigned.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive hover:bg-destructive/90">
                      Delete Category
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Import Tools */}
        <div className={cn("transition-all duration-300", !selectedUser && "opacity-50 pointer-events-none grayscale")}>
          <Tabs defaultValue="scan" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-12 bg-muted/50 p-1">
              <TabsTrigger value="scan" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Scan className="mr-2 h-4 w-4" />
                Scan Card
              </TabsTrigger>
              <TabsTrigger value="manual" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <PlusCircle className="mr-2 h-4 w-4" />
                Manual Search
              </TabsTrigger>
              <TabsTrigger value="bulk" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Upload className="mr-2 h-4 w-4" />
                Bulk Upload
              </TabsTrigger>
            </TabsList>

            {/* Scan Tab */}
            <TabsContent value="scan" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed rounded-xl bg-muted/30">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Camera className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Position card in the frame</h3>
                    <p className="text-sm text-muted-foreground text-center max-w-sm mb-6">
                      Make sure the card is well-lit and in focus. Avoid glare and keep the card centered for the best recognition.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                      <Scan className="mr-2 h-5 w-5" />
                      Start Scanning
                    </Button>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border bg-muted/10 flex gap-3">
                      <Info className="h-5 w-5 text-primary shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold mb-1">Scanning Tips</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Ensure good lighting for accurate detection.</li>
                          <li>Keep the card flat and in focus.</li>
                          <li>Clean the card surface for best results.</li>
                          <li>OCR works best with English cards.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border bg-muted/10 flex gap-3">
                      <History className="h-5 w-5 text-primary shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold mb-1">Recent Scans</p>
                        <p className="text-muted-foreground italic">No cards scanned in this session yet.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Manual Tab */}
            <TabsContent value="manual" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Manual Card Search</CardTitle>
                  <CardDescription>Enter card details to manually add to user's inventory.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search for cards (e.g. Charizard VMAX)..." className="pl-9" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Edition</label>
                      <Input placeholder="Select edition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Rarity</label>
                      <Input placeholder="Select rarity" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Condition</label>
                      <Input placeholder="Select condition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Quantity</label>
                      <Input type="number" defaultValue={1} />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1" onClick={() => {}}>
                      Clear Form
                    </Button>
                    <Button className="flex-2 bg-primary hover:bg-primary/90">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Card
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bulk Tab */}
            <TabsContent value="bulk" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Bulk Import from URL</CardTitle>
                  <CardDescription>Paste collection links from Cardmarket, Pokemon TCG, or Limitless TCG.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div className="w-full max-w-md space-y-4 text-center">
                      <Input placeholder="https://www.cardmarket.com/en/Pokemon/Users/..." />
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Upload className="mr-2 h-4 w-4" />
                        Import from Link
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border bg-muted/10 flex gap-3 max-w-md mx-auto">
                    <Info className="h-5 w-5 text-primary shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold mb-1">Bulk Import Guide</p>
                      <p className="text-muted-foreground">
                        Links should point to a public collection or wantlist. Supports up to 10,000 cards per import.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
}
