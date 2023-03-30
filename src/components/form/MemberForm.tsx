import { X } from '@/components/shared/Icons'
import { editMemberSchema, memberSchema } from '@/lib/schemas'
import { IUser } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form, InputSelect, InputText } from '../shared'

import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../shared/Dialog'

interface MemberFormProps {
  formType: 'add' | 'edit'
  values?: any
}

const MemberForm: FC<MemberFormProps> = ({ formType, values: data }) => {
  const router = useRouter()
  const { register, updateUser } = useStore()
  const schema = formType === 'add' ? memberSchema : editMemberSchema
  const [open, setOpen] = useState(false)
  const title = `${formType == 'add' ? 'Tambah' : 'Edit'} Member`

  const methods = useForm<IUser>({
    resolver: zodResolver(schema),
    defaultValues: formType == 'edit' ? data : {},
  })

  const onSubmit: SubmitHandler<IUser> = async (values) => {
    if (formType === 'add') {
      await register(values, router)
    } else {
      await updateUser({ ...values, _id: data.id }, router)
    }
    methods.reset()
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* 
     button 
      */}
        {formType === 'add' ? (
          <Button className="text-sm capitalize">tambah member</Button>
        ) : (
          <Button variant="edit" size="xs" />
        )}
      </DialogTrigger>

      <DialogContent>
        <div className="mb-6 flex items-center justify-between">
          <DialogTitle className="mb-0">{title}</DialogTitle>
          <DialogClose>
            <X />
          </DialogClose>
        </div>
        <Form methods={methods} onSubmit={onSubmit} className="mt-5 space-y-4">
          <InputText name="firstName" label="First Name" />
          <InputText name="lastName" label="Last Name" />
          <InputText name="email" label="Email" />
          <InputText name="phone" label="No Whatsapp" />
          <InputSelect
            name="role"
            label="Role"
            options={[
              { name: 'Admin', value: 'admin' },
              { name: 'Super Admin', value: 'super-admin' },
            ]}
          />
          {formType === 'add' && (
            <InputText name="password" label="Password" isSecured />
          )}
          <div className="grid grid-cols-2 gap-3">
            <DialogClose>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                disabled={methods.formState.isSubmitting}
              >
                CANCEL
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="w-full"
              isLoading={methods.formState.isSubmitting}
            >
              SAVE
            </Button>
          </div>
        </Form>
      </DialogContent>
    </DialogRoot>
  )
}

export default MemberForm
