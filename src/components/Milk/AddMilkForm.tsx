'use client'
import { useState } from 'react'
import Button from '../Button'
import InputDate from '../Form/InputDate'
import InputSelect from '../Form/InputSelect'
import InputText from '../Form/InputText'

export default function AddMilkForm({ closeModal }: any) {
  const [formValues, setFormValues] = useState({
    eartag_code: '',
    milk_date: '',
    milk: '',
  })

  return (
    <>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data Susu</h1>
      <div className="mb-8 space-y-5">
        <InputSelect
          label="No Eartag"
          options={['111', '222', '333']}
          value={formValues.eartag_code}
          onChange={(value) =>
            setFormValues((s) => ({ ...s, eartag_code: value }))
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
        <InputDate
          label="Tanggal"
          selected={formValues.milk_date}
          onChange={(date: any) =>
            setFormValues((s) => ({ ...s, birth_date: date }))
          }
        />
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
