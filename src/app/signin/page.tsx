import SignInForm from '@/components/form/SignInForm'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function SigninPage() {
  const isAuthenticated = cookies().get('token')?.value

  if (isAuthenticated) redirect('/')

  return (
    <div className="grid grid-cols-2">
      <div className="relative m-28">
        <Image src="/logo-big.png" alt="logo" fill className="object-contain" />
      </div>
      <div className="grid h-screen place-items-center">
        <div className="w-full px-24">
          <div className="mb-32 space-y-9 text-[40px] font-medium">
            <h1>Welcome</h1>
            <h1>
              to{' '}
              <span className="font-semibold text-primary-4">
                Jatidiri Multifarm
              </span>
            </h1>
          </div>
          <div className="w-full">
            <h2 className="mb-8 text-[32px] font-medium">Sign In Here</h2>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  )
}
