"use client"

import { usePathname, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { cempekSchema, cempekType } from "@/lib/schemas/animal"
import { cn } from "@/lib/utils"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import Form from "@/components/ui/form"
import InputDate from "@/components/ui/input-date"
import InputSelect from "@/components/ui/input-select"
import InputText from "@/components/ui/input-text"
import TextArea from "@/components/ui/text-area"
import { toast } from "@/components/ui/toast"

import CertificateInput from "./certificate-input"
import { WeightHistory } from "./weight-history"

interface IProps {
  data?: cempekType
  options: {
    indukanOpts: { name: string; value: string }[]
    pejantanOpts: { name: string; value: string }[]
  }
}

export default function FormCempek({ data, options }: IProps) {
  const path = usePathname()
  const router = useRouter()

  const [addHandler, editHandler, title] = useStore((s) => [
    s.addCempekAnimal,
    s.editCempekAnimal,
    s.animalTitle,
  ])

  const formTitle = `${data ? "Edit" : "Tambah"} Data ${title} Cempek`

  const form = useForm<cempekType>({
    resolver: zodResolver(cempekSchema),
    defaultValues: {
      ...data,
      cempek: "true",
      gender: data?.gender.toString(),
    },
  })

  const onSubmit = async (values: cempekType) => {
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
              <InputText name="type" label="Jenis Cempek" />
              <div
                className={cn(
                  "grid items-center gap-4",
                  data ? "grid-cols-2" : "grid-cols-1"
                )}
              >
                <InputText type="number" name="weight" label="Berat Lahir" />
                {data && <WeightHistory animal_id={data._id!} />}
              </div>
              <InputSelect
                name="indukan_id"
                label="Asal Induk"
                options={options.indukanOpts}
                disabled={data ? true : false}
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
                    { name: "Jantan", value: "true" },
                    { name: "Betina", value: "false" },
                  ]}
                />
                <InputSelect
                  name="pejantan_id"
                  label="Asal Pejantan"
                  options={options.pejantanOpts}
                  disabled={data ? true : false}
                />
                <div>
                  <p className="mb-7 font-semibold capitalize">
                    sertifikat {title} cempek
                  </p>
                  <CertificateInput name="files" currentValue={{}} isCempek />
                </div>
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
          {`detail data ${title} cempek`}
        </h1>
      )}
    </>
  )
}
