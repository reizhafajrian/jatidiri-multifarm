'use client'
import EyesIcon from '@/assets/icons/eyes.svg'
import { register, signin } from '@/libs/api'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '../Button'
import InputSelect from './InputSelect'
import InputText from './InputText'

const initial = {
  email: '',
  password: '',
  name: '',
  whatsapp_number: '',
  role: '',
}

export default function AuthForm({ mode }: { mode: 'register' | 'signin' }) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState(initial)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (mode === 'signin') {
        setLoading(true)
        await signin(formValues)
        setLoading(false)
      } else {
        await register(formValues)
      }

      router.push('/home')
      setFormValues(initial)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="w-full">
      {mode === 'signin' && (
        <h2 className="mb-8 text-[32px] font-medium">Sign In Here</h2>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-4">
          {mode === 'register' && (
            <InputText
              label="Nama"
              disabled={loading}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues((s) => ({ ...s, name: e.target.value }))
              }
            />
          )}
          <InputText
            label="Email"
            disabled={loading}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, email: e.target.value }))
            }
          />
          {mode === 'register' && (
            <>
              <InputText
                label="Whatsapp Number"
                disabled={loading}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormValues((s) => ({
                    ...s,
                    whatsapp_number: e.target.value,
                  }))
                }
              />
              <InputSelect
                label="Role"
                options={['Admin', 'Super Admin']}
                value={formValues.role}
                onChange={(value) =>
                  setFormValues((s) => ({ ...s, role: value }))
                }
              />
            </>
          )}
          <div className="relative">
            <InputText
              type={showPassword ? 'password' : 'text'}
              label="Password"
              disabled={loading}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues((s) => ({ ...s, password: e.target.value }))
              }
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 mr-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              <EyesIcon />
            </button>
          </div>
        </div>
        {mode === 'signin' && (
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
        )}
      </form>
    </div>
  )
}
