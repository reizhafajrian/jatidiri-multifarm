"use client"

import { usePathname, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { adultSchema, adultType } from "@/lib/schemas/animal"
import { cn } from "@/lib/utils"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import Form from "@/components/ui/form"
import InputDate from "@/components/ui/input-date"
import InputText from "@/components/ui/input-text"
import TextArea from "@/components/ui/text-area"
import { toast } from "@/components/ui/toast"

import CertificateInput from "./certificate-input"
import { WeightHistory } from "./weight-history"

interface IProps {
  data?: adultType
}

export default function FormAdult({ data }: IProps) {
  const path = usePathname()
  const router = useRouter()

  const [addHandler, editHandler, title, gender, genderTitle, certificate] =
    useStore((s) => [
      s.addAdultAnimal,
      s.editAdultAnimal,
      s.animalTitle,
      s.gender,
      s.genderTitle,
      s.certificate,
    ])
  const formTitle = `${data ? "Edit" : "Tambah"} Data ${title} ${genderTitle}`

  const form = useForm<adultType>({
    resolver: zodResolver(adultSchema),
    defaultValues: {
      ...data,
      cempek: "false",
    },
  })

  const onSubmit = async (values: adultType) => {
    try {
      const handler = data ? editHandler : addHandler
      const res = await handler(values)
      toast({ type: "success", message: res.message })
      router.replace(path.replace(data?._id ?? "add", ""))
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  return (
    <>
      <div>
        <h1 className="mb-6 text-base font-semibold capitalize">{formTitle}</h1>
        <Form methods={form} onSubmit={onSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-6">
              <InputText
                name="type"
                label={`Jenis ${title}`}
                onChange={(e: any) => {
                  useStore.setState((s) => ({
                    ...s,
                    certificate: { ...certificate, type: e.target.value },
                  }))
                  form.setValue("type", e.target.value)
                }}
              />
              <InputDate name="arrival_date" label="Tgl Tiba" />
              <InputDate
                name="birth_date"
                label="Tgl Lahir"
                onChange={(value: Date) => {
                  useStore.setState((s) => ({
                    ...s,
                    certificate: {
                      ...certificate,
                      birth_date: value ? new Date(value) : undefined,
                    },
                  }))
                  form.setValue("birth_date", value)
                }}
              />
              <InputText
                name="origin_female"
                label="Asal Induk"
                disabled={data ? true : false}
              />
              <InputText name="supplier" label="Nama dan Asal Supplier" />
              <div>
                <p className="mb-7 font-semibold capitalize">
                  sertifikat {title} {genderTitle}
                </p>
                <CertificateInput name="files" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="space-y-6">
                <InputText name="origin" label={`Asal ${title}`} />
                <div
                  className={cn(
                    "grid items-center gap-4",
                    data ? "grid-cols-2" : "grid-cols-1"
                  )}
                >
                  <InputText
                    name="weight"
                    label={`Berat ${title}`}
                    type="number"
                  />
                  {data && <WeightHistory animal_id={data._id!} />}
                </div>
                <InputText
                  name="purchase_price"
                  label="Harga Beli"
                  type="number"
                  rupiah
                />
                <InputText
                  name="origin_male"
                  label="Asal Pejantan"
                  disabled={data ? true : false}
                />
                <TextArea name="description" label="Keterangan" />
                {gender === "true" && (
                  <div className="flex items-center gap-3">
                    <label htmlFor="pejantan" className="text-base font-medium">
                      Pejantan
                    </label>
                    <input
                      type="checkbox"
                      id="pejantan"
                      {...form.register("pejantan")}
                      className="h-4 w-4 accent-primary-4"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3 pt-32 md:mt-auto">
                <Button
                  type="button"
                  variant="outline"
                  className="w-36"
                  onClick={() =>
                    router.replace(path.replace(data?._id ?? "add", ""))
                  }
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
      </div>
      {data && (
        <h1 className="mb-6 text-base font-semibold capitalize">
          {`detail data ${title} ${genderTitle}`}
        </h1>
      )}
    </>
  )
}
