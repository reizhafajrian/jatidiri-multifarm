'use client'
import { Button, Form, InputDate, InputText, toast } from '@/components/shared'
import { Get } from '@/lib/api'
import { incomeSchema } from '@/lib/schemas'
import { formatRupiah } from '@/lib/utils'
import { useAuthStore } from '@/store/auth'
import { IMilkInfo, useMilkStore } from '@/store/milk'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { mutate } from 'swr'
import MilkIncomeCard from '../card/MilkIncomeCard'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../shared/Dialog'

interface IncomeFormProps {}

const IncomeForm: FC<IncomeFormProps> = ({}) => {
  const [open, setOpen] = useState(false)
  const { user } = useAuthStore()
  const { addIncome } = useMilkStore()

  // INCOME HISTORY
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [history, setHistory] = useState(0)

  const historyHandler = async (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)

    if (start !== null && end !== null) {
      const res = await Get(
        `/api/milk/income/get/history?start=` +
          start.toISOString() +
          '&end=' +
          end.toISOString()
      )
      console.log(res)

      if (res.status === 200) {
        console.log('hit')

        setHistory(res.data)
        console.log(history)
      }
    }
  }

  const methods = useForm<IMilkInfo>({
    resolver: zodResolver(incomeSchema),
    values: {
      history_income_total: formatRupiah(history),
    },
  })

  const onSubmit: SubmitHandler<IMilkInfo> = async (values) => {
    const res = await addIncome(values)

    if (res.errors) {
      return toast({
        type: 'error',
        message: res.errors[0].msg,
      })
    }

    toast({
      type: 'success',
      message: res.message,
    })

    methods.reset()
    mutate('/api/milk/income/get')
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>
          <MilkIncomeCard />
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Tambah Pendapatan</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) => onSubmit({ ...values, created_by: user.id })}
        >
          <div className="mb-8 space-y-5">
            <div>
              <h2 className="mb-3 text-base font-medium">Pendapatan Susu</h2>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                <InputDate name="income_date" label="Tanggal" />
                <InputText name="income_total" label="Total" />
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-base font-medium">History Pendapatan</h2>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
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
