"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { mutate } from "swr"

import { hppSchema, hppType } from "@/lib/schemas/hpp"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form from "@/components/ui/form"
import InputText from "@/components/ui/input-text"

import { toast } from "../ui/toast"

interface IProps {
  data: hppType
}

export default function EditHppForm({ data }: IProps) {
  const [open, setOpen] = useState(false)
  const { editHpp, animal } = useStore()
  const { hpp_price, ...rest } = data

  const form = useForm<hppType>({
    resolver: zodResolver(hppSchema),
    values: {
      ...rest,
      hpp_price: hpp_price === "-" ? undefined : hpp_price,
      animal,
      status: "sold",
    },
  })

  const onSubmit = async (values: hppType) => {
    try {
      const res = await editHpp(values)
      toast({ type: "success", message: res.message })
      setOpen(false)
      mutate(`/api/hpp/get?animal_type=${animal}`)
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="edit" size="xs" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Data HPP</DialogTitle>
        <Form methods={form} onSubmit={onSubmit}>
          <div className="mb-8 space-y-5">
            <InputText name="eartag_code" label="" disabled />
            <div className="grid grid-cols-2 gap-5">
              <InputText
                name="hpp_price"
                label=""
                disabled
                type="number"
                rupiah
              />
              <InputText
                name="sell_price"
                label="Harga Jual"
                type="number"
                rupiah
              />
            </div>
            <InputText name="buyer" label="Nama Pembeli" />
            <InputText name="phone" label="No Tlp" />
            <InputText name="description" label="Keterangan" />
          </div>
          <div className="flex justify-end gap-3">
            <DialogClose>
              <Button
                type="button"
                variant="outline"
                className="w-36"
                disabled={form.formState.isSubmitting}
              >
                CANCEL
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="w-36"
              isLoading={form.formState.isSubmitting}
            >
              SAVE
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
