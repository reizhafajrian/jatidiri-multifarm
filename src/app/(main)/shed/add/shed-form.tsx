"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import useSWR from "swr"

import { Api } from "@/lib/api"
import { shedSchema } from "@/lib/schemas"
import { IShed } from "@/store/slices/shedSlice"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import Form from "@/components/ui/Form"
import InputRadio from "@/components/ui/InputRadio"
import InputSelect from "@/components/ui/InputSelect"
import InputText from "@/components/ui/InputText"

export default function ShedForm() {
  const router = useRouter()
  const { user, addShed } = useStore()

  const { data, isLoading } = useSWR(`/api/feed/get`, Api.get)

  const methods = useForm<IShed>({ resolver: zodResolver(shedSchema) })

  return (
    <Form
      onSubmit={(values) => addShed({ ...values, created_by: user?.id })}
      methods={methods}
      className="space-y-4"
    >
      <h1 className="mb-5 text-base font-semibold">Tambah Data Kandang</h1>
      <div className="mb-6 flex items-center gap-4">
        {[
          { value: "goat", label: "Kambing" },
          { value: "sheep", label: "Domba" },
          { value: "cow", label: "Sapi" },
        ].map((item, idx) => (
          <InputRadio
            key={idx}
            label={item.label}
            name="animal_type"
            value={item.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          {/* <InputText name="shed_code" label="No Kandang" disabled /> */}
          <InputSelect
            name="default_feed"
            label="Pakan"
            options={data?.map((res: any) => ({
              value: res.id,
              name: res.name,
            }))}
            isLoading={isLoading}
          />
          {/* <InputText name="age_range" label="Range Usia" /> */}
        </div>
        <div className="space-y-6">
          {/* <InputText name="animal_weight" label="Berat Hewan" />
          <InputText name="feed_weight" label="Berat Pakan" /> */}
          <InputText name="description" label="Keterangan" />
        </div>
      </div>
      <div className="mt-28 flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-36"
          onClick={() => router.replace("/shed/goat")}
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
    </Form>
  )
}
