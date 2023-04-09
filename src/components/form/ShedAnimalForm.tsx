'use client'
import { Button, Form, InputSelect, InputText } from '@/components/shared'
import useShedAnimalList from '@/hooks/useShedAnimalList'
import useShedAnimalTags from '@/hooks/useshedAnimalTags'
import { shedAnimalSchema } from '@/lib/schemas'
import { IShedAnimal } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from '../shared/Dialog'
import { Pen } from '../shared/Icons'

const ShedAnimalForm: FC = () => {
  const [open, setOpen] = useState(false)
  const { animal, shed_id, addShedAnimal } = useStore()

  const { eartagOptions, mutate: mutateEartags } = useShedAnimalTags()
  const { mutate: mutateTable } = useShedAnimalList()

  const methods = useForm<IShedAnimal>({
    resolver: zodResolver(shedAnimalSchema),
  })

  const onSubmit: SubmitHandler<IShedAnimal> = async (values) => {
    await addShedAnimal(values)
    mutateTable()
    mutateEartags()
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <span className="hidden md:block">Tambah {animal.title}</span>
          <Pen className="h-4 w-4 fill-white md:ml-3" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Tambah Data {animal.title}</DialogTitle>

        <Form
          methods={methods}
          onSubmit={(values) => onSubmit({ ...values, id: shed_id })}
        >
          <div className="mb-8 space-y-6">
            <InputSelect
              name="eartag_code"
              label="No Eartag"
              options={eartagOptions}
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
