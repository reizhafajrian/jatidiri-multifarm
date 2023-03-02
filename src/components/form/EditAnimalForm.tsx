'use client'
import { Field, Form } from '@/components/shared'
import { animalSchema as schema } from '@/data/validations'
import { IAnimal, useAnimalStore } from '@/store/animal'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'

export default function EditAnimalForm() {
  const router = useRouter()
  const { user } = useAuthStore()
  const {
    animal,
    editAnimal,
    animal_type,
    gender,
    animalTitle,
    genderTitle,
    animalFormContent: c,
  } = useAnimalStore.getState()

  const onSubmit = async (values: IAnimal) => {
    // try {
    //   const res = await editAnimal({
    //     ...values,
    //     animal_type,
    //     gender,
    //     uid: '63e5bdd29536b95a6759a525',
    //   })
    //   if (res.status === 201) {
    //     toast.success(res.message)
    //     router.replace(`/${animal_type}`)
    //   } else {
    //     toast.error(res.errors[0].msg)
    //   }
    // } catch (e: any) {
    //   toast.error(e.message)
    // }
  }

  return (
    <>
      <h1 className="mb-6 text-base font-semibold">
        Edit Data {animalTitle()} {genderTitle()}
      </h1>
      <Form
        values={animal}
        schema={schema}
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-4"
      >
        <div className="space-y-6">
          <Field
            type="select"
            name="type"
            label={`Jenis ${animalTitle()}`}
            options={c?.typeOptions}
          />
          <Field type="date" name="arrival_date" label="Tgl Tiba" />
          <Field type="date" name="birth_date" label="Tgl Lahir" />
          <Field
            type="select"
            name="origin_female"
            label="Asal Induk"
            options={c?.femaleOriginOptions}
          />
          <Field type="file" name="files" label="Upload Sertifikat" />
        </div>
        <div className="flex flex-col">
          <div className="space-y-6">
            <Field
              type="select"
              name="origin"
              label={`Asal ${animalTitle()}`}
              options={c?.originOptions}
            />
            <Field
              type="input"
              name="weight"
              label={`Berat ${animalTitle()}`}
            />
            <Field type="input" name="purchase_price" label="Harga Beli" />
            <Field
              type="select"
              name="origin_male"
              label="Asal Pejantan"
              options={c?.maleOriginOptions}
            />
            <Field type="input" name="description" label="Keterangan" />
          </div>
          <div className="mt-auto flex justify-end gap-3">
            <Field type="submit" cancelHandler={() => router.back()} />
          </div>
        </div>
      </Form>
    </>
  )
}
