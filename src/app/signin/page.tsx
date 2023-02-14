import Logo from '@/assets/images/logo-big.png'
import AuthForm from '@/components/Form/AuthForm'
import Image from 'next/image'

export default function SigninPage() {
  return (
    <div className="grid grid-cols-2">
      <div className="relative m-28">
        <Image src={Logo} alt="logo" fill className="object-contain" />
      </div>
      <div className="grid h-screen place-items-center">
        <div className="w-full px-24">
          <h1 className="mb-32 grid gap-9 text-[40px] font-medium">
            <span>Welcome</span>
            <span>
              to{' '}
              <span className="font-semibold text-primary-4">
                Jatidiri Multifarm
              </span>
            </span>
          </h1>
          <AuthForm mode="signin" />
        </div>
      </div>
    </div>
  )
}
