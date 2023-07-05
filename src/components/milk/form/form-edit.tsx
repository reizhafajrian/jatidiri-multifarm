"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { mutate } from "swr"

import { milkSchema, milkType } from "@/lib/schemas/milk"
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
import InputDate from "@/components/ui/input-date"
import InputText from "@/components/ui/input-text"
import { toast } from "@/components/ui/toast"

interface IProps {
  curr: milkType
}

export default function FormEditMilk({ curr }: IProps) {
  const [open, setOpen] = useState(false)
  const [editMilk, setMilkHistory] = useStore((s) => [
    s.editMilk,
    s.setMilkHistory,
  ])

  const form = useForm<milkType>({
    resolver: zodResolver(milkSchema),
    values: {
      _id: curr?._id,
      animal_id: curr?.animal_id?._id,
      eartag_code: curr?.animal_id?.eartag_code,
      history_milk: 0,
    },
  })

  const onSubmit = async (values: milkType) => {
    try {
      const res = await editMilk(values)
      toast({ type: "success", message: res.message })
      form.reset()
      setOpen(false)
      mutate("/api/milk/get")
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  // MILK HISTORY
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const milkHistoryHandler = async (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

    if (start && end) {
      const data = await setMilkHistory(start, end)
      form.setValue("history_milk", data)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="xs" variant="edit" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Data Susu</DialogTitle>
        </DialogHeader>

        <Form methods={form} onSubmit={onSubmit}>
          <div className="mb-8 space-y-5" tabIndex={0}>
            <InputText name="eartag_code" label="" disabled />
            <div>
              <h2 className="mb-3 text-base font-medium">Data Susu</h2>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                <InputDate name="milk_date" label="Tanggal" />
                <InputText
                  name="milk"
                  label="Berapa liter susu?"
                  type="number"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-base font-medium">Cek History Susu</h2>
              <div className="grid gap-x-5 gap-y-4 md:grid-cols-2">
                <InputDate
                  name="history_milk_date"
                  label="Tanggal"
                  selectRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={milkHistoryHandler}
                />
                <InputText
                  name="history_milk"
                  label="History Susu"
                  type="number"
                  disabled
                />
              </div>
            </div>
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
