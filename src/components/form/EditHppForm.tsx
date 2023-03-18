'use client'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/shared/Dialog'
import { hppSchema } from '@/lib/schemas'
import { IEditHpp } from '@/store/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, InputText } from '../shared'

interface EditHppFormProps {
  eartag_code: string
}

const EditHppForm: FC<EditHppFormProps> = ({ eartag_code }) => {
  const [open, setOpen] = useState(false)

  const methods = useForm<IEditHpp>({
    resolver: zodResolver(hppSchema),
    values: {
      eartag_code,
      hpp: 1000000,
    },
  })

  const onSubmit: SubmitHandler<IEditHpp> = async (values) => {
    console.log(values)
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="edit" size="xs" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Data HPP</DialogTitle>

        <Form methods={methods} onSubmit={onSubmit}>
          <div className="mb-8 space-y-5">
            <InputText name="eartag_code" label="" disabled />
            <div className="grid grid-cols-2 gap-5">
              <InputText name="hpp" label="" disabled />
              <InputText name="selling_price" label="Harga Jual" />
            </div>
            <InputText name="description" label="Keterangan" />
          </div>
          <div className="flex justify-end gap-3">
            <DialogClose>
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

export default EditHppForm
