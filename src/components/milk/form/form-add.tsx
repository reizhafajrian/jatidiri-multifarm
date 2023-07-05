"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { milkSchema, milkType } from "@/lib/schemas/milk"
import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form from "@/components/ui/form"
import { Icons } from "@/components/ui/Icons"
import InputDate from "@/components/ui/input-date"
import InputSelect from "@/components/ui/input-select"
import InputText from "@/components/ui/input-text"
import { toast } from "@/components/ui/toast"

export default function FormAddMilk() {
  const [open, setOpen] = useState(false)
  const addMilk = useStore((s) => s.addMilk)

  const { data: milkData, mutate } = useDataList({ url: "/api/milk/get" })
  const { data } = useDataList({
    url: "/api/cow/get",
    queries: ["gender=false"],
  })

  const ids = milkData?.map((item: any) => item.animal_id?._id)
  const list = data?.filter((item: any) => !ids?.includes(item._id))

  const eartagOptions =
    list?.map((item: any) => ({
      name: item.eartag_code,
      value: item._id,
    })) ?? []

  const form = useForm<milkType>({ resolver: zodResolver(milkSchema) })

  const onSubmit = async (values: milkType) => {
    try {
      const res = await addMilk(values)
      toast({ type: "success", message: res.message })
      form.reset()
      setOpen(false)
      mutate()
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="capitalize">
          <Icons.pen className="h-4 w-4 md:hidden" />
          <span className="hidden md:block">tambah data susu</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Data Susu</DialogTitle>
        </DialogHeader>
        <Form methods={form} onSubmit={onSubmit}>
          <div className="mb-8 space-y-5" tabIndex={0}>
            <InputSelect
              name="eartag_code"
              label="No Eartag"
              options={eartagOptions}
            />
            <InputDate name="milk_date" label="Tanggal" />
            <InputText name="milk" label="Berapa liter susu?" type="number" />
          </div>
          <div className="flex justify-end gap-3">
            <DialogClose asChild>
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
