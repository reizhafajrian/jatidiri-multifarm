'use client'
import { Button, InputDate, InputText, Modal } from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { milkSchema } from '@/data/validations'
import { IMilk, useMilkStore } from '@/store/milk'
import clsx from 'clsx'
import { Formik } from 'formik'

export default function EditMilkForm(props: IModal & { eartag_code: string }) {
  const { eartag_code, isOpen, closeModal } = props
  const { milk, editMilk } = useMilkStore()

  const editMilkHandler = async (values: IMilk) => {
    // await editMilk({...values})
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Edit Data Susu</h1>
      <Formik
        initialValues={milk}
        validationSchema={milkSchema}
        onSubmit={(values) => editMilkHandler(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-8 space-y-5">
              <InputText label="" value={eartag_code} disabled />
              <div>
                <h2 className="mb-3 text-base font-medium">Data Susu</h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                  <InputDate
                    name="milk_date"
                    label="Tanggal"
                    selected={values?.milk_date}
                    errorMsg={errors.milk_date}
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
                </div>
              </div>
              <div>
                <h2 className="mb-3 text-base font-medium">Cek History Susu</h2>
                <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                  <InputDate
                    name="milk_date"
                    label="Tanggal"
                    selected={values?.history_milk_date}
                    errorMsg={errors.history_milk_date}
                    disabled={isSubmitting}
                  />
                  <InputText
                    name="history_milk"
                    label="History Susu"
                    disabled
                    defaultValue={values?.history_milk ?? 0}
                  />
                </div>
              </div>
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
