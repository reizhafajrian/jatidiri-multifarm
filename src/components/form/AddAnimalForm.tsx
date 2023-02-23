'use client'
import {
  Button,
  Dropzone,
  InputDate,
  InputSelect,
  InputText,
} from '@/components/shared'
import { animalFormContent, animalTitle, genderTitle } from '@/data/data'
import { IAnimalFields, IAnimalProps } from '@/data/interfaces'
import { animalSchema } from '@/data/validations'
import { addAnimal } from '@/libs/api'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function AddAnimalForm(props: IAnimalProps) {
  const router = useRouter()
  const { animal_type, gender } = props
  const content = animalFormContent[animal_type!]
  const animal = animalTitle(animal_type!)

  const addAnimalHandler = async (values: IAnimalFields) => {
    try {
      const res = await addAnimal({ animal_type, gender, values })
      if (res.status === 201) {
        toast.success(res.message)
        router.replace(`/${animal_type}`)
      } else {
        toast.error(res.errors[0].msg)
      }
    } catch (e: any) {
      console.log(e)
      toast.error(e.message)
    }
  }

  return (
    <Formik
      initialValues={{} as IAnimalFields}
      validationSchema={animalSchema}
      validateOnChange={false}
      onSubmit={(values) => addAnimalHandler(values)}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h1 className="mb-6 text-base font-semibold">
            Tambah Data {animal} {genderTitle(gender!)}
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-6">
              <InputSelect
                name="type"
                label={`Jenis ${animal}`}
                options={content?.typeOptions}
                value={values.type}
                errorMsg={errors.type}
                disabled={isSubmitting}
              />
              <InputDate
                name="arrival_date"
                label="Tgl Tiba"
                selected={values.arrival_date}
                errorMsg={errors.arrival_date}
                disabled={isSubmitting}
              />
              <InputDate
                name="birth_date"
                label="Tgl Lahir"
                selected={values.birth_date}
                errorMsg={errors.birth_date}
                disabled={isSubmitting}
              />
              <InputSelect
                name="origin_female"
                label="Asal Induk"
                options={content?.femaleOriginOptions}
                value={values.origin_female}
                errorMsg={errors.origin_female}
                disabled={isSubmitting}
              />
              <Dropzone
                name="files"
                label="Upload Sertifikat"
                errorMsg={errors.files}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-6">
              <InputSelect
                name="origin"
                label={`Asal ${animal}`}
                options={content?.originOptions}
                value={values.origin}
                errorMsg={errors.origin}
                disabled={isSubmitting}
              />
              <InputText
                name="weight"
                label={`Berat ${animal}`}
                defaultValue={values.weight}
                onChange={handleChange}
                errorMsg={errors.weight}
                disabled={isSubmitting}
              />
              <InputText
                name="purchase_price"
                label="Harga Beli"
                defaultValue={values.purchase_price}
                onChange={handleChange}
                errorMsg={errors.purchase_price}
                disabled={isSubmitting}
              />
              <InputSelect
                name="origin_male"
                label="Asal Pejantan"
                options={content?.maleOriginOptions}
                value={values.origin_male}
                errorMsg={errors.origin_male}
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
          <div className="flex justify-end gap-3">
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
