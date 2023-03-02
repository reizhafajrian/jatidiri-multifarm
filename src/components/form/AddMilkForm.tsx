'use client'
import { Field, Form, Modal } from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { milkSchema as schema } from '@/data/validations'
import { IMilk, useMilkStore } from '@/store/milk'

export default function AddMilkForm(props: IModal) {
  const { isOpen, closeModal } = props
  const { milk, addMilk } = useMilkStore()

  const onSubmit = async (values: IMilk) => {
    // await addMilk({ ...values })
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data Susu</h1>
      <Form schema={schema} onSubmit={onSubmit}>
        <div className="mb-8 space-y-5">
          <Field
            type="select"
            name="eartag_code"
            label="No Eartag"
            options={['111', '222', '333']}
          />
          <Field type="input" name="milk" label="Berapa liter susu?" />
          <Field type="date" name="milk_date" label="Tanggal" />
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}
