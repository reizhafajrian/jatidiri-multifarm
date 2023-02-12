'use client'
import { authFormContent } from '@/data/data'
import { register, signin } from '@/libs/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '../Button'
import InputText from './InputText'

export default function AuthForm({ mode }: { mode: 'register' | 'signin' }) {
  const [formValues, setFormValues] = useState(authFormContent.initial)
  const content = authFormContent[mode]
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (mode === 'register') {
        await register(formValues)
      } else {
        await signin(formValues)
      }
      router.push('/home')
      setFormValues(authFormContent.initial)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="mb-2 text-3xl">{content.header}</h2>
        <p className="tex-lg text-black/25">{content.subheader}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 py-10">
        <div className="space-y-4">
          {mode === 'register' && (
            <InputText
              required
              label="Nama"
              value={formValues.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues((s) => ({ ...s, name: e.target.value }))
              }
            />
          )}
          <InputText
            required
            label="Email"
            value={formValues.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, email: e.target.value }))
            }
          />
          <InputText
            required
            type="password"
            label="Password"
            value={formValues.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, password: e.target.value }))
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <Link href={content.linkUrl} className="font-bold text-blue-600">
            {content.linkText}
          </Link>
          <Button typeof="submit">{content.buttonText}</Button>
        </div>
      </form>
    </div>
  )
}
