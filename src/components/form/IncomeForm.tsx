'use client'
import { Button, Form, InputDate, InputText } from '@/components/shared'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/shared/Dialog'
import { incomeSchema } from '@/lib/schemas'
import { IMilkInfo } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { mutate } from 'swr'

interface IncomeFormProps {}

const IncomeForm: FC<IncomeFormProps> = ({}) => {
  const [open, setOpen] = useState(false)
  const { user, incomeHistory, addIncome, setIncomeHistory } = useStore()
  const methods = useForm<IMilkInfo>({
    resolver: zodResolver(incomeSchema),
    values: {
      history_income_total: (incomeHistory),
    },
  })


  const onSubmit: SubmitHandler<IMilkInfo> = async (values) => {
    await addIncome(values)
    methods.reset()
    mutate('/api/milk/income/get')
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
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="edit" size="xs" />
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Tambah Pendapatan</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) => onSubmit({ ...values, created_by: user?.id })}
        >
          <div className="mb-8 space-y-5">
            <div>
              <h2 className="mb-3 text-base font-medium">Pendapatan Susu</h2>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                <InputDate name="income_date" label="Tanggal" />
                <InputText
                  name="income_total"
                  label="Total"
                  type="number"
                  rupiah
                />
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-base font-medium">History Pendapatan</h2>
              <div className="grid gap-x-5 gap-y-4 md:grid-cols-2">
                <InputDate
                  name="history_income_date"
                  label="Tanggal"
                  selectRange
                  startDate={startDate}
                  endDate={endDate}
                  onChange={historyHandler}
                />
                <InputText
                  name="history_income_total"
                  label="History Pendapatan"
                  type="number"
                  rupiah
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

export default IncomeForm
