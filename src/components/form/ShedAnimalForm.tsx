'use client'
import {
  Button,
  Form,
  InputSelect,
  InputText,
  toast
} from '@/components/shared'
import { shedAnimalSchema } from '@/lib/schemas'
import { useAnimalStore } from '@/store/animal'
import { IShedAnimal, useShedStore } from '@/store/shed'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { mutate } from 'swr'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from '../shared/Dialog'
import { Pen } from '../shared/Icons'

interface ShedAnimalFormProps {
  animal: string
  eartagOptions: any
  id: string
}

const ShedAnimalForm: FC<ShedAnimalFormProps> = ({
  animal,
  eartagOptions,
  id,
}) => {
  const [open, setOpen] = useState(false)
  const { animalTitle } = useAnimalStore()
  const { addShedAnimal } = useShedStore()
  const title = animalTitle(animal)

  const methods = useForm<IShedAnimal>({
    resolver: zodResolver(shedAnimalSchema),
  })

  const onSubmit: SubmitHandler<IShedAnimal> = async (values) => {
    try {
      const res = await addShedAnimal(values)

      if (res.status === 200) {
        toast({
          type: 'success',
          message: res.message,
        })
        mutate(`/api/shed/get/detail/${id}`)
      }
    } catch (e) {
      console.log(e)
    }

    // setOpen(false)
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
          Tambah {title}
          <Pen className="ml-3 h-4 w-4 fill-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Tambah Data {title}</DialogTitle>

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
