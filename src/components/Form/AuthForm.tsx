'use client'
import { IUser } from '@/data/interfaces'
import { signin } from '@/libs/api'
import { useStore } from '@/store/store'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '../Button'
import InputSelect from './InputSelect'
import InputText from './InputText'

export default function AuthForm({ mode }: { mode: 'register' | 'signin' }) {
  const router = useRouter()
  const { isLoading, isError, isEmptyMsg } = useStore()
  const [formValues, setFormValues] = useState({} as IUser)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    useStore.setState({ isLoading: true, isError: {} })

    // isEmptyErrorCheck
    if (
      !formValues.email ||
      !formValues.password ||
      (mode === 'register' &&
        (!formValues.name || !formValues.role || !formValues.whatsapp_number))
    )
      return useStore.setState({
        isLoading: false,
        isError: {
          name: !formValues.name && isEmptyMsg,
          email: !formValues.email && isEmptyMsg,
          role: !formValues.role && isEmptyMsg,
          whatsapp_number: !formValues.whatsapp_number && isEmptyMsg,
          password: !formValues.password && isEmptyMsg,
        },
      })

    try {
      if (mode === 'signin') {
        await signin(formValues)
        useStore.setState({ isLoading: false })
        setFormValues({} as IUser)
        router.push('/home')
      } else {
        console.log(formValues)
        // await register(formValues)
      }
    } catch (e: any) {
      console.error({ error: e.error })
      useStore.setState({
        isLoading: false,
        isError: {
          name: !e.name && '',
          email: !e.email && '',
          role: !e.role && '',
          whatsapp_number: !e.whatsapp_number && '',
          password: !e.password && '',
        },
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((s) => ({ ...s, [e.target.name]: e.target.value }))
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
            errorMsg={isError.name}
            disabled={isLoading}
          />
        )}
        <InputText
          label="Email"
          name="email"
          onChange={handleChange}
          errorMsg={isError.email}
          disabled={isLoading}
        />
        {mode === 'register' && (
          <>
            <InputText
              label="Whatsapp Number"
              name="whatsapp_number"
              onChange={handleChange}
              errorMsg={isError.whatsapp_number}
              disabled={isLoading}
            />
            <InputSelect
              label="Role"
              options={['Admin', 'Super Admin']}
              value={formValues.role ?? ''}
              onChange={(value) =>
                setFormValues((s) => ({ ...s, role: value }))
              }
              errorMsg={isError.role}
            />
          </>
        )}
        <InputText
          label="Password"
          name="password"
          onChange={handleChange}
          errorMsg={isError.password}
          disabled={isLoading}
          isSecured
        />
        {mode === 'signin' ? (
          <div className="space-y-8 text-right">
            <Link href="/signin" className="text-base font-medium">
              Forgot Password?
            </Link>
            <Button
              typeof="submit"
              className={clsx('w-full', isLoading && 'animate-pulse')}
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
