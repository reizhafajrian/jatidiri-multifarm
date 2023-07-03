"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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

interface IProps {
  data: hppType
}

export default function EditHppForm({
  data: { _id, eartag_code, hpp_price },
}: IProps) {
  const [open, setOpen] = useState(false)
  const { editAdultAnimal: editAnimal, editHpp, animal } = useStore()

  const methods = useForm<hppType>({
    resolver: zodResolver(hppSchema),
    values: {
      _id,
      eartag_code,
      hpp_price: hpp_price ?? 0,
    },
  })

  const onSubmit = async (values: hppType) => {
    // await editAnimal(values)
    await editHpp(values, animal)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="edit" size="xs" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Data HPP</DialogTitle>
        <Form methods={methods} onSubmit={onSubmit}>
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
            <InputText name="phoneNumber" label="No Tlp" />
            <InputText name="description" label="Keterangan" />
          </div>
          <div className="flex justify-end gap-3">
            <DialogClose>
              <Button
                type="button"
                variant="outline"
                className="w-36"
                disabled={methods.formState.isSubmitting}
              >
                CANCEL
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="w-36"
              isLoading={methods.formState.isSubmitting}
            >
              SAVE
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
