"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  viewOrder: z.string().optional(),
  categoryImage: z.any().optional(),
  bannerImage: z.any().optional(),
});

type CategoryFormValues = z.infer<typeof categorySchema>;

export function CategoryAddModal() {
  const [open, setOpen] = useState(false);
  const [categoryImagePreview, setCategoryImagePreview] = useState<string | null>(null);
  const [bannerImagePreview, setBannerImagePreview] = useState<string | null>(null);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      viewOrder: "1",
    },
  });

  const onSubmit = (data: CategoryFormValues) => {
    console.log(data);
    setOpen(false);
    form.reset();
    setCategoryImagePreview(null);
    setBannerImagePreview(null);
  };

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title="Add New Category"
      description="Create a new category with associated banner and display order."
      actionTrigger={
        <Button className="rounded-full">
          <Plus />
          Add Category
        </Button>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <ScrollArea className="max-h-[75vh] pr-4">
            <div className="space-y-6">
              {/* Basic Details */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Electronics, Fashion..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category Image */}
              <div className="space-y-2">
                <FormLabel>Category Image</FormLabel>
                <div
                  className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2 hover:bg-accent/50 cursor-pointer transition-colors relative h-32 overflow-hidden"
                  onClick={() => document.getElementById("category-image")?.click()}
                >
                  {categoryImagePreview ? (
                    <img src={categoryImagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground text-center">Click to upload category image</p>
                    </>
                  )}
                  <input
                    id="category-image"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setCategoryImagePreview(URL.createObjectURL(file));
                    }}
                  />
                </div>
              </div>

              {/* Banner Section (Grouped with View Order) */}
              <div className="pt-4 border-t space-y-4">
                <FormField
                  control={form.control}
                  name="viewOrder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Display Order (Banner)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select order" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>Order {num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <FormLabel>Banner Image</FormLabel>
                  <div
                    className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2 hover:bg-accent/50 cursor-pointer transition-colors relative h-32 overflow-hidden"
                    onClick={() => document.getElementById("banner-image")?.click()}
                  >
                    {bannerImagePreview ? (
                      <img src={bannerImagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <>
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground text-center">Click to upload banner image</p>
                      </>
                    )}
                    <input
                      id="banner-image"
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setBannerImagePreview(URL.createObjectURL(file));
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Save Category
            </Button>
          </div>
        </form>
      </Form>
    </ModalWrapper>
  );
}