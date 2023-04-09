'use client'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from '@/components/shared/Dialog'
import { hppSchema } from '@/lib/schemas'
import { IEditHpp } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, InputText } from '../shared'

interface EditHppFormProps {
  data: any
  mutate: () => void
}

const EditHppForm: FC<EditHppFormProps> = ({ data, mutate }) => {
  const [open, setOpen] = useState(false)
  const r = useRouter()
  const {
    editAnimal,
    animal: { name: animal },
  } = useStore()
  const { _id, eartag_code, hpp_price } = data

  const methods = useForm<IEditHpp>({
    resolver: zodResolver(hppSchema),
    values: {
      _id,
      eartag_code,
      hpp_price: hpp_price ?? 0,
    },
  })

  const onSubmit: SubmitHandler<IEditHpp> = async ({
    sell_price,
    description,
  }) => {
    await editAnimal({ _id, sell_price, description, animal: animal })

    setOpen(false)
    mutate()
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
              <InputText name="hpp_price" label="" disabled type="number" rupiah />
              <InputText
                name="sell_price"
                label="Harga Jual"
                type="number"
                rupiah
              />
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
