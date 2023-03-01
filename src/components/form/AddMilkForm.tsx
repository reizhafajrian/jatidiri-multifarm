'use client'
import {
  Button,
  InputDate,
  InputSelect,
  InputText,
  Modal,
} from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { milkSchema } from '@/data/validations'
import { IMilk, useMilkStore } from '@/store/milk'
import clsx from 'clsx'
import { Formik } from 'formik'

export default function AddMilkForm(props: IModal) {
  const { isOpen, closeModal } = props
  const { milk, addMilk } = useMilkStore()

  const addMilkHandler = async (values: IMilk) => {
    // await addMilk({ ...values })
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data Susu</h1>
      <Formik
        initialValues={milk}
        validationSchema={milkSchema}
        onSubmit={(values) => addMilkHandler(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-8 space-y-5">
              <InputSelect
                name="eartag_code"
                label="No Eartag"
                options={['111', '222', '333']}
                value={values?.eartag_code}
                errorMsg={errors.eartag_code}
                disabled={isSubmitting}
              />
              <InputText
                name="milk"
                label="Berapa liter susu?"
                defaultValue={values?.milk ?? 0}
                onChange={handleChange}
                errorMsg={errors.milk}
                disabled={isSubmitting}
              />
              <InputDate
                name="milk_date"
                label="Tanggal"
                selected={values?.milk_date}
                errorMsg={errors.milk_date}
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
