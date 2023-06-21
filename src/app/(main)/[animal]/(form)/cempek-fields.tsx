import { usePathname } from "next/navigation"

import InputDate from "@/components/ui/InputDate"
import InputSelect from "@/components/ui/InputSelect"
import InputText from "@/components/ui/InputText"
import TextArea from "@/components/ui/TextArea"

import InputCertificate from "./certificate-input"
import { EditWeightForm } from "./edit-weight-form"

interface IProps {
  data: any
  children: React.ReactNode
  options: {
    indukanOpts: { name: string; value: string }[]
    pejantanOpts: { name: string; value: string }[]
  }
}

export default function CempekFields({ data, children, options }: IProps) {
  const pathname = usePathname()
  const isEditForm = pathname.includes("edit")

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-6">
        <InputText name="type" label="Jenis Cempek" />
        {isEditForm ? (
          <EditWeightForm />
        ) : (
          <InputText name="birth_weight" label="Berat Lahir" />
        )}
        <InputSelect
          name="origin_female"
          label="Asal Induk"
          options={options.indukanOpts}
        />
        <InputText name="birth_condition" label="Kondisi Lahir" />
        <TextArea name="description" label="Keterangan" />
      </div>
      <div className="flex flex-col">
        <div className="space-y-6">
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
              currentValue={
                {
                  // gender
                }
              }
              isCempek
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-32 md:mt-auto">
          {/* action button */}
          {children}
        </div>
      </div>
    </div>
  )
}
