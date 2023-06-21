"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { editMemberSchema } from "@/lib/schemas"
import { IUser } from "@/store/slices/authSlice"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import Form from "@/components/ui/Form"
import InputSelect from "@/components/ui/InputSelect"
import InputText from "@/components/ui/InputText"

import AvatarInput from "./avatar-input"

interface IProps {
  user: any
}

export default function EditProfileForm({ user }: IProps) {
  const router = useRouter()
  const { updateProfile } = useStore()

  const methods = useForm<IUser>({
    resolver: zodResolver(editMemberSchema),
    defaultValues: user ?? {},
  })

  const onSubmit: SubmitHandler<IUser> = async (values) => {
    await updateProfile({ ...values, _id: user?.id })
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-6">
        <AvatarInput methods={methods} />

        <div className="space-y-2">
          <p className="text-base font-semibold capitalize">
            {`${user?.firstName} ${user?.lastName}`}
          </p>
          <p className="text-sm text-neutral-4">{user?.email}</p>
          <p className="w-fit rounded-md bg-primary-1 px-1 py-[2px] text-[10px] font-light capitalize">
            {user?.role}
          </p>
        </div>
      </div>
      <Form methods={methods} onSubmit={onSubmit} className="space-y-4">
        <p className="font-semibold">Profile</p>
        <div className="grid gap-4 md:grid-cols-2">
          <InputText name="firstName" label="First Name" />
          <InputText name="lastName" label="Last Name" />
          <InputSelect
            name="gender"
            label="Jenis Kelamin"
            options={[
              { name: "perempuan", value: "female" },
              { name: "laki-laki", value: "male" },
            ]}
          />
          <InputText name="phone" label="Phone Number" />
        </div>
        <InputText name="email" label="Email" />
        <InputText name="jobTitle" label="Job Title" />
        <div className="flex justify-end gap-3 pt-10">
          <Button
            type="button"
            variant="outline"
            className="w-36"
            onClick={() => router.replace("/dashboard")}
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
    </div>
  )
}
