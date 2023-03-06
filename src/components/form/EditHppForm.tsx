'use client'
import { IModal } from '@/data/interfaces'
import { hppSchema as schema } from '@/data/validations'
import { IEditHpp, useHppStore } from '@/store/hpp'
import { Field, Form, Modal } from '../shared'

export default function EditHppForm(props: IModal & { eartag_code: string }) {
  const { eartag_code, isOpen, closeModal } = props
  const { hpp, editHpp } = useHppStore()

  const onSubmit = async (values: IEditHpp) => {
    // editHpp({...values})
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-5 text-base font-semibold">Edit Data HPP</h1>
      <Form
        values={{ ...hpp, eartag_code: '111', hpp: 1000000 }}
        schema={schema}
        onSubmit={onSubmit}
      >
        <div className="mb-8 space-y-5">
          <Field type="input" name="eartag_code" label="" disabled />
          <div className="grid grid-cols-2 gap-5">
            <Field type="input" name="hpp" label="" disabled />
            <Field type="input" name="selling_price" label="Harga Jual" />
          </div>
          <Field type="input" name="description" label="Keterangan" />
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}
