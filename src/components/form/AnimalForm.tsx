'use client'
import { animalSchema, cempekSchema } from '@/data/validations'
import { useAnimalDetail } from '@/hooks/useAnimal'
import { ICempek, useAnimalStore } from '@/store/animal'
import { useAuthStore } from '@/store/auth'
import clsx from 'clsx'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import { Field, Form } from '../shared'

interface IProps {
  formType: 'add' | 'edit'
  cempekForm?: boolean
  gender?: string
}

export default function AnimalForm(props: IProps) {
  const router = useRouter()
  const { user } = useAuthStore()
  const store = useAnimalStore.getState()

  const opt = store.animalFormContent
  const eartag_code = useSearchParams().get('eartag_code')
  const data = useAnimalDetail(eartag_code as string)
  const { formType, cempekForm, gender } = props
  const schema = cempekForm ? cempekSchema : animalSchema

  const form_title = formType == 'add' ? 'Tambah' : 'Edit'
  const animal_title = store.animalTitle(store.animal_type!)
  const gender_title = cempekForm ? 'cempek' : store.genderTitle(gender!)
  const title = `${form_title} Data ${animal_title} ${gender_title}`

  const onSubmit = async (values: any) => {
    let res

    if (formType == 'add') {
      res = await store.addAnimal({
        ...values,
        animal_type: store.animal_type,
        gender: gender,
        uid: user.id!,
      })
    } else {
      return console.log({ edit_animal: values })
    }

    if (res.errors) {
      return toast.error(res.errors[0].msg)
    }

    toast.success(res.message)
    router.replace(`/${store.animal_type}`)
  }


  const onSubmitCempek = async (values: ICempek) => {
    let res

    if (formType == 'add') {
      return console.log({ add_cempek: values })
    } else {
      return console.log({ edit_cempek: values })
    }

    // if (res.errors) {
    //   return toast.error(res.errors[0].msg)
    // }

    // toast.success(res.message)
    // router.replace(`/${store.animal_type}`)
  }

  return (
    <>
      <h1 className="mb-6 text-base font-semibold">{title}</h1>
      <Form
        values={
          formType == 'edit'
            ? cempekForm
              ? store.cempek
              : store.animal
            : undefined
        }
        schema={schema}
        onSubmit={cempekForm ? onSubmitCempek : onSubmit}
        className="grid grid-cols-2 gap-4"
      >
        <div className="space-y-6">
          <Field
            type="select"
            name="type"
            label={`Jenis ${cempekForm ? 'Cempek' : animal_title}`}
            options={opt.typeOptions}
          />

          {cempekForm ? (
            <Field type="input" name="birth_weight" label="Berat Lahir" />
          ) : (
            <>
              <Field type="date" name="arrival_date" label="Tgl Tiba" />
              <Field type="date" name="birth_date" label="Tgl Lahir" />
            </>
          )}

          <Field
            type="select"
            name="origin_female"
            label="Asal Induk"
            options={opt.femaleOriginOptions}
          />

          {cempekForm ? (
            <Field type="input" name="birth_condition" label="Kondisi Lahir" />
          ) : (
            <Field type="file" name="files" label="Upload Sertifikat" />
          )}
        </div>
        <div className="flex flex-col">
          <div className="space-y-6">
            {cempekForm ? (
              <>
                <Field type="date" name="birth_date" label="Tgl Lahir" />
                <Field
                  type="select"
                  name="gender"
                  label="Jenis Kelamin"
                  options={['female', 'male']}
                />
              </>
            ) : (
              <>
                <Field
                  type="select"
                  name="origin"
                  label={`Asal ${animal_title}`}
                  options={opt.originOptions}
                />
                <Field
                  type="input"
                  name="weight"
                  label={`Berat ${animal_title}`}
                />
                <Field type="input" name="purchase_price" label="Harga Beli" />
              </>
            )}
            <Field
              type="select"
              name="origin_male"
              label="Asal Pejantan"
              options={opt.maleOriginOptions}
            />
            <Field type="input" name="description" label="Keterangan" />
          </div>
          <div
            className={clsx(
              'flex justify-end gap-3',
              cempekForm ? 'mt-10' : 'mt-auto'
            )}
          >
            <Field type="submit" cancelHandler={() => router.back()} />
          </div>
        </div>
      </Form>
    </>
  )
}
