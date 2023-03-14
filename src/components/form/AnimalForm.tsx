'use client'
import { getAnimalFormContent, getAnimalFormOptions } from '@/data/data'
import { animalSchema, cempekSchema } from '@/data/validations'
import { cn } from '@/lib/utils'
import { useAnimalStore } from '@/store/animal'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Field, Form } from '../shared'
import { toast } from '../shared/Toast'

interface AnimalFormProps {
  formType: 'add' | 'edit'
  cempekForm?: boolean
  gender?: string
  animal: string
  values?: any
  id?: string
}

const AnimalForm: FC<AnimalFormProps> = ({
  formType,
  cempekForm,
  gender,
  animal,
  values,
  id,
}) => {
  const router = useRouter()
  const opt = getAnimalFormOptions(animal)
  const { user } = useAuthStore()
  const a = useAnimalStore()
  const content = getAnimalFormContent({
    animal,
    gender,
    formType,
    cempekForm,
  })

  const onSubmit = async (values: any) => {
    const data = {
      cempek: cempekForm ? 'true' : 'false',
      uid: user.id!,
      id: id,
      animal,
      gender,
      ...values,
    }

    let res
    if (formType === 'add') {
      res = await a.addAnimal(data)
    } else {
      res = await a.editAnimal(data)
    }

    if (res.errors) {
      return toast({
        type: 'error',
        message: res.errors[0].msg,
      })
    }

    toast({
      type: 'success',
      message: res.message,
    })

    router.replace(`/${animal}/male`)
  }

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
                  options={[
                    { name: 'Jantan', value: 'male' },
                    { name: 'Betina', value: 'female' },
                  ]}
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
                  // rupiah
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
            className={cn(
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
