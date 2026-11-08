import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const v = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors h-11 px-6", {
  variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", outline: "border bg-card hover:bg-muted" } },
  defaultVariants: { variant: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof v> { asChild?: boolean }
export const Button = ({ className, variant, asChild, ...p }: ButtonProps) => {
  const C = asChild ? Slot : "button"; return <C className={cn(v({ variant }), className)} {...p} />;
};
