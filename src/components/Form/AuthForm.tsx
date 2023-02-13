'use client'
import EyesIcon from '@/assets/icons/eyes.svg'
import { authFormContent } from '@/data/data'
import { signin } from '@/libs/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '../Button'
import InputText from './InputText'

export default function AuthForm({ mode }: { mode: 'register' | 'signin' }) {
  const router = useRouter()
  const content = authFormContent[mode]
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState(authFormContent.initial)


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await signin(formValues)
      router.push('/home')
      setFormValues(authFormContent.initial)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="w-full">
      <h2 className="mb-8 text-[32px] font-medium">{content.header}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-4">
          {mode === 'register' && (
            <InputText
              label="Nama"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues((s) => ({ ...s, name: e.target.value }))
              }
            />
          )}
          <InputText
            label="Email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, email: e.target.value }))
            }
          />
          <div className="relative">
            <InputText
              type={showPassword ? 'password' : 'text'}
              label="Password"
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
        <div className="space-y-8 text-right">
          <Link href="/signin" className="text-base font-medium">
            Forgot Password?
          </Link>
          <Button typeof="submit" className="w-full">
            {content.buttonText}
          </Button>
        </div>
      </form>
    </div>
  )
}
