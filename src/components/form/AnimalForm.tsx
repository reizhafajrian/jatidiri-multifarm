'use client'
import {
  Button,
  Form,
  InputCertificate,
  InputDate,
  InputSelect,
  InputText,
} from '@/components/shared'
import { getAnimalFormContent, getAnimalFormOptions } from '@/lib/data'
import { adultSchema, cempekSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'
import { IAnimal } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface AnimalFormProps {
  formType: 'add' | 'edit'
  cempekForm?: boolean
  gender?: string
  animal: string
  values?: any
  id?: string
}

const AnimalForm: FC<AnimalFormProps> = (props) => {
  const { formType, cempekForm, gender, animal: test, values, id } = props
  const router = useRouter()
  const { user, animal, addAnimal, editAnimal } = useStore()

  const opt = getAnimalFormOptions(test)
  const content = getAnimalFormContent({
    animal: animal.name,
    gender,
    formType,
    cempekForm,
  })

  const data = {
    cempek: cempekForm ? 'true' : 'false',
    created_by: user?.id,
    _id: id,
    animal,
    gender,
  }

  const methods = useForm<IAnimal>({
    resolver: zodResolver(cempekForm ? cempekSchema : adultSchema),
    defaultValues: formType == 'edit' ? values : {},
  })

  const onSubmit: SubmitHandler<IAnimal> = async (values) => {
    if (formType === 'add') {
      await addAnimal(values, router)
    } else {
      await editAnimal(values, router)
    }
  }

  return (
    <>
      <h1 className="mb-6 text-base font-semibold">{content.title}</h1>
      <Form
        methods={methods}
        onSubmit={(values) => onSubmit({ ...values, ...data })}
        className="grid grid-cols-2 gap-4"
      >
        <div className="space-y-6">
          <InputSelect
            name="type"
            label={`Jenis ${cempekForm ? 'Cempek' : animal.title}`}
            options={opt?.typeOptions}
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
            options={opt?.femaleOriginOptions}
          />

          {cempekForm ? (
            <InputText name="birth_condition" label="Kondisi Lahir" />
          ) : (
            <InputCertificate name="files" label="Upload Sertifikat" />
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
                  label={`Asal ${animal.title}`}
                  options={opt?.originOptions}
                />
                <InputText name="weight" label={`Berat ${animal.title}`} />
                <InputText name="purchase_price" label="Harga Beli" />
              </>
            )}
            <InputSelect
              name="origin_male"
              label="Asal Pejantan"
              options={opt?.maleOriginOptions}
            />
            <InputText name="description" label="Keterangan" />
          </div>
          <div
            className={cn(
              'flex justify-end gap-3',
              cempekForm ? 'mt-10' : 'mt-auto'
            )}
          >
            <Button
              type="button"
              variant="outline"
              className="w-36"
              onClick={() => router.replace(`/${animal}/male`)}
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
