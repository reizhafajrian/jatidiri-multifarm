'use client'
import { Button, InputDate, InputSelect, InputText } from '@/components/shared'
import { animalFormContent, animalTitle } from '@/data/data'
import { IAnimalProps, ICempekFields } from '@/data/interfaces'
import { cempekSchema } from '@/data/validations'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'

export default function EditCempekForm(props: IAnimalProps) {
  const router = useRouter()
  const content = animalFormContent[props.animal_type!]

  const editCempekHandler = async (values: ICempekFields) => {
    return console.log({ ...values })
  }

  return (
    <Formik
      initialValues={{} as ICempekFields}
      validationSchema={cempekSchema}
      onSubmit={(values) => editCempekHandler(values)}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h1 className="mb-6 text-base font-semibold">
            Edit Data {animalTitle(props.animal_type!)} Cempek
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-6">
              <InputSelect
                name="type"
                label="Jenis Cempek"
                options={content?.typeOptions}
                value={values.type}
                errorMsg={errors.type}
                disabled={isSubmitting}
              />
              <InputText
                name="birth_weight"
                label="Berat Lahir"
                defaultValue={values.birth_weight}
                onChange={handleChange}
                errorMsg={errors.birth_weight}
                disabled={isSubmitting}
              />
              <InputSelect
                name="female_origin"
                label="Asal Induk"
                options={content?.femaleOriginOptions}
                value={values.female_origin}
                errorMsg={errors.female_origin}
                disabled={isSubmitting}
              />
              <InputText
                name="birth_condition"
                label="Kondisi Lahir"
                defaultValue={values.birth_condition}
                onChange={handleChange}
                errorMsg={errors.birth_condition}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-6">
              <InputDate
                name="birth_date"
                label="Tgl Lahir"
                selected={values.birth_date}
                errorMsg={errors.birth_date}
                disabled={isSubmitting}
              />
              <InputSelect
                name="gender"
                label="Jenis Kelamin"
                options={['female', 'male']}
                value={values.gender}
                errorMsg={errors.gender}
                disabled={isSubmitting}
              />
              <InputSelect
                name="male_origin"
                label="Asal Pejantan"
                options={content?.maleOriginOptions}
                value={values.male_origin}
                errorMsg={errors.male_origin}
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
            </Button>{' '}
          </div>
        </form>
      )}
    </Formik>
  )
}
