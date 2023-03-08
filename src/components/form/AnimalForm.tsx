'use client'
import { animalSchema, cempekSchema } from '@/data/validations'
import { useAnimalStore } from '@/store/animal'
import { useAuthStore } from '@/store/auth'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { toast } from 'react-toastify'
import { Field, Form } from '../shared'

interface AnimalFormProps {
  formType: 'add' | 'edit'
  cempekForm?: boolean
  gender?: string
  animal: string
  values?: any
  id?: string
}

const AnimalForm: FC<AnimalFormProps> = (props) => {
  const { formType, cempekForm, gender, animal, values, id } = props
  const router = useRouter()
  const opt = getOptions(animal)
  const { user } = useAuthStore()
  const a = useAnimalStore()
  const body = {
    animal,
    formType,
    gender: gender == 'male' ? 'true' : 'false',
    cempek: cempekForm ? 'true' : 'false',
    uid: user.id!,
    id: id,
  }

  const onSubmit = async (values: any) => {
    const res = await fetch('/api/animal', {
      method: 'post',
      body: JSON.stringify({ ...values, ...body }),
    }).then((res) => res.json())

    if (res.errors) {
      return toast.error(res.errors[0].msg)
    }

    toast.success(res.message)
    router.replace(`/${animal}/male`)
  }

  const content = getContent({ a, animal, gender, formType, cempekForm })
  return (
    <>
      <h1 className="mb-6 text-base font-semibold">{content.title}</h1>
      <Form
        values={formType == 'edit' ? values : undefined}
        schema={cempekForm ? cempekSchema : animalSchema}
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-4"
      >
        <div className="space-y-6">
          <Field
            type="select"
            name="type"
            label={`Jenis ${cempekForm ? 'Cempek' : content.animal_title}`}
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
                  label={`Asal ${content.animal_title}`}
                  options={opt.originOptions}
                />
                <Field
                  type="input"
                  name="weight"
                  label={`Berat ${content.animal_title}`}
                />
                <Field
                  type="input"
                  name="purchase_price"
                  label="Harga Beli"
                  rupiah
                />
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
            <Field
              type="submit"
              cancelHandler={() => router.replace(`/${animal}/male`)}
            />
          </div>
        </div>
      </Form>
    </>
  )
}

export default AnimalForm

const getOptions = (animal: string) => {
  const options = {
    sheep: {
      typeOptions: ['doorper', 'garut'],
      femaleOriginOptions: ['garut', 'impor', 'swiss'],
      maleOriginOptions: ['garut', 'impor', 'swiss'],
      originOptions: ['garut', 'impor', 'australia'],
    },
    goat: {
      typeOptions: ['doorper', 'garut'],
      femaleOriginOptions: ['garut', 'impor', 'swiss'],
      maleOriginOptions: ['garut', 'impor', 'swiss'],
      originOptions: ['garut', 'impor', 'australia'],
    },
    cow: {
      typeOptions: ['doorper', 'garut'],
      femaleOriginOptions: ['garut', 'impor', 'swiss'],
      maleOriginOptions: ['garut', 'impor', 'swiss'],
      originOptions: ['garut', 'impor', 'australia'],
    },
  }

  return options[animal]
}

const getContent = ({ formType, a, animal, gender, cempekForm }: any) => {
  const form_title = formType == 'add' ? 'Tambah' : 'Edit'
  const animal_title = a.animalTitle(animal)
  const gender_title = cempekForm ? 'cempek' : a.genderTitle(gender!)

  return {
    title: `${form_title} Data ${animal_title} ${gender_title}`,
    animal_title,
    gender_title,
  }
}
