"use client"

import { FC, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

import { categorySchema } from "@/lib/schemas"
import { ICategory } from "@/store/types"
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

const AddCategoryForm: FC<{ category: string }> = ({ category }) => {
  const [open, setOpen] = useState(false)
  const title = setTitle(category)
  const satuan = setSatuan(category)
  const { user, addCategory } = useStore()

  const methods = useForm<ICategory>({
    resolver: zodResolver(categorySchema),
  })

  const onSubmit: SubmitHandler<ICategory> = async (values) => {
    await addCategory(values)
    mutate(`/api/${category}/get`)
    methods.reset()
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Tambah {title}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Tambah {title}</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) =>
            onSubmit({ ...values, created_by: user?.id, category })
          }
        >
          <div className="mb-8 space-y-6">
            <InputText name="type" label={`Jenis ${title}`} />
            <InputText name="stock" label="Stock" type="number" />
            <InputText
              name="price"
              label={`Harga ${satuan}`}
              type="number"
              rupiah
            />
          </div>
          <div className="flex justify-end gap-3">
            <DialogClose asChild>
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

export default AddCategoryForm

const setSatuan = (category: string) =>
  category === "feed" ? "(per kg)" : "(per pcs)"

const setTitle = (category: string) =>
  category === "feed"
    ? "Pakan"
    : category === "vitamin"
    ? "Vitamin"
    : category === "vaccine"
    ? "Vaksin"
    : "Obat Cacing"
