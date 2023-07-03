"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

import { categorySchema, categoryType } from "@/lib/schemas/category"
import { ICategory } from "@/store/slices/categorySlice"
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
  category: string
}

export default function AddCategoryForm({ category }: IProps) {
  const [open, setOpen] = useState(false)
  const { addCategory } = useStore()

  const title = setTitle(category)
  const satuan = setSatuan(category)

  const methods = useForm<categoryType>({
    resolver: zodResolver(categorySchema),
  })

  const onSubmit: SubmitHandler<categoryType> = async (values) => {
    await addCategory(values)
    mutate(`/api/${category}/get`)
    methods.reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Tambah {title}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Tambah {title}</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) => onSubmit({ ...values, category })}
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
    </Dialog>
  )
}

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
