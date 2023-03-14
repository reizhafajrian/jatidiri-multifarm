'use client'
import { signinSchema } from '@/data/validations'
import { IUser } from '@/store/auth'
import { useRouter } from 'next/navigation'
import { Field } from '../shared'
import Form from '../shared/Form'
import { toast } from '../shared/Toast'

export default function SignInForm() {
  const router = useRouter()

  const onSubmit = async (values: IUser) => {
    const res = await fetch('/api/signin', {
      method: 'post',
      body: JSON.stringify(values),
    })

    if (res.status === 200) return router.push('/dashboard')

    toast({
      type: 'error',
      message: 'wrong credentials!',
    })
  }

  return (
    <Form schema={signinSchema} onSubmit={onSubmit} className="space-y-4">
      <Field type="input" name="email" label="Email" />
      <Field type="input" name="password" label="Password" isSecured />
      <div className="grid gap-8">
        <button
          className="ml-auto text-base font-medium"
          onClick={() => router.replace('/signin')}
        >
          Forgot Password?
        </button>
        <Field type="submit" label="signin" className="min-w-full" />
      </div>
    </Form>
  )
}
