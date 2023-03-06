'use client'
import { changePassSchema as schema } from '@/data/validations'
import { IChangePass, useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'
import { Field, Form } from '../shared'

export default function ChangePasswordForm() {
  const router = useRouter()
  const { user, changePassword } = useAuthStore()

  const onSubmit = async (values: IChangePass) => {
    // try {
    //   await changePassword(values)
    //   router.replace('/home')
    // } catch (e) {
    //   console.log(e)
    // }
  }

  return (
    <Form
      schema={schema}
      onSubmit={onSubmit}
      className="grid grid-cols-2 gap-6"
    >
      <Field type="input" name="old_pass" label="Old Password" isSecured />
      <div className="grid gap-6">
        <Field type="input" name="new_pass" label="New Password" isSecured />
        <Field
          type="input"
          name="confirm_pass"
          label="Confirm Password"
          isSecured
        />
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => router.replace('/home')} />
        </div>
      </div>
    </Form>
  )
}
