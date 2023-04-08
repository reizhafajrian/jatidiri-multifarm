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
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, InputText } from '../shared'
interface EditHppFormProps {
  eartag_code: string,
  hpp_price: number,
  _id: string,
  mutate: () => void,
}

const EditHppForm: FC<EditHppFormProps> = ({ eartag_code, hpp_price, _id, mutate }) => {
  const { editAnimal, } = useStore()
  const r = useRouter()

  const [open, setOpen] = useState(false)
  const {
    editHpp,
    animal,
  } = useStore()

  const methods = useForm<IEditHpp>({
    resolver: zodResolver(hppSchema),
    values: {
      _id,
      eartag_code,
      hpp_price: hpp_price,
    },
  })

  const onSubmit: SubmitHandler<IEditHpp> = async (values) => {
    const pathname = window?.location?.pathname
    const secondPath = pathname.split('/')[2]
    await editAnimal({ _id, sell_price: Number(values.sell_price), animal: secondPath })
    mutate()
    setOpen(false)
    r.refresh()
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
              <InputText rupiah type='number' name="hpp_price" label="" disabled />
              <InputText rupiah type='number' name="sell_price" label="Harga Jual" />
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
