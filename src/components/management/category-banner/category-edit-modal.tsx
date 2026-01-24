"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Pencil, Image as ImageIcon } from "lucide-react";
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
import type { Category } from "./category-columns";

const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  viewOrder: z.string().optional(),
  categoryImage: z.any().optional(),
  bannerImage: z.any().optional(),
});

type CategoryFormValues = z.infer<typeof categorySchema>;

interface CategoryEditModalProps {
  category: Category;
}

export function CategoryEditModal({ category }: CategoryEditModalProps) {
  const [open, setOpen] = useState(false);
  const [categoryImagePreview, setCategoryImagePreview] = useState<string | null>(category.image);
  const [bannerImagePreview, setBannerImagePreview] = useState<string | null>(category.bannerImage);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category.name,
      viewOrder: category.viewOrder || "1",
    },
  });

  const onSubmit = (data: CategoryFormValues) => {
    console.log(data);
    setOpen(false);
  };

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title="Edit Category"
      description="Update category details, images and display order."
      actionTrigger={
        <Button
          variant="outline"
          size="icon-sm"
        >
          <Pencil className="text-primary" />
        </Button>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6">
              {/* Basic Details */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter category name" {...field} />
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
                  onClick={() => document.getElementById(`cat-img-edit-${category.id}`)?.click()}
                >
                  {categoryImagePreview ? (
                    <img src={categoryImagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground text-center">Update category image</p>
                    </>
                  )}
                  <input
                    id={`cat-img-edit-${category.id}`}
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setCategoryImagePreview(URL.createObjectURL(file));
                    }}
                  />
                </div>
              </div>

              {/* Banner & Order Section */}
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
                    onClick={() => document.getElementById(`ban-img-edit-${category.id}`)?.click()}
                  >
                    {bannerImagePreview ? (
                      <img src={bannerImagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <>
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground text-center">Update banner image</p>
                      </>
                    )}
                    <input
                      id={`ban-img-edit-${category.id}`}
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
              Update Category
            </Button>
          </div>
        </form>
      </Form>
    </ModalWrapper>
  );
}