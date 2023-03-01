'use client'
import { IModal } from '@/data/interfaces'
import { hppSchema } from '@/data/validations'
import { IEditHpp, useHppStore } from '@/store/hpp'
import clsx from 'clsx'
import { Formik } from 'formik'
import { Button, InputText, Modal } from '../shared'

export default function EditHppForm(props: IModal & { eartag_code: string }) {
  const { eartag_code, isOpen, closeModal } = props
  const { hpp, editHpp } = useHppStore()

  const editHppHandler = async (values: IEditHpp) => {
    // editHpp({...values})
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-5 text-base font-semibold">Edit Data HPP</h1>
      <Formik
        initialValues={{} as IEditHpp}
        validationSchema={hppSchema}
        onSubmit={(values) => editHppHandler(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-8 space-y-5">
              <InputText label="" defaultValue={eartag_code} disabled />
              <div className="grid grid-cols-2 gap-5">
                <InputText label="" defaultValue={3000000} disabled />
                <InputText
                  name="selling_price"
                  label="Harga Jual"
                  onChange={handleChange}
                  defaultValue={values.selling_price}
                  errorMsg={errors.selling_price}
                  disabled={isSubmitting}
                />
              </div>
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
              </Button>{' '}
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
