"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Camera } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { SubmitHandler, useController, useForm } from "react-hook-form"

import { editMemberSchema } from "@/lib/schemas"
import { IUser } from "@/store/types"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import Form from "@/components/ui/Form"
import InputSelect from "@/components/ui/InputSelect"
import InputText from "@/components/ui/InputText"

export default function EditProfileForm() {
  const router = useRouter()
  const { user, updateProfile } = useStore()
  const [preview, setPreview] = useState<string>()

  const methods = useForm<IUser>({
    resolver: zodResolver(editMemberSchema),
    defaultValues: user ?? {},
  })

  const onSubmit: SubmitHandler<IUser> = async (values) => {
    await updateProfile({ ...values, _id: user?.id }, router)
  }

  const { field } = useController({ name: "avatar", control: methods.control })

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setPreview(URL.createObjectURL(acceptedFiles[0]))
      field.onChange(acceptedFiles)
    },
  })

  return (
    <div className="space-y-4">
      <div className="flex gap-6">
        {/* CHANGE AVATAR */}
        <div
          {...getRootProps({ className: "dropzone" })}
          className="relative h-16 w-16 cursor-pointer rounded-full md:h-20 md:w-20"
        >
          <input
            {...getInputProps()}
            name="avatar"
            disabled={methods.formState.isSubmitting}
          />
          {preview ? (
            <Image
              src={preview!}
              alt="avatar"
              className="rounded-full object-cover"
              fill
            />
          ) : (
            <div className="h-16 w-16 rounded-full bg-black md:h-20 md:w-20" />
          )}
          <div className="absolute -bottom-1 -right-2 grid h-8 w-8 place-items-center rounded-full bg-neutral-2 md:h-10 md:w-10">
            <Camera className="w-5" />
          </div>
        </div>

        <div className="space-y-2">
          {user && (
            <>
              <p className="text-base font-semibold capitalize">
                {`${user.firstName} ${user.lastName}`}
              </p>
              <p className="text-sm text-neutral-4">{user.email}</p>
              <p className="w-fit rounded-md bg-primary-1 px-1 py-[2px] text-[10px] font-light capitalize">
                {user.role}
              </p>
            </>
          )}
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
