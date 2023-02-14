'use client'
import { useState } from 'react'
import Button from '../Button'
import InputDate from '../Form/InputDate'
import InputText from '../Form/InputText'

export default function EditMilkForm({
  eartagCode,
  closeModal,
}: {
  eartagCode: string
  closeModal: any
}) {
  const [formValues, setFormValues] = useState({
    milk_date: '',
    milk: '',
    history_milk_date: '',
    history_milk: '',
  })

  return (
    <>
      <h1 className="mb-6 text-xl font-semibold">Edit Data Susu</h1>
      <div className="mb-8 space-y-5">
        <InputText label="" value={eartagCode} disabled />
        <div>
          <h2 className="mb-3 text-base font-medium">Data Susu</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <InputDate
              label="Tanggal"
              selected={formValues.milk_date}
              onChange={(date: any) =>
                setFormValues((s) => ({ ...s, birth_date: date }))
              }
            />
            <InputText
              label="Berapa liter susu?"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues((s: any) => ({
                  ...s,
                  milk: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-base font-medium">Cek History Susu</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <InputDate
              label="Tanggal"
              selected={formValues.milk_date}
              onChange={(date: any) =>
                setFormValues((s) => ({ ...s, birth_date: date }))
              }
            />
            <InputText
              label="History Susu"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormValues((s: any) => ({
                  ...s,
                  milk: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button intent="secondary" onClick={() => closeModal(false)}>
          cancel
        </Button>
        <Button>save</Button>
      </div>
    </>
  )
}
