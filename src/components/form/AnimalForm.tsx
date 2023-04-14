'use client'
import {
  Button,
  Form,
  InputCertificate,
  InputDate,
  InputSelect,
  InputText,
  TextArea,
} from '@/components/shared'
import useAnimalForm from '@/hooks/useAnimalForm'
import { adultSchema, cempekSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'
import { IAnimal } from '@/store/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface AnimalFormProps {
  formType: 'add' | 'edit'
  cempekForm?: boolean
  gender?: string
  values?: any
  id?: string
}

const AnimalForm: FC<AnimalFormProps> = (props) => {
  const router = useRouter()
  const { formType, cempekForm, gender, values, id } = props
  const data = useAnimalForm({ formType, cempekForm, gender })

  const methods = useForm<IAnimal>({
    resolver: zodResolver(cempekForm ? cempekSchema : adultSchema),
    defaultValues: formType == 'edit' ? values : {},
  })

  const onSubmit: SubmitHandler<IAnimal> = async (values) => {
    if (formType === 'add') {
      await data.addAnimal(values, router)
    } else {
      await data.editAnimal(values, router)
    }
  }

  return (
    <>
      <h1 className="mb-6 text-base font-semibold" suppressHydrationWarning>
        {data.title}
      </h1>
      <Form
        methods={methods}
        onSubmit={(values) =>
          onSubmit({
            ...values,
            cempek: cempekForm ? 'true' : 'false',
            created_by: data.created_by,
            _id: id,
            animal: data.animal,
            gender,
          })
        }
        className="grid gap-4 md:grid-cols-2"
      >
        <div className="space-y-6">
          <InputSelect
            name="type"
            label={`Jenis ${cempekForm ? 'Cempek' : data.animalTitle}`}
            options={data.opts?.typeOptions}
          />

          {cempekForm ? (
            <InputText name="birth_weight" label="Berat Lahir" />
          ) : (
            <>
              <InputDate name="arrival_date" label="Tgl Tiba" />
              <InputDate name="birth_date" label="Tgl Lahir" />
            </>
          )}

          <InputSelect
            name="origin_female"
            label="Asal Induk"
            options={data.opts?.femaleOriginOptions}
          />

          {cempekForm ? (
            <InputText name="birth_condition" label="Kondisi Lahir" />
          ) : (
            <TextArea name="description" label="Keterangan" />
          )}
        </div>
        <div className="flex flex-col">
          <div className="space-y-6">
            {cempekForm ? (
              <>
                <InputDate name="birth_date" label="Tgl Lahir" />
                <InputSelect
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
                <InputSelect
                  name="origin"
                  label={`Asal ${data.animalTitle}`}
                  options={data.opts?.originOptions}
                />
                <InputText
                  name="weight"
                  label={`Berat ${data.animalTitle}`}
                  type="number"
                />
                <InputText
                  name="purchase_price"
                  label="Harga Beli"
                  type="number"
                  rupiah
                />
              </>
            )}
            <InputSelect
              name="origin_male"
              label="Asal Pejantan"
              options={data.opts?.maleOriginOptions ?? []}
            />
            {cempekForm ? (
              <TextArea name="description" label="Keterangan" />
            ) : (
              <div className="">
                <p className="mb-7 font-semibold">
                  Sertifikat {data.animalTitle} {data.genderTitle}
                </p>
                <InputCertificate name="files" label="Upload Sertifikat" />
              </div>
            )}
          </div>
          <div
            className={cn(
              'flex justify-end gap-3',
              cempekForm ? 'mt-10' : 'pt-32 md:mt-auto'
            )}
          >
            <Button
              type="button"
              variant="outline"
              className="w-36"
              onClick={() => router.replace(`/${data.animal}/male`)}
              disabled={methods.formState.isSubmitting}
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              className="w-36"
              isLoading={methods.formState.isSubmitting}
            >
              SAVE
            </Button>
          </div>
        </div>
      </Form>
    </>
  )
}

export default AnimalForm
