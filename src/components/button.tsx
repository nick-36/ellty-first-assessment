import { cn } from "@/lib/utils";
import * as React from "react";

const buttonBaseClasses = `
  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
`;

const variantClasses: Record<string, string> = {
  default: "bg-[#FFCE22] hover:bg-[#FFD84D]",
};

const sizeClasses: Record<string, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-8 rounded-md px-3 text-xs",
  lg: "h-10 rounded-md px-8",
  icon: "h-9 w-9",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClass = variantClasses[variant] || "";
    const sizeClass = sizeClasses[size] || "";

    return (
      <button
        className={cn(buttonBaseClasses, variantClass, sizeClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button };
