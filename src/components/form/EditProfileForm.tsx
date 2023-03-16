'use client'
import { editProfileSchema } from '@/lib/schemas'
import { IUser, useAuthStore } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, InputSelect, InputText } from '../shared'

export default function EditProfileForm() {
  const router = useRouter()
  const { user, editProfile } = useAuthStore()

  const methods = useForm<IUser>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: user,
  })

  const onSubmit: SubmitHandler<IUser> = async (values) => {
    console.log(values)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-6">
        <div className="h-20 w-20 rounded-full bg-black"></div>
        <div className="space-y-2">
          <p className="text-base font-semibold capitalize">{`${user.first_name} ${user.last_name}`}</p>
          <p className="text-sm text-neutral-4">{user.email}</p>
          <p className="w-fit rounded-md bg-primary-1 px-1 py-[2px] text-[10px] font-light">
            Super Admin
          </p>
        </div>
      </div>
      <Form methods={methods} onSubmit={onSubmit} className="space-y-4">
        <p className="font-semibold">Profile</p>
        <div className="grid grid-cols-2 gap-4">
          <InputText name="first_name" label="First Name" />
          <InputText name="last_name" label="Last Name" />
          <InputSelect
            name="gender"
            label="Jenis Kelamin"
            options={[
              { name: 'perempuan', value: 'female' },
              { name: 'laki-laki', value: 'male' },
            ]}
          />
          <InputText name="phone_number" label="Phone Number" />
        </div>
        <InputText name="email" label="Email" />
        <InputText name="job_title" label="Job Title" />
        <div className="flex justify-end gap-3 pt-10">
          <Button
            type="button"
            variant="outline"
            className="w-36"
            onClick={() => router.replace('/home')}
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
