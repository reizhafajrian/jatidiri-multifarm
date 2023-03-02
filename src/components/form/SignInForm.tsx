'use client'
import { signinSchema } from '@/data/validations'
import { IUser, useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { Button, InputText } from '../shared'
import Form from '../shared/Form'

export default function SignInForm() {
  const router = useRouter()
  const { signIn } = useAuthStore()

  const signinHandler = async (values: IUser) => {
    try {
      await signIn(values)
      router.push('/home')
    } catch (e: any) {
      toast.error(e.errors[0].message)
    }
  }

  return (
    <Form
      schema={signinSchema}
      onSubmit={(values) => signinHandler(values)}
      className="space-y-4"
    >
      <InputText name="email" label="Email" />
      <InputText name="password" label="Password" isSecured />
      <div className="grid gap-8">
        <button
          className="ml-auto text-base font-medium"
          onClick={() => router.replace('/signin')}
        >
          Forgot Password?
        </button>
        <Button
          type="submit"
          className="min-w-full rounded-lg py-2 disabled:animate-pulse"
        >
          signin
        </Button>
      </div>
    </Form>
  )
}
