'use client'
import { useState } from 'react'
import InputText from './InputText'

const initial = {
  shed_code: '',
  animal_type: '',
  animal_weight: '',
  feed: '',
  feed_weight: '',
  age_range: '',
  description: '',
}

const animalTypes = [
  { value: 'goat', label: 'Kambing' },
  { value: 'sheep', label: 'Domba' },
  { value: 'cow', label: 'Sapi' },
]

export default function FormCluster() {
  const [formValues, setFormValues] = useState(initial)

  return (
    <div>
      <h1 className="mb-5 text-base font-semibold">Tambah Data Kandang</h1>
      <div className="mb-6 flex items-center gap-4">
        {animalTypes.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="grid h-4 w-4 place-items-center rounded-full border border-neutral-4">
              <input
                type="radio"
                name="animal_type"
                id={item.value}
                className="h-3 w-3 cursor-pointer appearance-none rounded-full bg-white transition duration-200 checked:bg-primary-4 focus:outline-none"
              />
            </div>
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputText
            label="No Kandang"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                shed_code: e.currentTarget.value,
              })
            }
          />
          <InputText
            label="Pakan"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                feed: e.currentTarget.value,
              })
            }
          />
          <InputText
            label="Range Usia"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                age_range: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="space-y-6">
          <InputText
            label="Berat Hewan"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                animal_weight: e.currentTarget.value,
              })
            }
          />
          <InputText
            label="Berat Pakan"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                feed_weight: e.currentTarget.value,
              })
            }
          />
          <InputText
            label="Keterangan"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                description: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <div className="mt-28 flex justify-end gap-3">
        <button className="w-36 rounded-[10px] border border-neutral-3 bg-white py-2 text-xs font-semibold uppercase">
          cancel
        </button>
        <button className="w-36 rounded-[10px] border border-primary-4 bg-primary-4 py-2 text-xs font-semibold uppercase text-white">
          save
        </button>
      </div>
    </div>
  )
}
