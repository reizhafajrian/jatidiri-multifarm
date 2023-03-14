'use client'
import { editProfileSchema as schema } from '@/data/validations'
import { IUser, useAuthStore } from '@/store/auth'

import { useRouter } from 'next/navigation'
import { Field, Form } from '../shared'

export default function EditProfileForm() {
  const router = useRouter()
  const { user, editProfile } = useAuthStore()

  const onSubmit = async (values: IUser) => {
    // try {
    //   await editProfile(values)
    //   router.replace('/home')
    // } catch (e) {
    //   console.log(e)
    // }
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
      <Form
        values={user}
        schema={schema}
        onSubmit={onSubmit}
        className="space-y-4"
      >
        <p className="font-semibold">Profile</p>
        <div className="grid grid-cols-2 gap-4">
          <Field type="input" name="first_name" label="First Name" />
          <Field type="input" name="last_name" label="Last Name" />
          <Field
            type="select"
            name="gender"
            label="Jenis Kelamin"
            options={[
              { name: 'perempuan', value: 'female' },
              { name: 'laki-laki', value: 'male' },
            ]}
          />
          <Field type="input" name="phone_number" label="Phone Number" />
        </div>
        <Field type="input" name="email" label="Email" />
        <Field type="input" name="job_title" label="Job Title" />
        <div className="flex justify-end gap-3 pt-10">
          <Field type="submit" cancelHandler={() => router.replace('/home')} />
        </div>
      </Form>
    </div>
  )
}
