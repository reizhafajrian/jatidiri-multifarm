'use client'
import { Button, Form, InputText } from '@/components/shared'
import { changePassSchema } from '@/lib/schemas'
import { IChangePass, useAuthStore } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IProps {}

const ChangePasswordForm: FC<IProps> = ({}) => {
  const router = useRouter()
  const { user, changePassword } = useAuthStore()

  const methods = useForm<IChangePass>({
    resolver: zodResolver(changePassSchema),
  })

  const onSubmit: SubmitHandler<IChangePass> = async (values) => {
    console.log(values)
  }

  return (
    <Form
      methods={methods}
      onSubmit={onSubmit}
      className="grid grid-cols-2 gap-6"
    >
      <InputText name="old_pass" label="Old Password" isSecured />
      <div className="grid gap-6">
        <InputText name="new_pass" label="New Password" isSecured />
        <InputText name="confirm_pass" label="Confirm Password" isSecured />
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-36"
            onClick={() => router.replace('/home')}
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
      </div>
    </Form>
  )
}

export default ChangePasswordForm
