"use client"

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

import AnimalFields from "../../animal-fields"
import CempekFields from "../../cempek-fields"
import AnimalDetail from "./animal-detail"

interface IProps {
  cempekForm?: boolean
  gender?: string
  values?: any
  id?: string
  options: {
    indukanOpts: { name: string; value: string }[]
    pejantanOpts: { name: string; value: string }[]
  }
}

type formType = adultFormValues | cempekFormValues

export default function EditAnimalForm({
  cempekForm,
  gender,
  values,
  id,
  options,
}: IProps) {
  const router = useRouter()
  const data = useAnimalForm({ formType: "edit", cempekForm, gender })

  const form = useForm<formType>({
    resolver: zodResolver(cempekForm ? cempekSchema : adultSchema),
    defaultValues: {
      ...values,
      cempek: cempekForm ? "true" : "false",
      created_by: data.created_by,
      _id: id,
      animal: data.animal,
      gender,
    },
  })

  const ActionButtons = (
    <>
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
    </>
  )

  return (
    <div>
      <Form methods={form} onSubmit={data.editAnimal}>
        <h1 className="mb-6 text-base font-semibold" suppressHydrationWarning>
          {data.title}
        </h1>
        {cempekForm ? (
          <CempekFields data={data} options={options}>
            {ActionButtons}
          </CempekFields>
        ) : (
          <AnimalFields data={data} gender={gender!} form={form}>
            {ActionButtons}
          </AnimalFields>
        )}
      </Form>
      <div className="">
        <h1 className="mb-6 text-base font-semibold" suppressHydrationWarning>
          {data.detailTitle}
        </h1>
        <AnimalDetail />
      </div>
    </div>
  )
}
