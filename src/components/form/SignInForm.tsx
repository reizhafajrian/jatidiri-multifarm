'use client'
import { Button, Form, InputText } from '@/components/shared'
import { signinSchema } from '@/lib/schemas'
import { IUser } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function SignInForm() {
  const router = useRouter()
  const login = useStore((state) => state.login)

  const methods = useForm<IUser>({
    resolver: zodResolver(signinSchema),
  })

  return (
    <Form
      onSubmit={(data) => login(data, router)}
      methods={methods}
      className="w-full space-y-4"
    >
      <InputText name="email" label="Email" />
      <InputText name="password" label="Password" isSecured />
      <div className="grid gap-8">
        <button
          type="button"
          className="ml-auto text-base font-medium outline-none focus:text-primary-4"
          onClick={() => router.replace('/signin')}
        >
          Forgot Password?
        </button>
        <Button
          type="submit"
          className="w-full"
          isLoading={methods.formState.isSubmitting}
        >
          SIGN IN
        </Button>
      </div>
    </Form>
  )
}
