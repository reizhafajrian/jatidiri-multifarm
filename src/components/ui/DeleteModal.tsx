"use client"

import { FC, useState } from "react"
import * as AlertDialog from "@radix-ui/react-alert-dialog"

import { Button } from "./Button"

interface IProps {
  title: string
  desc: string
  deleteHandler: () => any
}

export default function DeleteModal({ title, desc, deleteHandler }: IProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const deleteFunc = async () => {
    setLoading(true)
    await deleteHandler()
    setLoading(false)
    setIsOpen(false)
  }

  return (
    <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Trigger asChild>
        <Button variant="delete" size="xs" />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content className="animate-fade-in-out fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-md bg-white p-6 text-center shadow-lg">
          <AlertDialog.Title className="text-2xl font-semibold">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="text-base text-neutral-4">
            {desc}
          </AlertDialog.Description>
          <div className="flex gap-4">
            <AlertDialog.Cancel asChild>
              <Button className="w-full" disabled={loading}>
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <Button
              className="w-full"
              variant="outline"
              onClick={deleteFunc}
              isLoading={loading}
            >
              Delete
            </Button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
