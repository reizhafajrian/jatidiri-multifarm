'use client'
import {
  Button,
  Form,
  InputSelect,
  InputText,
  Modal,
} from '@/components/shared'
import { shedSchema } from '@/lib/schemas'
import { IModal } from '@/lib/types'
import { useAnimalStore } from '@/store/animal'
import { IShedAnimal, useShedStore } from '@/store/shed'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IProps extends IModal {
  animal: string
}

const ShedAnimalForm: FC<IProps> = ({ animal, closeModal, isOpen }) => {
  const { animalTitle } = useAnimalStore()
  const { addShedAnimal } = useShedStore()
  const title = animalTitle(animal)

  const methods = useForm<IShedAnimal>({
    resolver: zodResolver(shedSchema),
  })

  const onSubmit: SubmitHandler<IShedAnimal> = async (values) => {
    await addShedAnimal(values)
  }

  const codeOptions = [
    { name: '111', value: '111' },
    { name: '222', value: '222' },
    { name: '333', value: '333' },
    { name: '444', value: '444' },
  ]

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data {title}</h1>
      <Form methods={methods} onSubmit={onSubmit}>
        <div className="mb-8 space-y-6">
          <InputSelect
            name="eartag_code"
            label="No Eartag"
            options={codeOptions}
          />
          <InputText name="description" label="Keterangan" />
        </div>
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-36"
            onClick={() => closeModal(false)}
            disabled={methods.formState.isSubmitting}
          >
            CANCEL
          </Button>
          <Button
            type="submit"
            className="w-36"
            isLoading={methods.formState.isSubmitting}
          >
            SAVE
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default ShedAnimalForm
