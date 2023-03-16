'use client'
import { Button, Form, InputText, toast } from '@/components/shared'
import { signinSchema } from '@/lib/schemas'
import { IUser } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function SignInForm() {
  const router = useRouter()

  const methods = useForm<IUser>({
    resolver: zodResolver(signinSchema),
  })

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    const res = await fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    if (res.status === 200) {
      methods.reset()
      return router.push('/dashboard')
    }

    toast({
      type: 'error',
      message: 'wrong credentials!',
    })
  }

  return (
    <Form onSubmit={onSubmit} methods={methods} className="space-y-4">
      <InputText name="email" label="Email" />
      <InputText name="password" label="Password" isSecured />
      <div className="grid gap-8">
        <button
          type="button"
          className="ml-auto text-base font-medium"
          onClick={() => router.replace('/signin')}
        >
          Forgot Password?
        </button>
        <Button
          type="submit"
          className="w-full"
          isLoading={methods.formState.isSubmitting}
        >
          SIGNIN
        </Button>
      </div>
    </Form>
  )
}
