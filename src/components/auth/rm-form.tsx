"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { memberSchema, userType } from "@/lib/schemas/auth"
import useStore from "@/store/useStore"
import { Button, buttonVariants } from "@/components/ui/button"
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

interface IProps {
  formType: "add" | "edit"
  values?: any
}

export default function MemberForm({ formType, values: data }: IProps) {
  const [open, setOpen] = useState(false)

  const { register, updateUser } = useStore()
  const schema = memberSchema
  const title = `${formType == "add" ? "Tambah" : "Edit"} Member`

  const methods = useForm<userType>({
    resolver: zodResolver(schema),
    defaultValues: formType == "edit" ? data : {},
  })

  const onSubmit: SubmitHandler<userType> = async (values) => {
    if (formType === "add") {
      await register(values)
    } else {
      await updateUser({ ...values, _id: data.id })
    }
    methods.reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {formType === "add" ? (
        <DialogTrigger className={buttonVariants()}>
          <span className="text-sm">Tambah Member</span>
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button variant="edit" size="xs" />
        </DialogTrigger>
      )}

      <DialogContent>
        <div className="mb-6 flex items-center justify-between">
          <DialogTitle className="mb-0">{title}</DialogTitle>
          <DialogClose>
            <Icons.x />
          </DialogClose>
        </div>
        <Form methods={methods} onSubmit={onSubmit} className="mt-5 space-y-4">
          <InputText name="firstName" label="First Name" />
          <InputText name="lastName" label="Last Name" />
          <InputText name="email" label="Email" />
          <InputText name="phone" label="No Whatsapp" />
          <InputSelect
            name="role"
            label="Role"
            options={[
              { name: "Direksi", value: "direksi" },
              { name: "Keuangan", value: "keuangan" },
              { name: "Manajer Kandang", value: "manajer-kandang" },
            ]}
          />
          {formType === "add" && (
            <InputText name="password" label="Password" isSecured />
          )}
          <div className="grid grid-cols-2 gap-3">
            <DialogClose>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                disabled={methods.formState.isSubmitting}
                onClick={() => methods.reset()}
              >
                CANCEL
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="w-full"
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
