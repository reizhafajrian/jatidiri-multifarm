'use client'
import { memberSchema as schema } from '@/data/validations'
import { IUser, useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'
import { Field, Form, Modal } from '../shared'
import { Close } from '../shared/Icons'

export default function AddMemberForm({ isOpen, closeModal }: any) {
  const router = useRouter()
  const { user, addMember } = useAuthStore()

  const onSubmit = async (values: IUser) => {
    // try {
    //   await addMember(values)
    //   router.refresh()
    // } catch (e) {
    //   console.log(e)
    // }
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tambah Member</h1>
        <button onClick={() => closeModal(false)}>
          <Close />
        </button>
      </div>
      <Form schema={schema} onSubmit={onSubmit} className="mt-5 space-y-4">
        <Field type="input" name="name" label="Nama" />
        <Field type="input" name="email" label="Email" />
        <Field type="input" name="phone_number" label="No Whatsapp" />
        <Field
          type="select"
          name="role"
          label="Role"
          options={['Admin', 'Super Admin']}
        />
        <Field type="input" isSecured name="password" label="Password" />
        <Field type="submit" cancelHandler={() => closeModal(false)} />
      </Form>
    </Modal>
  )
}
