'use client'

import { IUser } from '@/data/interfaces'
import { editProfileSchema } from '@/data/validations'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, InputSelect, InputText } from '../shared'

export default function EditProfileForm() {
  const router = useRouter()

  const editProfileHandler = (values: IUser) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={{} as IUser}
      validationSchema={editProfileSchema}
      onSubmit={(values) => editProfileHandler(values)}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-6">
            <div className="h-20 w-20 rounded-full bg-black"></div>
            <div className="space-y-2">
              <p className="text-base font-semibold">John Doe</p>
              <p className="text-sm text-neutral-4">johndoe@gmail.com</p>
              <p className="w-fit rounded-md bg-primary-1 px-1 py-[2px] text-[10px] font-light">
                Super Admin
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-semibold">Profile</p>
            <div className="grid grid-cols-2 gap-4">
              <InputText
                name="name"
                label="Nama"
                defaultValue={values.name}
                onChange={handleChange}
                disabled={isSubmitting}
                errorMsg={errors.name}
              />
              <InputSelect
                name="gender"
                label="Jenis Kelamin"
                options={['female', 'male']}
                value={values.gender!}
                errorMsg={errors.gender}
                disabled={isSubmitting}
              />
              <InputText
                name="phone_number"
                label="Phone Number"
                defaultValue={values.phone_number}
                onChange={handleChange}
                disabled={isSubmitting}
                errorMsg={errors.phone_number}
              />
              <InputText
                name="email"
                label="Email"
                defaultValue={values.email}
                onChange={handleChange}
                disabled={isSubmitting}
                errorMsg={errors.email}
              />
            </div>
            <InputText
              name="job_title"
              label="Job Title"
              defaultValue={values.job_title}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.job_title}
            />
            <div className="flex justify-end gap-3 pt-10">
              <Button
                onClick={() => router.back()}
                intent="secondary"
                className="w-36 rounded-lg py-2"
              >
                cancel
              </Button>
              <Button
                type="submit"
                className={clsx(
                  'w-36 rounded-lg py-2',
                  isSubmitting && 'animate-pulse'
                )}
                disabled={isSubmitting}
              >
                save
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}
