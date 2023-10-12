import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import type { ReactNode } from "react";

export interface HeadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = "md",
  children,
  asChild,
  className,
}: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={clsx(
        "font-sans font-bold text-gray-950",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
          "text-3xl": size === "xl",
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
}
