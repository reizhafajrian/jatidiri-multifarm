"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { shedAnimalSchema } from "@/lib/schemas/shed"
import { IShedAnimal } from "@/store/slices/shedSlice"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Form from "@/components/ui/form"
import { Icons } from "@/components/ui/Icons"
import InputSelect from "@/components/ui/input-select"
import InputText from "@/components/ui/input-text"

export default function FormShedAnimal() {
  const router = useRouter()
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const {
    animal,
    animalTitle: title,
    addShedAnimal,
    shedAnimalTags,

  } = useStore()


  const methods = useForm<IShedAnimal>({
    resolver: zodResolver(shedAnimalSchema),
  })

  const onSubmit: SubmitHandler<IShedAnimal> = async (values) => {
    const shed_id = path.split("/")[3]
    addShedAnimal({ ...values, id: shed_id })
    setOpen(false)
    window.location.reload()
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
        <DialogHeader>
          <DialogTitle>Tambah Data {title}</DialogTitle>
        </DialogHeader>
        <Form methods={methods} onSubmit={(values) => onSubmit(values)}>
          <div className="mb-8 space-y-6">
            <InputSelect
              name="eartag_code"
              label="No Eartag"
              options={shedAnimalTags}
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
