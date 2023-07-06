"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import SimpleBar from "simplebar-react"
import { mutate } from "swr"

import { incomeSchema, incomeType } from "@/lib/schemas/milk"
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
import { toast } from "@/components/ui/toast"

import { milkHistoryColumns } from "../column"

export default function FormIncome() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [addIncome, incomeHistory, setIncomeHistory] = useStore((s) => [
    s.addIncome,
    s.incomeHistory,
    s.setIncomeHistory,
  ])

  const form = useForm<incomeType>({
    resolver: zodResolver(incomeSchema),
  })

  const formHistory = useForm({})

  const onSubmit = async (values: incomeType) => {
    try {
      const res = await addIncome(values)
      toast({ type: "success", message: res.message })
      form.reset()
      mutate("/api/milk/income/get")
      setOpen(false)
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  // INCOME HISTORY
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const historyHandler = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    useStore.setState((s) => ({ ...s, incomeHistory: undefined }))
  }

  const onSubmitHistory = async () => {
    if (startDate && endDate) {
      setLoading(true)
      await setIncomeHistory(startDate, endDate)
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="edit" size="xs" />
      </DialogTrigger>

      <DialogContent className="max-w-[600px]">
        <DialogTitle>Tambah Pendapatan dan Cek History</DialogTitle>

        <div className="mb-8 space-y-5" tabIndex={0}>
          <Tabs defaultValue="pendapatan">
            <TabsList>
              <TabsTrigger value="pendapatan">Pendapatan</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="pendapatan">
              <Form methods={form} onSubmit={onSubmit}>
                <div className="space-y-3">
                  <h2 className="mb-3 text-base font-medium">
                    Pendapatan Susu
                  </h2>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                    <InputDate name="income_created_at" label="Tanggal" />
                    <InputText
                      name="milk_total"
                      label="Berapa liter susu?"
                      type="number"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                    <InputText
                      name="milk_price"
                      label="Harga Terjual/Liter"
                      type="number"
                      rupiah
                    />
                    <InputText
                      name="income_total"
                      label="Total"
                      type="number"
                      rupiah
                    />
                  </div>

                  <InputText name="buyer" label="Perusahaan" />

                  <div className="flex justify-end gap-3">
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-36"
                        disabled={form.formState.isSubmitting}
                        onClick={() => {
                          setStartDate(undefined)
                          setEndDate(undefined)
                          useStore.setState((s) => ({
                            ...s,
                            incomeHistory: undefined,
                          }))
                        }}
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
                </div>
              </Form>
            </TabsContent>
            <TabsContent value="history">
              <Form methods={formHistory} onSubmit={onSubmitHistory}>
                <h2 className="mb-3 text-base font-medium">
                  History Pendapatan
                </h2>

                <div className="space-y-3">
                  <InputDate
                    name="history_income_date"
                    label="Tanggal"
                    selectRange
                    startDate={startDate}
                    endDate={endDate}
                    onChange={historyHandler}
                  />

                  <div className="flex justify-end gap-3">
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-36"
                        disabled={formHistory.formState.isSubmitting}
                        onClick={() => {
                          setStartDate(undefined)
                          setEndDate(undefined)
                          useStore.setState((s) => ({
                            ...s,
                            incomeHistory: undefined,
                          }))
                        }}
                      >
                        CANCEL
                      </Button>
                    </DialogClose>

                    <Button
                      type="submit"
                      className="w-36"
                      isLoading={formHistory.formState.isSubmitting}
                      disabled={incomeHistory ? true : false}
                    >
                      SAVE
                    </Button>
                  </div>
                </div>
              </Form>
              {incomeHistory && (
                <SimpleBar className="max-h-[20rem]">
                  <Table
                    isLoading={loading}
                    data={incomeHistory}
                    columns={milkHistoryColumns}
                    fixedCol={0}
                    // pageSize={4}
                    showAll
                  />
                </SimpleBar>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
