"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { changePassSchema, changePassType } from "@/lib/schemas/auth"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/button"
import Form from "@/components/ui/form"
import InputText from "@/components/ui/input-text"

export default function ChangePasswordForm() {
  const router = useRouter()
  const { changePass } = useStore()

  const methods = useForm<changePassType>({
    resolver: zodResolver(changePassSchema),
  })

  return (
    <Form methods={methods} onSubmit={changePass} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <InputText name="passwordOld" label="Old Password" isSecured />
        <div className="space-y-6">
          <InputText name="password" label="New Password" isSecured />
          <InputText
            name="passwordConfirmation"
            label="Confirm Password"
            isSecured
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-36"
          onClick={() => router.replace("/dashboard")}
          disabled={methods.formState.isSubmitting}
        >
          CANCEL
        </Button>
        <Button
          type="submit"
          className="w-36"
          isLoading={methods.formState.isSubmitting}
        >
          SAVE
        </Button>
      </div>
    </Form>
  )
}
