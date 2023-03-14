import { IModal } from '@/data/interfaces'
import { memberSchema as schema } from '@/data/validations'
import { IUser, useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'
import { Field, Form, Modal } from '../shared'
import { Close } from '../shared/Icons'

interface IProps {
  formType: 'add' | 'edit'
}

export default function MemberForm(props: IProps & IModal) {
  const router = useRouter()
  const { formType, isOpen, closeModal } = props
  const title = `${formType == 'add' ? 'Tambah' : 'Edit'} Member`

  const roleOptions = [
    { name: 'Admin', value: 'admin' },
    { name: 'Super Admin', value: 'super-admin' },
  ]
  const { user, addMember, editMember } = useAuthStore()

  const onSubmit = async (values: IUser) => {
    // if (formType == 'add') {
    //   try {
    //     await addMember(values)
    //     router.refresh()
    //   } catch (e) {
    //     console.log(e)
    //   }
    // } else {
    //   try {
    //     await editMember(values)
    //     router.refresh()
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button onClick={() => closeModal(false)}>
          <Close />
        </button>
      </div>
      <Form
        values={formType == 'edit' ? user : undefined}
        schema={schema}
        onSubmit={onSubmit}
        className="mt-5 space-y-4"
      >
        <Field type="input" name="first_name" label="First Name" />
        <Field type="input" name="last_name" label="Last Name" />
        <Field type="input" name="email" label="Email" />
        <Field type="input" name="phone_number" label="No Whatsapp" />
        <Field type="select" name="role" label="Role" options={roleOptions} />
        <Field type="input" isSecured name="password" label="Password" />
        <div className="flex gap-3">
          <Field
            type="submit"
            cancelHandler={() => closeModal(false)}
            className="flex-1"
          />
        </div>
      </Form>
    </Modal>
  )
}
