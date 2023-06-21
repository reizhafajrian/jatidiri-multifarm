import { FC } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

import { cn } from "@/lib/utils"

const DialogRoot = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogOverlay = DialogPrimitive.Overlay

const DialogContent: FC<DialogPrimitive.DialogContentProps> = ({
  className,
  ...props
}) => {
  return (
    <DialogPortal>
      <DialogOverlay className="fixed inset-0 z-20 bg-black/50" />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50",
          "w-[95vw] max-w-lg rounded-md bg-white p-4 shadow-lg md:w-full",
          "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
          className
        )}
        {...props}
      />
    </DialogPortal>
  )
}

const DialogTitle: FC<DialogPrimitive.DialogTitleProps> = ({
  className,
  ...props
}) => {
  return (
    <DialogPrimitive.Title
      className={cn("mb-6 text-xl font-semibold", className)}
      {...props}
    />
  )
}

const DialogDescription = DialogPrimitive.Description

const DialogClose = DialogPrimitive.Close

export {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
}
