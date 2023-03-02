'use client'
import { Field, Form, Modal } from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { shedAnimalSchema as schema } from '@/data/validations'
import { useAnimalStore } from '@/store/animal'
import { IShedAnimal, useShedStore } from '@/store/shed'

export default function AddShedAnimalForm(
  props: IModal & { animal_type: string }
) {
  const { isOpen, closeModal, animal_type } = props
  const { animalTitle } = useAnimalStore()
  const { addShedAnimal } = useShedStore()

  const onSubmit = async (values: IShedAnimal) => {
    // await addShedAnimal({...values})
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">
        Tambah Data {animalTitle()}
      </h1>
      <Form schema={schema} onSubmit={onSubmit}>
        <div className="mb-8 space-y-6">
          <Field
            type="select"
            name="eartag_code"
            label="No Eartag"
            options={['111', '222', '333']}
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
