"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { shedAnimalSchema } from "@/lib/schemas"
import useShedAnimalList from "@/hooks/useShedAnimalList"
import useShedAnimalTags from "@/hooks/useshedAnimalTags"
import { IShedAnimal } from "@/store/slices/shedSlice"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import Form from "@/components/ui/Form"
import { Icons } from "@/components/ui/Icons"
import InputSelect from "@/components/ui/InputSelect"
import InputText from "@/components/ui/InputText"

export default function ShedAnimalForm() {
  const [open, setOpen] = useState(false)
  const { animal, shed_id, addShedAnimal } = useStore()

  const { eartagOptions, mutate: mutateEartags } = useShedAnimalTags()
  const { mutate: mutateTable } = useShedAnimalList()

  const methods = useForm<IShedAnimal>({
    resolver: zodResolver(shedAnimalSchema),
  })

  const onSubmit: SubmitHandler<IShedAnimal> = async (values) => {
    await addShedAnimal({ ...values, id: shed_id })
    mutateTable()
    mutateEartags()
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <span className="hidden md:block">Tambah {animal.title}</span>
          <Icons.pen className="h-4 w-4 fill-white md:ml-3" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form methods={methods} onSubmit={(values) => onSubmit(values)}>
          <DialogTitle>Tambah Data {animal.title}</DialogTitle>
          <div className="mb-8 space-y-6">
            <InputSelect
              name="eartag_code"
              label="No Eartag"
              options={eartagOptions}
            />
            <InputText name="description" label="Keterangan" />
          </div>
          <div className="flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="w-36"
                disabled={methods.formState.isSubmitting}
              >
                CANCEL
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="w-36"
              isLoading={methods.formState.isSubmitting}
            >
              SAVE
            </Button>
          </div>
        </Form>
      </DialogContent>
    </DialogRoot>
  )
}
