import {
  Button,
  Form,
  InputDate,
  InputSelect,
  InputText,
} from '@/components/shared'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/shared/Dialog'
import useDataList from '@/hooks/useDataList'
import { milkSchema } from '@/lib/schemas'
import { IMilk } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { mutate } from 'swr'

interface MilkFormProps {
  formType: 'add' | 'edit'
  currentValues?: any
}

const MilkForm: FC<MilkFormProps> = ({ formType, currentValues: curr }) => {
  const [open, setOpen] = useState(false)
  const title = `${formType == 'add' ? 'Tambah' : 'Edit'} Data Susu`
  const { user, milkHistory, setMilkHistory, addMilk, editMilk } = useStore()
  const { data } = useDataList('/api/cow/get', ['gender=false'])

  const eartagOptions =
    data?.map((item: any) => ({ name: item._id, value: item._id })) ?? []

  const methods = useForm<IMilk>({
    resolver: zodResolver(milkSchema),
    values:
      formType === 'edit'
        ? {
            eartag_code: curr?.animal_id?.eartag_code,
            history_milk: milkHistory,
          }
        : undefined,
  })

  const onSubmit: SubmitHandler<IMilk> = (values) => {
    formType === 'add' ? addMilk(values) : editMilk(values)
    methods.reset()
    setOpen(false)
    mutate('/api/milk/get')
  }

  // MILK HISTORY
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const milkHistoryHandler = async (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    setMilkHistory(start, end)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {formType === 'add' ? (
          <Button className="capitalize">tambah data susu</Button>
        ) : (
          <Button size="xs" variant="edit" />
        )}
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>{title}</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) =>
            onSubmit({
              ...values,
              created_by: user?.id,
              _id: curr?._id,
              animal_id: curr?.animal_id?._id,
            })
          }
        >
          <div className="mb-8 space-y-5">
            {formType == 'edit' ? (
              <InputText name="eartag_code" label="" disabled />
            ) : (
              <InputSelect
                name="eartag_code"
                label="No Eartag"
                options={eartagOptions}
              />
            )}
            {formType == 'edit' ? (
              <>
                <div>
                  <h2 className="mb-3 text-base font-medium">Data Susu</h2>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                    <InputDate name="milk_date" label="Tanggal" />
                    <InputText name="milk" label="Berapa liter susu?" />
                  </div>
                </div>
                <div>
                  <h2 className="mb-3 text-base font-medium">
                    Cek History Susu
                  </h2>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
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
                      disabled
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <InputDate name="milk_date" label="Tanggal" />
                <InputText name="milk" label="Berapa liter susu?" />
              </>
            )}
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

export default MilkForm
