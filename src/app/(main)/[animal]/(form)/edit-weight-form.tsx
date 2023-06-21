import { useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { SubmitHandler, useForm } from "react-hook-form"

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
import InputDate from "@/components/ui/InputDate"
import InputText from "@/components/ui/InputText"
import Table from "@/components/ui/Table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"

interface IProps {}

export const EditWeightForm = ({}: IProps) => {
  const [open, setOpen] = useState(false)
  const { user } = useStore()

  const columns: ColumnDef<any, any>[] = [
    { header: "Tanggal", accessorKey: "weight_date" },
    { header: "Berat", accessorKey: "weight" },
  ]
  const methods = useForm<{}>({
    //resolver: zodResolver(),
    values: {
      // history_income_total: formatRupiah(incomeHistory),
    },
  })

  const onSubmit: SubmitHandler<{}> = async (values) => {
    console.log(values)
    methods.reset()
    setOpen(false)
  }

  // INCOME HISTORY
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const historyHandler = async (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    //    setIncomeHistory(start, end)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Update Berat</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Perbarui Berat Hewan</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) => onSubmit({ ...values, created_by: user?.id })}
        >
          <div className="mb-8 space-y-5" tabIndex={0}>
            <Tabs defaultValue="berat">
              <TabsList>
                <TabsTrigger value="berat">Berat</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="berat" className="space-y-3">
                <h2 className="mb-3 text-base font-medium">Update Berat</h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                  <InputDate name="weight_date" label="Tanggal" />
                  <InputText
                    name="weight"
                    label="Berat saat ini"
                    type="number"
                  />
                </div>
              </TabsContent>
              <TabsContent value="history" className="space-y-3">
                <h2 className="mb-3 text-base font-medium">History Berat</h2>
                <InputDate
                  name="history_weight_date"
                  label="Tanggal"
                  selectRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={historyHandler}
                />
                {startDate && endDate && (
                  <div className="max-h-[20rem] overflow-hidden">
                    <Table
                      isLoading={false}
                      data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
                      columns={columns}
                      fixedCol={0}
                      pageSize={4}
                    />
                  </div>
                )}
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
    </DialogRoot>
  )
}
