'use client'
import { useState } from 'react'
import Button from '../Button'
import InputSelect from './InputSelect'
import InputText from './InputText'

export default function AddShedAnimalForm({ closeModal, title }: any) {
  const [formValues, setFormValues] = useState({
    eartag_code: '',
    description: '',
  })

  return (
    <>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data {title}</h1>
      <div className="mb-8 space-y-6">
        <InputSelect
          label="No Eartag"
          options={['111', '222', '333']}
          value={formValues.eartag_code}
          onChange={(value) =>
            setFormValues((s) => ({ ...s, eartag_code: value }))
          }
        />
        <InputText
          label="Keterangan"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValues((s) => ({ ...s, description: e.target.value }))
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
