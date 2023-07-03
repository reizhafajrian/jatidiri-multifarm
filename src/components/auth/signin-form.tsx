"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { signInSchema, SignInType } from "@/lib/schemas/auth"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import Form from "@/components/ui/form"
import InputText from "@/components/ui/input-text"

export default function SignInForm() {
  const router = useRouter()
  const signin = useStore((s) => s.signin)

  const form = useForm<SignInType>({ resolver: zodResolver(signInSchema) })

  return (
    <Form onSubmit={signin} methods={form}>
      <h2 className="mb-8 text-xl font-medium md:text-3xl">Sign In Disini</h2>
      <div className="w-full space-y-4">
        <InputText name="email" label="Email" />
        <InputText name="password" label="Password" isSecured />
        <div className="grid gap-8">
          <button
            type="button"
            className="ml-auto text-base font-medium outline-none focus:text-primary-4"
            onClick={() => router.replace("/signin")}
          >
            Forgot Password?
          </button>
          <Button
            type="submit"
            className="w-full"
            isLoading={form.formState.isSubmitting}
          >
            SIGN IN
          </Button>
        </div>
      </div>
    </Form>
  )
}
