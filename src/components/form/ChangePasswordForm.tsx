'use client'
import { changePassSchema } from '@/data/validations'
import { IChangePass, useAuthStore } from '@/store/auth'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, InputText } from '../shared'

export default function ChangePasswordForm() {
  const router = useRouter()
  const { changePassword } = useAuthStore()

  const changePassHandler = async (values: IChangePass) => {
    try {
      await changePassword(values)
      router.replace('/home')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={{} as IChangePass}
      validationSchema={changePassSchema}
      validateOnChange={false}
      onSubmit={(values) => changePassHandler(values)}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <InputText
            name="old_pass"
            label="Old Password"
            isSecured
            defaultValue={values.old_pass}
            onChange={handleChange}
            errorMsg={errors.old_pass}
            disabled={isSubmitting}
          />
          <div className="grid gap-6">
            <InputText
              name="new_pass"
              label="New Password"
              isSecured
              defaultValue={values.new_pass}
              onChange={handleChange}
              errorMsg={errors.new_pass}
              disabled={isSubmitting}
            />
            <InputText
              name="confirm_pass"
              label="Confirm Password"
              isSecured
              defaultValue={values.confirm_pass}
              onChange={handleChange}
              errorMsg={errors.confirm_pass}
              disabled={isSubmitting}
            />
            <div className="flex justify-end gap-3">
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
