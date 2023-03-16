import { X } from '@/components/shared/Icons'
import { memberSchema } from '@/lib/schemas'
import { IModal } from '@/lib/types'
import { IUser, useAuthStore } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, InputSelect, InputText, Modal } from '../shared'

interface IProps extends IModal {
  formType: 'add' | 'edit'
  values?: IUser
}

const MemberForm: FC<IProps> = ({ formType, closeModal, isOpen, values }) => {
  const title = `${formType == 'add' ? 'Tambah' : 'Edit'} Member`
  const { user, addMember, editMember } = useAuthStore()

  const methods = useForm<IUser>({
    resolver: zodResolver(memberSchema),
    defaultValues: formType == 'edit' ? values : {},
  })

  const onSubmit: SubmitHandler<IUser> = async (values) => {
    console.log(values)
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button onClick={() => closeModal(false)}>
          <X />
        </button>
      </div>

      <Form methods={methods} onSubmit={onSubmit} className="mt-5 space-y-4">
        <InputText name="first_name" label="First Name" />
        <InputText name="last_name" label="Last Name" />
        <InputText name="email" label="Email" />
        <InputText name="phone_number" label="No Whatsapp" />
        <InputSelect
          name="role"
          label="Role"
          options={[
            { name: 'Admin', value: 'admin' },
            { name: 'Super Admin', value: 'super-admin' },
          ]}
        />
        <InputText name="password" label="Password" isSecured />
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => closeModal(false)}
            disabled={methods.formState.isSubmitting}
          >
            CANCEL
          </Button>
          <Button
            type="submit"
            className="w-full"
            isLoading={methods.formState.isSubmitting}
          >
            SAVE
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

export default MemberForm
