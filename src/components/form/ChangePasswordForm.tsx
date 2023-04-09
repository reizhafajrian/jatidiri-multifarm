'use client'
import { Button, Form, InputText } from '@/components/shared'
import { changePassSchema } from '@/lib/schemas'
import { IChangePass } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IProps { }

const ChangePasswordForm: FC<IProps> = ({ }) => {
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
    <Form
      methods={methods}
      onSubmit={onSubmit}
      className="grid gap-6 md:grid-cols-2"
    >
      <InputText name="passwordOld" label="Old Password" isSecured />
      <div className="grid gap-6">
        <InputText name="password" label="New Password" isSecured />
        <InputText
          name="passwordConfirmation"
          label="Confirm Password"
          isSecured
        />
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-36"
            onClick={() => router.replace('/dashboard')}
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
