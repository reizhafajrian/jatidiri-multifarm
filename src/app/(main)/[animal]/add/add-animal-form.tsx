"use client"

import { FC } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  adultFormValues,
  adultSchema,
  cempekFormValues,
  cempekSchema,
} from "@/lib/schemas"
import useAnimalForm from "@/hooks/useAnimalForm"
import { Button } from "@/components/ui/Button"
import Form from "@/components/ui/Form"
import InputCheckbox from "@/components/ui/InputCheckbox"
import InputDate from "@/components/ui/InputDate"
import InputSelect from "@/components/ui/InputSelect"
import InputText from "@/components/ui/InputText"
import TextArea from "@/components/ui/TextArea"

import InputCertificate from "../certificate-input"

interface IProps {
  cempekForm?: boolean
  gender?: string
  options: {
    indukanOpts: { name: string; value: string }[]
    pejantanOpts: { name: string; value: string }[]
  }
}

const AddAnimalForm: FC<IProps> = (props) => {
  const { cempekForm, gender, options } = props
  const data = useAnimalForm({ formType: "add", cempekForm, gender })
  const router = useRouter()
  const resolver = zodResolver(cempekForm ? cempekSchema : adultSchema)
  type formType = adultFormValues | cempekFormValues

  const form = useForm<formType>({ resolver })

  const onSubmit = async (values: formType) => {
    const formValues = {
      ...values,
      cempek: cempekForm ? "true" : "false",
      created_by: data.created_by,
      animal: data.animal,
      gender,
    }

    await data.addAnimal(formValues, router)
  }

  return (
    <Form methods={form} onSubmit={onSubmit}>
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
              <TextArea name="description" label="Keterangan" />
            </>
          ) : (
            <>
              <InputText name="type" label={`Jenis ${data.animalTitle}`} />
              <InputDate name="arrival_date" label="Tgl Tiba" />
              <InputDate name="birth_date" label="Tgl Lahir" />
              <InputText name="origin_female" label="Asal Induk" />
              <InputText name="supplier" label="Nama dan Asal Supplier" />
              <div>
                <p className="mb-7 font-semibold">
                  Sertifikat {data.animalTitle} {data.genderTitle}
                </p>
                <InputCertificate name="files" currentValue={{ gender }} />
              </div>
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
                    { name: "Jantan", value: "male" },
                    { name: "Betina", value: "female" },
                  ]}
                />
                <InputSelect
                  name="origin_male"
                  label="Asal Pejantan"
                  options={options.pejantanOpts}
                />
                <div>
                  <p className="mb-7 font-semibold">
                    Sertifikat {data.animalTitle} Cempek
                  </p>
                  <InputCertificate
                    name="files"
                    currentValue={{ gender }}
                    isCempek
                  />
                </div>
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
                <TextArea name="description" label="Keterangan" />
                {gender === "true" && (
                  <div className="flex items-center gap-3">
                    <label htmlFor="pejantan" className="text-base font-medium">
                      Pejantan
                    </label>
                    <input
                      type="checkbox"
                      id="pejantan"
                      name="pejantan"
                      className="h-4 w-4 accent-primary-4"
                    />
                  </div>
                )}
              </>
            )}
          </div>
          <div className="flex justify-end gap-3 pt-32 md:mt-auto">
            <Button
              type="button"
              variant="outline"
              className="w-36"
              onClick={() => router.replace(`/${data.animal}/male`)}
              disabled={form.formState.isSubmitting}
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              className="w-36"
              isLoading={form.formState.isSubmitting}
            >
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default AddAnimalForm
