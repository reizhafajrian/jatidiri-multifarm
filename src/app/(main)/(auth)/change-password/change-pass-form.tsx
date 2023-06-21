"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { changePassSchema } from "@/lib/schemas"
import { IChangePass } from "@/store/slices/authSlice"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import Form from "@/components/ui/Form"
import InputText from "@/components/ui/InputText"

export default function ChangePasswordForm() {
  const router = useRouter()
  const { changePass } = useStore()

  const methods = useForm<IChangePass>({
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
