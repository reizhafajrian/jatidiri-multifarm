import SignInForm from '@/components/form/SignInForm'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Jatidiri Multifarm | SignIn',
}

export default function SigninPage() {
  const isAuthenticated = cookies().get('token')?.value

  if (isAuthenticated) redirect('/dashboard')

  return (
    <div className="grid md:grid-cols-2">
      <div className="relative m-28 hidden md:block">
        <Image src="/logo-big.png" alt="logo" fill className="object-contain" />
      </div>
      <div className="grid h-screen place-items-center">
        <div className="w-full px-12 md:px-24">
          <div className="mb-16 space-y-5 text-3xl font-medium md:mb-32 md:text-5xl">
            <h1>Selamat datang</h1>
            <h1>
              di{' '}
              <span className="font-bold text-primary-4">
                Jatidiri Multifarm
              </span>
            </h1>
          </div>
          <div className="w-full">
            <h2 className="mb-8 text-xl font-medium md:text-[32px]">
              Sign In Disini
            </h2>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  )
}
