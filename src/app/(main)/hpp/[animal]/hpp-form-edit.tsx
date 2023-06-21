"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { hppSchema } from "@/lib/schemas"
import { IEditHpp } from "@/store/slices/hppSlice"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import Form from "@/components/ui/Form"
import InputText from "@/components/ui/InputText"

interface IProps {
  data: any
}

export default function EditHppForm({
  data: { _id, eartag_code, hpp_price },
}: IProps) {
  const [open, setOpen] = useState(false)
  const {
    editAnimal,
    animal: { name: animal },
  } = useStore()

  const methods = useForm<IEditHpp>({
    resolver: zodResolver(hppSchema),
    values: {
      _id,
      eartag_code,
      hpp_price: hpp_price ?? 0,
    },
  })

  const onSubmit: SubmitHandler<IEditHpp> = async ({
    sell_price,
    description,
  }) => {
    await editAnimal({ _id, sell_price, description, animal: animal })
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
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
    </DialogRoot>
  )
}
