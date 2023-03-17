import {
  Button,
  Form,
  InputDate,
  InputSelect,
  InputText,
  toast,
} from '@/components/shared'
import useDataList from '@/hooks/useDataList'
import { milkSchema } from '@/lib/schemas'
import { useAuthStore } from '@/store/auth'
import { IMilk, useMilkStore } from '@/store/milk'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { mutate } from 'swr'

import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../shared/Dialog'

interface MilkFormProps {
  eartag_code?: string
  formType: 'add' | 'edit'
  values?: any
}

const MilkForm: FC<MilkFormProps> = ({ eartag_code, formType, values }) => {
  const [open, setOpen] = useState(false)
  const title = `${formType == 'add' ? 'Tambah' : 'Edit'} Data Susu`
  const { addMilk, editMilk } = useMilkStore()
  const { user } = useAuthStore()

  const { data } = useDataList('/api/cow/get', ['gender=false'])
  const eartagOptions =
    data?.map((item: any) => ({
      name: item._id,
      value: item._id,
    })) ?? []

  const methods = useForm<IMilk>({
    resolver: zodResolver(milkSchema),
    defaultValues:
      formType == 'edit'
        ? {
            eartag_code: values?.animal_id?.eartag_code,
            milk: values.amount,
            milk_date: values.milk_created_at,
            history_milk: 0,
          }
        : {},
  })

  const onSubmit: SubmitHandler<IMilk> = async (values) => {
    let res
    if (formType === 'add') {
      res = await addMilk(values)
    } else {
      res = await editMilk(values)
    }

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
    mutate('/api/milk/get')
    setOpen(false)
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
          onSubmit={(values) => onSubmit({ ...values, created_by: user.id })}
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
                    <InputDate name="history_milk_date" label="Tanggal" />
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
