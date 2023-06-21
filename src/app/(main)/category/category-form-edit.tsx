"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

import { categorySchema } from "@/lib/schemas"
import { ICategory } from "@/store/slices/categorySlice"
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
  category: string
  data: any
}

export default function EditCategoryForm({ category, data }: IProps) {
  const [open, setOpen] = useState(false)
  const { editCategory } = useStore()

  const methods = useForm<ICategory>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      type: data.name,
      stock: data.stocks,
      price: data.price,
    },
  })

  const onSubmit: SubmitHandler<ICategory> = async (values) => {
    await editCategory(values)
    mutate(`/api/${category}/get`)
    methods.reset()
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="edit" size="xs" />
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Edit {setTitle(category)}</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) =>
            onSubmit({ ...values, category, _id: data._id })
          }
          className="mt-5 space-y-4"
        >
          <div className="mb-8 space-y-6">
            <InputText name="type" label={`Jenis ${setTitle(category)}`} />
            <InputText name="stock" label="Stock" type="number" />
            <InputText
              name="price"
              label={`Harga ${category === "feed" ? "(per kg)" : "(per pcs)"}`}
              type="number"
              rupiah
            />
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

const setTitle = (category: string) =>
  category === "feed"
    ? "Pakan"
    : category === "vitamin"
    ? "Vitamin"
    : category === "vaccine"
    ? "Vaksin"
    : "Obat Cacing"
