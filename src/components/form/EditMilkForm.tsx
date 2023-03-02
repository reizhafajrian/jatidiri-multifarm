'use client'
import { Field, Form, Modal } from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { milkSchema as schema } from '@/data/validations'
import { IMilk, useMilkStore } from '@/store/milk'

export default function EditMilkForm(props: IModal & { eartag_code: string }) {
  const { eartag_code, isOpen, closeModal } = props
  const { milk, editMilk } = useMilkStore()

  const onSubmit = async (values: IMilk) => {
    // await editMilk({...values})
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Edit Data Susu</h1>
      {/* todo: fix default value and disabled fields */}
      <Form
        values={{ ...milk, eartag_code, history_milk: '0' }}
        schema={schema}
        onSubmit={onSubmit}
      >
        <div className="mb-8 space-y-5">
          <Field type="input" name="eartag_code" label="" />
          <div>
            <h2 className="mb-3 text-base font-medium">Data Susu</h2>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <Field type="date" name="milk_date" label="Tanggal" />
              <Field type="input" name="milk" label="Berapa liter susu?" />
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-base font-medium">Cek History Susu</h2>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <Field type="date" name="history_milk_date" label="Tanggal" />
              <Field type="input" name="history_milk" label="History Susu" />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}
