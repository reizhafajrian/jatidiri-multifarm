"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { editMemberSchema, memberSchema } from "@/lib/schemas"
import { IUser } from "@/store/slices/authSlice"
import useStore from "@/store/useStore"
import { Button, buttonVariants } from "@/components/ui/Button"
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

interface IProps {
  formType: "add" | "edit"
  values?: any
}

export default function MemberForm({ formType, values: data }: IProps) {
  const [open, setOpen] = useState(false)

  const { register, updateUser } = useStore()
  const schema = formType === "add" ? memberSchema : editMemberSchema
  const title = `${formType == "add" ? "Tambah" : "Edit"} Member`

  const methods = useForm<IUser>({
    resolver: zodResolver(schema),
    defaultValues: formType == "edit" ? data : {},
  })

  const onSubmit: SubmitHandler<IUser> = async (values) => {
    if (formType === "add") {
      await register(values)
    } else {
      await updateUser({ ...values, _id: data.id })
    }
    methods.reset()
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
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
    </DialogRoot>
  )
}
