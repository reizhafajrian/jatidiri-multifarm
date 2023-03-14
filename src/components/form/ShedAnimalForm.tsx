'use client'
import { Field, Form, Modal } from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { shedAnimalSchema as schema } from '@/data/validations'
import { useAnimalStore } from '@/store/animal'
import { IShedAnimal, useShedStore } from '@/store/shed'

export default function ShedAnimalForm(
  props: IModal & { animal_type: string }
) {
  const { isOpen, closeModal, animal_type } = props
  const { animalTitle } = useAnimalStore()
  const { addShedAnimal } = useShedStore()
  const title = animalTitle(animal_type)

  const onSubmit = async (values: IShedAnimal) => {
    // await addShedAnimal({...values})
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
      <Form schema={schema} onSubmit={onSubmit}>
        <div className="mb-8 space-y-6">
          <Field
            type="select"
            name="eartag_code"
            label="No Eartag"
            options={codeOptions}
          />
          <Field type="input" name="description" label="Keterangan" />
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}
