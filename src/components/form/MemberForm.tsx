import { X } from '@/components/shared/Icons'
import { memberSchema } from '@/lib/schemas'
import { IUser } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
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
  values?: IUser
}

const MemberForm: FC<MemberFormProps> = ({ formType, values }) => {
  const [open, setOpen] = useState(false)
  const title = `${formType == 'add' ? 'Tambah' : 'Edit'} Member`
  const { user } = useStore()

  const methods = useForm<IUser>({
    resolver: zodResolver(memberSchema),
    defaultValues: formType == 'edit' ? values : {},
  })

  const onSubmit: SubmitHandler<IUser> = async (values) => {
    console.log(values)
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
