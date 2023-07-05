"use client"

import { usePathname, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { shedSchema, shedType } from "@/lib/schemas/shed"
import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import Form from "@/components/ui/form"
import InputRadio from "@/components/ui/input-radio"
import InputSelect from "@/components/ui/input-select"
import InputText from "@/components/ui/input-text"
import { toast } from "@/components/ui/toast"

export default function FormShed() {
  const path = usePathname()
  const router = useRouter()
  const { addShed } = useStore()

  const { data, loading } = useDataList({ url: `/api/feed/get` })

  const feedOptions = data?.map((res: any) => ({
    value: res.id,
    name: res.name,
  }))

  const animalList = [
    { value: "goat", label: "Kambing" },
    { value: "sheep", label: "Domba" },
    { value: "cow", label: "Sapi" },
  ]

  const form = useForm<shedType>({ resolver: zodResolver(shedSchema) })

  const onSubmit = async (values: shedType) => {
    try {
      const res = await addShed(values)
      toast({ type: "success", message: res.message })
      router.replace(path.replace("add", "") + "/" + values.animal_type)
    } catch (err: any) {
      toast({ type: "error", message: err.errors[0].msg })
    }
  }

  return (
    <Form onSubmit={onSubmit} methods={form} className="space-y-4">
      <h1 className="mb-5 text-base font-semibold">Tambah Data Kandang</h1>
      <div className="mb-6 flex items-center gap-4">
        {animalList.map((item) => (
          <InputRadio
            key={item.value}
            label={item.label}
            name="animal_type"
            value={item.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputSelect
            name="default_feed"
            label="Pakan"
            options={feedOptions}
            isLoading={loading}
          />
        </div>
        <div className="space-y-6">
          <InputText name="description" label="Keterangan" />
        </div>
      </div>
      <div className="mt-28 flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-36"
          onClick={() => router.back()}
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
    </Form>
  )
}
