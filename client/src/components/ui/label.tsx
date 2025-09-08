import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-cyan-400 uppercase tracking-wider",
        subtle: "text-gray-400",
        warning: "text-yellow-400",
        error: "text-red-400"
      },
      size: {
        default: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, variant, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants({ variant, size }),
      "group-hover:text-cyan-300 transition-colors duration-200",
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }