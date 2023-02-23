import { IHppFields } from '@/data/interfaces'
import { hppSchema } from '@/data/validations'
import clsx from 'clsx'
import { Formik } from 'formik'
import { Button, InputText, Modal } from '../shared'

interface IProps {
  eartagCode: string
  isOpen: boolean
  closeModal: any
}

export default function EditHppForm(props: IProps) {
  const { eartagCode, isOpen, closeModal } = props

  const editHppHandler = async (values: IHppFields) => {
    return console.log({ ...values })
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-5 text-base font-semibold">Edit Data HPP</h1>
      <Formik
        initialValues={{} as IHppFields}
        validationSchema={hppSchema}
        onSubmit={(values) => editHppHandler(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-8 space-y-5">
              <InputText label="" defaultValue={eartagCode} disabled />
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
