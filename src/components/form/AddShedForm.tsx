'use client'
import { Button, InputRadio, InputText } from '@/components/shared'
import { shedFormContent } from '@/data/data'
import { IShedFields } from '@/data/interfaces'
import { shedSchema } from '@/data/validations'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'

export default function AddShedForm() {
  const router = useRouter()
  const { animal_types } = shedFormContent

  const addShedForm = (values: IShedFields) => {
    return console.log({ ...values })
  }

  return (
    <Formik
      initialValues={{} as IShedFields}
      validationSchema={shedSchema}
      onSubmit={(values) => addShedForm(values)}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h1 className="mb-5 text-base font-semibold">Tambah Data Kandang</h1>
          <div className="mb-6 flex items-center gap-4">
            {animal_types.map((item, idx) => (
              <InputRadio
                key={idx}
                label={item.label}
                onChange={handleChange}
                defaultValue={values.animal_type}
                isError={errors.animal_type}
                disabled={isSubmitting}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-6">
              <InputText
                name="shed_code"
                label="No Kandang"
                defaultValue={values.shed_code}
                onChange={handleChange}
                errorMsg={errors.shed_code}
                disabled={isSubmitting}
              />
              <InputText
                name="feed"
                label="Pakan"
                defaultValue={values.feed}
                onChange={handleChange}
                errorMsg={errors.feed}
                disabled={isSubmitting}
              />
              <InputText
                name="age_range"
                label="Range Usia"
                defaultValue={values.age_range}
                onChange={handleChange}
                errorMsg={errors.age_range}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-6">
              <InputText
                name="animal_weight"
                label="Berat Hewan"
                defaultValue={values.animal_weight}
                onChange={handleChange}
                errorMsg={errors.animal_weight}
                disabled={isSubmitting}
              />
              <InputText
                name="feed_weight"
                label="Berat Pakan"
                defaultValue={values.feed_weight}
                onChange={handleChange}
                errorMsg={errors.feed_weight}
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
          </div>
          <div className="mt-28 flex justify-end gap-3">
            <Button
              onClick={() => router.back()}
              intent="secondary"
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
  )
}
