'use client'
import { IUser } from '@/data/interfaces'
import { signin } from '@/libs/api'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '../Button'
import InputSelect from './InputSelect'
import InputText from './InputText'

export default function AuthForm({ mode }: { mode: 'register' | 'signin' }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({} as IUser)
  const [error, setError] = useState({} as IUser)

  const { name, email, role, whatsapp_number, password } = formValues
  const isEmpty =
    !email ||
    !password ||
    (mode === 'register' && (!name || !role || !whatsapp_number))
  const isEmptyMsg = 'Data yang dimasukkan salah'

  const isEmptyError = () => {
    setLoading(false)
    setError((s: any) => ({
      ...s,
      name: !name && isEmptyMsg,
      email: !email && isEmptyMsg,
      role: !role && isEmptyMsg,
      whatsapp_number: !whatsapp_number && isEmptyMsg,
      password: !password && isEmptyMsg,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError({} as IUser)
    setLoading(true)
    if (isEmpty) return isEmptyError()

    try {
      if (mode === 'signin') {
        await signin(formValues)
        setLoading(false)
        router.push('/home')
      } else {
        console.log(formValues)
        // await register(formValues)
      }

      setFormValues({} as IUser)
    } catch (e: any) {
      setLoading(false)
      console.error({ error: e.error })
      setError({ email: ' ', password: ' ' })
    }
  }

  return (
    <div className="w-full">
      {mode === 'signin' && (
        <h2 className="mb-8 text-[32px] font-medium">Sign In Here</h2>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <InputText
            label="Nama"
            name="name"
            onChange={handleChange}
            errorMsg={error.name}
            disabled={loading}
          />
        )}
        <InputText
          label="Email"
          name="email"
          onChange={handleChange}
          errorMsg={error.email}
          disabled={loading}
        />
        {mode === 'register' && (
          <>
            <InputText
              label="Whatsapp Number"
              name="whatsapp_number"
              onChange={handleChange}
              errorMsg={error.whatsapp_number}
              disabled={loading}
            />
            <InputSelect
              label="Role"
              options={['Admin', 'Super Admin']}
              value={formValues.role ?? ''}
              onChange={(value) =>
                setFormValues((s) => ({ ...s, role: value }))
              }
              errorMsg={error.role}
            />
          </>
        )}
        <InputText
          label="Password"
          name="password"
          onChange={handleChange}
          errorMsg={error.password}
          disabled={loading}
          isSecured
        />
        {mode === 'signin' ? (
          <div className="space-y-8 text-right">
            <Link href="/signin" className="text-base font-medium">
              Forgot Password?
            </Link>
            <Button
              typeof="submit"
              className={clsx('w-full', loading && 'animate-pulse')}
            >
              signin
            </Button>
          </div>
        ) : (
          <div className="text-right">
            <Button typeof="submit" className="capitalize">
              tambah member
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}
