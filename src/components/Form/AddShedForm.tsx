'use client'
import { shedFormContent } from '@/data/data'
import { useState } from 'react'
import Button from '../Button'
import InputText from './InputText'

export default function AddShedForm() {
  const { initial, animal_types } = shedFormContent
  const [formValues, setFormValues] = useState(initial)

  return (
    <div>
      <h1 className="mb-5 text-base font-semibold">Tambah Data Kandang</h1>
      <div className="mb-6 flex items-center gap-4">
        {animal_types.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <input
              type="radio"
              name="animal_type"
              id={item.value}
              className="h-4 w-4 accent-primary-4 transition duration-200  focus:outline-none"
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
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
