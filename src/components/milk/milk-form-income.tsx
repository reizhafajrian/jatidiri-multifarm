"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { ColumnDef } from "@tanstack/react-table"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

import { incomeSchema } from "@/lib/schemas/milk"
import { formatRupiah } from "@/lib/utils"
import { IMilkInfo } from "@/store/slices/milkSlice"
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
import InputDate from "@/components/ui/input-date"
import InputText from "@/components/ui/input-text"
import Table from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IncomeForm() {
  const [open, setOpen] = useState(false)
  const { user, incomeHistory, addIncome, setIncomeHistory } = useStore()

  const columns: ColumnDef<any, any>[] = [
    { header: "Tanggal", accessorKey: "milk_date" },
    { header: "Susu (L)", accessorKey: "milk" },
    { header: "Harga perliter (Rp)", accessorKey: "price" },
    { header: "Total (Rp)", accessorKey: "total" },
    { header: "Pembeli", accessorKey: "buyer" },
  ]

  const methods = useForm<IMilkInfo>({
    resolver: zodResolver(incomeSchema),
    values: {
      history_income_total: formatRupiah(incomeHistory),
    },
  })

  const onSubmit: SubmitHandler<IMilkInfo> = async (values) => {
    await addIncome(values)
    methods.reset()
    mutate("/api/milk/income/get")
    setOpen(false)
  }

  // INCOME HISTORY
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const historyHandler = async (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    setIncomeHistory(start, end)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="edit" size="xs" />
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Tambah Pendapatan dan Cek History</DialogTitle>

        <Form methods={methods} onSubmit={onSubmit}>
          <div className="mb-8 space-y-5" tabIndex={0}>
            <Tabs defaultValue="pendapatan">
              <TabsList>
                <TabsTrigger value="pendapatan">Pendapatan</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="pendapatan" className="space-y-3">
                <h2 className="mb-3 text-base font-medium">Pendapatan Susu</h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                  <InputDate name="milk_date" label="Tanggal" />
                  <InputText
                    name="milk"
                    label="Berapa liter susu?"
                    type="number"
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                  <InputText
                    name="price"
                    label="Harga Terjual/Liter"
                    type="number"
                    rupiah
                  />
                  <InputText name="total" label="Total" type="number" rupiah />
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                  <InputText name="buyer" label="Perusahaan" />
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-3">
                <h2 className="mb-3 text-base font-medium">
                  History Pendapatan
                </h2>
                <InputDate
                  name="history_income_date"
                  label="Tanggal"
                  selectRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={historyHandler}
                />
                <div className="max-h-[20rem] overflow-hidden">
                  <Table
                    isLoading={false}
                    data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                    columns={columns}
                    fixedCol={0}
                    pageSize={4}
                  />
                </div>
              </TabsContent>
            </Tabs>
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
