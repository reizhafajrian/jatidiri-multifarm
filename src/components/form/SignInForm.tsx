'use client'
import { signinSchema } from '@/data/validations'
import { IUser, useAuthStore } from '@/store/auth'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, InputText } from '../shared'

export default function SignInForm() {
  const router = useRouter()
  const { user, signIn } = useAuthStore()

  const signinHandler = async (values: IUser) => {
    try {
      await signIn(values)
      router.push('/home')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={user}
      validationSchema={signinSchema}
      validateOnChange={false}
      onSubmit={(values) => signinHandler(values)}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputText
            name="email"
            label="Email"
            defaultValue={values.email}
            onChange={handleChange}
            disabled={isSubmitting}
            errorMsg={errors.email}
          />
          <InputText
            isSecured
            name="password"
            label="Password"
            defaultValue={values.password}
            onChange={handleChange}
            disabled={isSubmitting}
            errorMsg={errors.password}
          />
          <div className="grid gap-8">
            <button
              className="ml-auto text-base font-medium"
              onClick={() => router.replace('/signin')}
            >
              Forgot Password?
            </button>
            <Button
              type="submit"
              className={clsx(
                'min-w-full rounded-lg py-2',
                isSubmitting && 'animate-pulse'
              )}
              disabled={isSubmitting}
            >
              signin
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
}
