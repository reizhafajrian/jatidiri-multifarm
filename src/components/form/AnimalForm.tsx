'use client'
import {
  Button,
  Form,
  InputCertificate,
  InputCheckbox,
  InputDate,
  InputSelect,
  InputText,
  TextArea,
} from '@/components/shared'
import useAnimalForm from '@/hooks/useAnimalForm'
import { adultSchema, cempekSchema } from '@/lib/schemas'
import { IAnimal } from '@/store/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IProps {
  formType: 'add' | 'edit'
  cempekForm?: boolean
  gender?: string
  values?: any
  id?: string
  options: {
    indukanOpts: { name: string; value: string }[]
    pejantanOpts: { name: string; value: string }[]
  }
}

const AnimalForm: FC<IProps> = (props) => {
  const { formType, cempekForm, gender, values, id, options } = props
  const data = useAnimalForm({ formType, cempekForm, gender })
  const router = useRouter()

  const methods = useForm<IAnimal>({
    resolver: zodResolver(cempekForm ? cempekSchema : adultSchema),
    defaultValues: formType == 'edit' ? values : {},
  })

  const onSubmit: SubmitHandler<IAnimal> = async (values) => {
    const formValues = {
      ...values,
      cempek: cempekForm ? 'true' : 'false',
      created_by: data.created_by,
      _id: id,
      animal: data.animal,
      gender,
    }

    if (formType === 'add') {
      data.addAnimal(formValues, router)
    } else {
      data.editAnimal(formValues, router)
    }
  }

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <h1 className="mb-6 text-base font-semibold" suppressHydrationWarning>
        {data.title}
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-6">
          {cempekForm ? (
            <>
              <InputText name="type" label="Jenis Cempek" />
              <InputText name="birth_weight" label="Berat Lahir" />
              <InputSelect
                name="origin_female"
                label="Asal Induk"
                options={options.indukanOpts}
              />
              <InputText name="birth_condition" label="Kondisi Lahir" />
              <div>
                <p className="mb-7 font-semibold">
                  Sertifikat {data.animalTitle} Cempek
                </p>
                <InputCertificate name="files" currentValue={{ gender }} />
              </div>
            </>
          ) : (
            <>
              <InputCheckbox
                name={gender === 'true' ? 'pejantan' : 'indukan'}
                label={gender === 'true' ? 'Pejantan' : 'Indukan'}
              />
              <InputText name="type" label={`Jenis ${data.animalTitle}`} />
              <InputDate name="arrival_date" label="Tgl Tiba" />
              <InputDate name="birth_date" label="Tgl Lahir" />
              <InputText name="origin_female" label="Asal Induk" />
              <TextArea name="description" label="Keterangan" />
            </>
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
                <InputSelect
                  name="origin_male"
                  label="Asal Pejantan"
                  options={options.pejantanOpts}
                />
                <TextArea name="description" label="Keterangan" />
              </>
            ) : (
              <>
                <InputText name="origin" label={`Asal ${data.animalTitle}`} />
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
                <InputText name="origin_male" label="Asal Pejantan" />
                <div>
                  <p className="mb-7 font-semibold">
                    Sertifikat {data.animalTitle} {data.genderTitle}
                  </p>
                  <InputCertificate name="files" currentValue={{ gender }} />
                </div>
              </>
            )}
          </div>
          <div className="flex justify-end gap-3 pt-32 md:mt-auto">
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
      </div>
    </Form>
  )
}

export default AnimalForm
