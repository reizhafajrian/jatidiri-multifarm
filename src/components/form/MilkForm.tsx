import { IModal } from '@/data/interfaces'
import { milkSchema as schema } from '@/data/validations'
import { IMilk, useMilkStore } from '@/store/milk'
import { Field, Form, Modal } from '../shared'

interface IProps {
  eartag_code?: string
  formType: 'add' | 'edit'
}

export default function MilkForm(props: IModal & IProps) {
  const codeOptions = ['111', '222', '333']
  const title = `${props.formType == 'add' ? 'Tambah' : 'Edit'} Data Susu`

  const dummyMilkData = {
    eartag_code: props.eartag_code!,
    milk: 100,
    milk_date: new Date(),
    history_milk: 0,
  }

  const { milk, addMilk, editMilk } = useMilkStore()
  const values = props.formType == 'edit' ? dummyMilkData : undefined

  const onSubmit = async (values: IMilk) => {
    if (props.formType == 'add') {
      // await addMilk({ ...values })
    } else {
      // await editMilk({...values})
    }
  }

  return (
    <Modal isOpen={props.isOpen} closeModal={props.closeModal}>
      <h1 className="mb-6 text-xl font-semibold">{title}</h1>
      <Form values={values} schema={schema} onSubmit={onSubmit}>
        <div className="mb-8 space-y-5">
          {props.formType == 'edit' ? (
            <Field type="input" name="eartag_code" label="" disabled />
          ) : (
            <Field
              type="select"
              name="eartag_code"
              label="No Eartag"
              options={codeOptions}
            />
          )}
          {props.formType == 'edit' ? (
            <>
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
                  <Field
                    type="input"
                    name="history_milk"
                    label="History Susu"
                    disabled
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Field type="date" name="milk_date" label="Tanggal" />
              <Field type="input" name="milk" label="Berapa liter susu?" />
            </>
          )}
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => props.closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}
