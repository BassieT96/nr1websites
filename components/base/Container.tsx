import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const sizeClasses = {
  content: "container-content",
  reading: "container-reading",
  wide: "container-wide",
  full: "max-w-none",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof sizeClasses;
};

export function Container({
  className,
  size = "content",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 lg:px-8", sizeClasses[size], className)}
      {...props}
    />
  );
}
