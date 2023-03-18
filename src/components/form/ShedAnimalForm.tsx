'use client'
import { Button, Form, InputSelect, InputText } from '@/components/shared'
import { shedAnimalSchema } from '@/lib/schemas'
import { IShedAnimal } from '@/store/shed'
import useStore from '@/store/useStore'
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
import { Pen } from '../shared/Icons'

interface ShedAnimalFormProps {
  animal: string
  eartagOptions: any
  id: string
}

const ShedAnimalForm: FC<ShedAnimalFormProps> = ({
  animal: test,
  eartagOptions,
  id,
}) => {
  const [open, setOpen] = useState(false)
  const { animal, addShedAnimal } = useStore()

  const methods = useForm<IShedAnimal>({
    resolver: zodResolver(shedAnimalSchema),
  })

  const onSubmit: SubmitHandler<IShedAnimal> = (values) => {
    addShedAnimal(values)
    mutate(`/api/shed/get/detail/${id}`)
    setOpen(false)
  }

  const codeOptions =
    eartagOptions?.map((item: any) => ({
      name: item.eartag_code,
      value: item.eartag_code,
    })) ?? []

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Tambah {animal.title}
          <Pen className="ml-3 h-4 w-4 fill-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Tambah Data {animal.title}</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) => onSubmit({ ...values, id })}
        >
          <div className="mb-8 space-y-6">
            <InputSelect
              name="eartag_code"
              label="No Eartag"
              options={codeOptions}
            />
            <InputText name="description" label="Keterangan" />
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

export default ShedAnimalForm
