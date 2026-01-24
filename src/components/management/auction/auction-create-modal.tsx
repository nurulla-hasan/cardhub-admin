"use client";

import { useState } from "react";
import { Plus, CalendarIcon, Clock, ImagePlus, X } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/custom/modal-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const auctionSchema = z.object({
  itemName: z.string().min(1, "Item name is required").max(100),
  category: z.string().min(1, "Category is required"),
  reserveBid: z.string().min(1, "Reserve bid is required"),
  incrementValue: z.string().min(1, "Increment value is required"),
  startingDate: z.date().refine((val) => val instanceof Date && !isNaN(val.getTime()), {
    message: "Starting date is required",
  }),
  startingTime: z.date().refine((val) => val instanceof Date && !isNaN(val.getTime()), {
    message: "Starting time is required",
  }),
  description: z.string().min(1, "Description is required"),
  financing: z.string().min(1, "Financing is required"),
  months: z.string().optional(),
  itemImages: z.array(z.string()).min(1, "At least one image is required"),
});

type AuctionFormValues = z.infer<typeof auctionSchema>;

export function AuctionCreateModal() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<AuctionFormValues>({
    resolver: zodResolver(auctionSchema),
    defaultValues: {
      itemName: "",
      category: "",
      reserveBid: "",
      incrementValue: "",
      description: "",
      financing: "Available",
      months: "12 Months",
      itemImages: [],
    },
  });

  function handleDateSelect(date: Date | undefined) {
    if (date) {
      form.setValue("startingDate", date);
    }
  }

  function handleTimeChange(type: "hour" | "minute" | "ampm", value: string) {
    const currentDate = form.getValues("startingTime") || new Date();
    const newDate = new Date(currentDate);

    if (type === "hour") {
      const hour = parseInt(value, 10);
      newDate.setHours(newDate.getHours() >= 12 ? (hour % 12) + 12 : hour % 12);
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value, 10));
    } else if (type === "ampm") {
      const hours = newDate.getHours();
      if (value === "AM" && hours >= 12) {
        newDate.setHours(hours - 12);
      } else if (value === "PM" && hours < 12) {
        newDate.setHours(hours + 12);
      }
    }

    form.setValue("startingTime", newDate);
  }

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    form.setValue("itemImages", newImages);
  };

  const onSubmit = async (values: AuctionFormValues) => {
    setIsSubmitting(true);
    try {
      // Combine startingDate and startingTime if needed for API
      const combinedDateTime = new Date(values.startingDate);
      combinedDateTime.setHours(values.startingTime.getHours());
      combinedDateTime.setMinutes(values.startingTime.getMinutes());
      
      console.log("Auction Data:", { ...values, combinedDateTime });
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setOpen(false);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalWrapper
      open={open}
      onOpenChange={setOpen}
      title="Create New Auction"
      description="Fill in the details below to list a new item for auction."
      actionTrigger={
        <Button className="rounded-full">
          <Plus />
          Create Auction
        </Button>
      }
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <ScrollArea className="max-h-[70vh]">
            <div className="px-6 py-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="itemName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter item name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Electronics">Electronics</SelectItem>
                          <SelectItem value="Vehicles">Vehicles</SelectItem>
                          <SelectItem value="Real Estate">Real Estate</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="reserveBid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reserve Bid</FormLabel>
                      <FormControl>
                        <Input placeholder="0.00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="incrementValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Increment Value</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startingDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Starting Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={handleDateSelect}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startingTime"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Starting Time</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "hh:mm aa")
                              ) : (
                                <span>Pick a time</span>
                              )}
                              <Clock className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <div className="sm:flex">
                            <div className="flex flex-col sm:flex-row sm:h-75 divide-y sm:divide-y-0 sm:divide-x">
                              <ScrollArea className="w-64 sm:w-auto">
                                <div className="flex sm:flex-col p-2">
                                  {Array.from({ length: 12 }, (_, i) => i + 1)
                                    .reverse()
                                    .map((hour) => (
                                      <Button
                                        key={hour}
                                        size="icon"
                                        variant={
                                          field.value &&
                                          field.value.getHours() % 12 === hour % 12
                                            ? "default"
                                            : "ghost"
                                        }
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() =>
                                          handleTimeChange("hour", hour.toString())
                                        }
                                      >
                                        {hour}
                                      </Button>
                                    ))}
                                </div>
                                <ScrollBar orientation="horizontal" className="sm:hidden" />
                              </ScrollArea>
                              <ScrollArea className="w-64 sm:w-auto">
                                <div className="flex sm:flex-col p-2">
                                  {Array.from({ length: 12 }, (_, i) => i * 5).map(
                                    (minute) => (
                                      <Button
                                        key={minute}
                                        size="icon"
                                        variant={
                                          field.value &&
                                          field.value.getMinutes() === minute
                                            ? "default"
                                            : "ghost"
                                        }
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() =>
                                          handleTimeChange("minute", minute.toString())
                                        }
                                      >
                                        {minute.toString().padStart(2, "0")}
                                      </Button>
                                    )
                                  )}
                                </div>
                                <ScrollBar orientation="horizontal" className="sm:hidden" />
                              </ScrollArea>
                              <ScrollArea className="">
                                <div className="flex sm:flex-col p-2">
                                  {["AM", "PM"].map((ampm) => (
                                    <Button
                                      key={ampm}
                                      size="icon"
                                      variant={
                                        field.value &&
                                        ((ampm === "AM" &&
                                          field.value.getHours() < 12) ||
                                          (ampm === "PM" &&
                                            field.value.getHours() >= 12))
                                          ? "default"
                                          : "ghost"
                                      }
                                      className="sm:w-full shrink-0 aspect-square"
                                      onClick={() => handleTimeChange("ampm", ampm)}
                                    >
                                      {ampm}
                                    </Button>
                                  ))}
                                </div>
                              </ScrollArea>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Enter item description" 
                        className="min-h-25" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="financing"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Financing</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Available" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Available">Available</SelectItem>
                          <SelectItem value="Not available">Not available</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="months"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Months</FormLabel>
                      <FormControl>
                        <Input placeholder="12 Months" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-3">
                <FormLabel>Upload Image</FormLabel>
                <div className="grid grid-cols-4 gap-3">
                  {images.map((img, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden border">
                      <img src={img} alt="preview" className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-white/80 rounded-full p-1 hover:bg-white"
                      >
                        <X className="h-3 w-3 text-red-500" />
                      </button>
                    </div>
                  ))}
                  <div className="border-2 border-dashed border-amber-200 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-amber-50 cursor-pointer transition-colors aspect-square">
                    <ImagePlus className="h-5 w-5 text-amber-500" />
                    <span className="text-[10px] text-amber-500 font-bold italic uppercase">Add image</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="p-6 border-t flex justify-end gap-3">
            <Button
              type="button"
              variant="destructive"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              loading={isSubmitting}
              loadingText="Publishing..."
            >
              Publish Auction
            </Button>
          </div>
        </form>
      </Form>
    </ModalWrapper>
  );
}
