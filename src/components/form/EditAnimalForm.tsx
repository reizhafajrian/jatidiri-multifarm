'use client'
import {
  Button,
  Dropzone,
  InputDate,
  InputSelect,
  InputText,
} from '@/components/shared'
import { animalFormContent, animalTitle, genderTitle } from '@/data/data'
import { animalSchema } from '@/data/validations'
import { IAnimal, useAnimalStore } from '@/store/animal'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'

export default function EditAnimalForm() {
  const router = useRouter()
  const { animal, editAnimal, animal_type, gender } = useAnimalStore()
  const content = animalFormContent[animal_type]

  const editAnimalHandler = async (values: IAnimal) => {
    try {
      // const res = await editAnimal({
      //   ...values,
      //   animal_type,
      //   gender,
      //   uid: '63e5bdd29536b95a6759a525',
      // })
      // if (res.status === 201) {
      //   toast.success(res.message)
      //   router.replace(`/${animal_type}`)
      // } else {
      //   toast.error(res.errors[0].msg)
      // }
    } catch (e: any) {
      // toast.error(e.message)
    }
  }

  return (
    <Formik
      initialValues={{} as IAnimal}
      validationSchema={animalSchema}
      validateOnChange={false}
      onSubmit={(values) => editAnimalHandler(values)}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h1 className="mb-6 text-base font-semibold">
            Edit Data {animalTitle(animal_type)} {genderTitle(gender)}
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-6">
              <InputSelect
                name="type"
                label={`Jenis ${animalTitle(animal_type)}`}
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
                label={`Asal ${animalTitle(animal_type)}`}
                options={content?.originOptions}
                value={values.origin}
                errorMsg={errors.origin}
                disabled={isSubmitting}
              />
              <InputText
                name="weight"
                label={`Berat ${animalTitle(animal_type)}`}
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
