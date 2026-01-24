"use client";

import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export function BackButton({ label = "Back", className }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      onClick={() => navigate(-1)}
      className={cn("flex items-center gap-2", className)}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );
}