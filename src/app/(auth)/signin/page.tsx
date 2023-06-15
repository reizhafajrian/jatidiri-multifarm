import { cookies } from "next/headers"
import Image from "next/image"
import { redirect } from "next/navigation"

import SignInForm from "./signin-form"

export const metadata = {
  title: "Jatidiri Multifarm | Sign In",
}

export default function SigninPage() {
  const isAuthenticated = cookies().get("token")?.value
  if (isAuthenticated) redirect("/dashboard")

  return (
    <div className="grid md:grid-cols-2">
      <div className="relative m-28 hidden md:block">
        <Image src="/logo-big.png" alt="logo" className="object-contain" fill />
      </div>

      <div className="grid h-screen place-items-center">
        <div className="w-full px-12 md:px-24">
          <div className="mb-12 text-2xl font-medium md:mb-32 md:space-y-5 md:text-5xl">
            <h1>Selamat datang</h1>
            <h1>
              <span>di </span>
              <span className="font-bold text-primary-4">
                Jatidiri Multifarm
              </span>
            </h1>
          </div>

          <SignInForm />
        </div>
      </div>
    </div>
  )
}
