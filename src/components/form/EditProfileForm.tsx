'use client'
import { editMemberSchema } from '@/lib/schemas'
import { IUser } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { SubmitHandler, useController, useForm } from 'react-hook-form'
import { Button, Form, InputSelect, InputText } from '../shared'

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

  const { field } = useController({ name: 'avatar', control: methods.control })

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
          {...getRootProps({ className: 'dropzone' })}
          className="relative h-20 w-20 cursor-pointer rounded-full"
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
            <div className="h-20 w-20 rounded-full bg-black" />
          )}
          <div className="absolute -right-2 -bottom-1 grid h-10 w-10 place-items-center rounded-full bg-neutral-2">
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
        <div className="grid grid-cols-2 gap-4">
          <InputText name="firstName" label="First Name" />
          <InputText name="lastName" label="Last Name" />
          <InputSelect
            name="gender"
            label="Jenis Kelamin"
            options={[
              { name: 'perempuan', value: 'female' },
              { name: 'laki-laki', value: 'male' },
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
            onClick={() => router.replace('/dashboard')}
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
