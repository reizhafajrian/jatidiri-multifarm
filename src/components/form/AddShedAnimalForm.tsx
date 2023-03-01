'use client'
import { Button, InputSelect, InputText, Modal } from '@/components/shared'
import { animalTitle } from '@/data/data'
import { IModal } from '@/data/interfaces'
import { shedAnimalSchema } from '@/data/validations'
import { IShedAnimal, useShedStore } from '@/store/shed'
import clsx from 'clsx'
import { Formik } from 'formik'

export default function AddShedAnimalForm(
  props: IModal & { animal_type: string }
) {
  const { isOpen, closeModal, animal_type } = props
  const { addShedAnimal } = useShedStore()

  const addShedAnimalForm = async (values: IShedAnimal) => {
    // await addShedAnimal({...values})
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">
        Tambah Data {animalTitle(animal_type!)}
      </h1>
      <Formik
        initialValues={{} as IShedAnimal}
        validationSchema={shedAnimalSchema}
        onSubmit={(values) => addShedAnimalForm(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-8 space-y-6">
              <InputSelect
                name="eartag_code"
                label="No Eartag"
                options={['111', '222', '333']}
                value={values.eartag_code}
                errorMsg={errors.eartag_code}
                disabled={isSubmitting}
              />
              <InputText
                name="description"
                label="Keterangan"
                defaultValue={values.description}
                onChange={handleChange}
                errorMsg={errors.description}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button
                intent="secondary"
                onClick={() => closeModal(false)}
                className="w-36 rounded-lg py-2"
              >
                cancel
              </Button>
              <Button
                type="submit"
                className={clsx(
                  'w-36 rounded-lg py-2',
                  isSubmitting && 'animate-pulse'
                )}
                disabled={isSubmitting}
              >
                save
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
