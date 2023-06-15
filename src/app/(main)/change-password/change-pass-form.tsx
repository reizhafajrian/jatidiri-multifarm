"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

import { changePassSchema } from "@/lib/schemas"
import { IChangePass } from "@/store/types"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import Form from "@/components/ui/Form"
import InputText from "@/components/ui/InputText"

const ChangePasswordForm = () => {
  const router = useRouter()
  const { changePass } = useStore()

  const methods = useForm<IChangePass>({
    resolver: zodResolver(changePassSchema),
  })

  const onSubmit: SubmitHandler<IChangePass> = async (values) => {
    await changePass(values)
    methods.reset()
  }

  return (
    <Form methods={methods} onSubmit={onSubmit} className="space-y-6">
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

export default ChangePasswordForm
