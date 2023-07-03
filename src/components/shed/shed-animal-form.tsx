"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { shedAnimalSchema } from "@/lib/schemas/shed"
import useShedAnimalList from "@/hooks/useShedAnimalList"
import useShedAnimalTags from "@/hooks/useshedAnimalTags"
import { IShedAnimal } from "@/store/slices/shedSlice"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form from "@/components/ui/form"
import { Icons } from "@/components/ui/Icons"
import InputSelect from "@/components/ui/input-select"
import InputText from "@/components/ui/input-text"

export default function ShedAnimalForm() {
  const [open, setOpen] = useState(false)
  const { animal, animalTitle: title, shed_id, addShedAnimal } = useStore()

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <span className="hidden md:block">Tambah {title}</span>
          <Icons.pen className="h-4 w-4 fill-white md:ml-3" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form methods={methods} onSubmit={(values) => onSubmit(values)}>
          <DialogTitle>Tambah Data {title}</DialogTitle>
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
    </Dialog>
  )
}
