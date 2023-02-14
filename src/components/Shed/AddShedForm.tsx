'use client'
import { shedFormContent } from '@/data/data'
import { useState } from 'react'
import Button from '../Button'
import InputRadio from '../Form/InputRadio'
import InputText from '../Form/InputText'

export default function AddShedForm() {
  const { initial, animal_types } = shedFormContent
  const [formValues, setFormValues] = useState(initial)

  return (
    <div>
      <h1 className="mb-5 text-base font-semibold">Tambah Data Kandang</h1>
      <div className="mb-6 flex items-center gap-4">
        {animal_types.map((item, idx) => (
          <InputRadio key={idx} label={item.label} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputText
            label="No Kandang"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, shed_code: e.target.value }))
            }
          />
          <InputText
            label="Pakan"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, feed: e.target.value }))
            }
          />
          <InputText
            label="Range Usia"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, age_range: e.target.value }))
            }
          />
        </div>
        <div className="space-y-6">
          <InputText
            label="Berat Hewan"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, animal_weight: e.target.value }))
            }
          />
          <InputText
            label="Berat Pakan"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, feed_weight: e.target.value }))
            }
          />
          <InputText
            label="Keterangan"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, description: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="mt-28 flex justify-end gap-3">
        <Button intent="secondary">cancel</Button>
        <Button>save</Button>
      </div>
    </div>
  )
}
