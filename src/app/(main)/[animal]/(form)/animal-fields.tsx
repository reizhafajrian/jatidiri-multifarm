import { usePathname } from "next/navigation"

import InputDate from "@/components/ui/InputDate"
import InputText from "@/components/ui/InputText"
import TextArea from "@/components/ui/TextArea"

import InputCertificate from "./certificate-input"
import { EditWeightForm } from "./edit-weight-form"

interface IProps {
  data: any
  gender: string
  children: React.ReactNode
  form: any
}

export default function AnimalFields({ data, gender, children, form }: IProps) {
  const pathname = usePathname()
  const isEditForm = pathname.includes("edit")

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-6">
        <InputText name="type" label={`Jenis ${data.animalTitle}`} />
        <InputDate name="arrival_date" label="Tgl Tiba" />
        <InputDate name="birth_date" label="Tgl Lahir" />
        <InputText name="origin_female" label="Asal Induk" />
        <InputText name="supplier" label="Nama dan Asal Supplier" />
        <div>
          <p className="mb-7 font-semibold">
            Sertifikat {data.animalTitle} {data.genderTitle}
          </p>
          <InputCertificate
            name="files"
            currentValue={{
              gender,
              birth_date: form.getValues("birth_date"),
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="space-y-6">
          <InputText name="origin" label={`Asal ${data.animalTitle}`} />
          {isEditForm ? (
            <EditWeightForm />
          ) : (
            <InputText
              name="weight"
              label={`Berat ${data.animalTitle}`}
              type="number"
            />
          )}
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
        </div>
        <div className="flex justify-end gap-3 pt-32 md:mt-auto">
          {/* action button */}
          {children}
        </div>
      </div>
    </div>
  )
}
