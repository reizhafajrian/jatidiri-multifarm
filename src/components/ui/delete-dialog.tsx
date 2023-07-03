"use client"

import { useState } from "react"
import { DialogClose } from "@radix-ui/react-dialog"
import { KeyedMutator } from "swr"

import { Button } from "./button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import { toast } from "./toast"

interface IProps {
  title: string
  desc: string
  handler: any
  mutate?: KeyedMutator<any>
}

export default function DeleteDialog({ title, desc, handler, mutate }: IProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const deleteHandler = async () => {
    try {
      setLoading(true)
      const res = await handler()
      toast({ type: "success", message: res.message })
      setLoading(false)
      mutate && mutate()
    } catch (err: any) {
      setLoading(false)
      toast({ type: "error", message: err.message })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="delete" size="xs" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center text-base text-neutral-4">
            {desc}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-4">
          <DialogClose asChild>
            <Button className="w-full" disabled={loading}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="w-full"
            variant="outline"
            onClick={deleteHandler}
            isLoading={loading}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
