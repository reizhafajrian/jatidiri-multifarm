"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

import { categorySchema, categoryType } from "@/lib/schemas/category"
import { categoryTitle } from "@/lib/utils"
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
import { toast } from "@/components/ui/toast"

interface IProps {
  category: string
  data: categoryType
}

export default function EditCategoryForm({ category, data }: IProps) {
  const [open, setOpen] = useState(false)
  const { editCategory } = useStore()
  const title = categoryTitle(category)

  const form = useForm<categoryType>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      category,
      _id: data._id,
      type: data.name,
      stock: data.stocks,
      price: data.price,
    },
  })

  const onSubmit = async (values: categoryType) => {
    try {
      const res = await editCategory(values)
      toast({ type: "success", message: res.message })
      mutate(`/api/${category}/get`)
      form.reset()
      setOpen(false)
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
        <DialogTitle>Edit {title}</DialogTitle>

        <Form
          methods={form}
          onSubmit={(values) =>
            onSubmit({ ...values, category, _id: data._id })
          }
          className="mt-5 space-y-4"
        >
          <div className="mb-8 space-y-6">
            <InputText name="type" label={`Jenis ${title}`} />
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
