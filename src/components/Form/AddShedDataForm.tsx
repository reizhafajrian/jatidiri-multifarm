'use client'
import { shedDataFormContent } from '@/data/data'
import { useState } from 'react'
import Button from '../Button'
import InputText from './InputText'

export default function AddShedDataForm({ closeModal }: any) {
  const { category, content, initial } = shedDataFormContent
  const [categories, setCategories] = useState<any>(category.initial)
  const [formValues, setFormValues] = useState(initial)

  return (
    <>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data</h1>
      <div className="mb-8 space-y-5">
        {/* category radio options */}
        <div className="flex justify-between">
          {category.options.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <input
                type="checkbox"
                id={item.name}
                defaultChecked={categories[item.name]}
                onChange={(e) =>
                  setCategories((s: any) => ({
                    ...s,
                    [item.name]: e.target.checked,
                  }))
                }
                className="h-4 w-4 accent-primary-4"
              />
              <label htmlFor={item.name}>{item.label}</label>
            </div>
          ))}
        </div>
        {/* form fields */}
        {content.map((item, idx) => (
          <div key={idx} className={categories[item.name] ? 'block' : 'hidden'}>
            <h3 className="mb-4 text-base font-medium">{item.title}</h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {item.fields.map((field, idx) => (
                <InputText
                  key={idx}
                  label={field.label}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormValues((s: any) => ({
                      ...s,
                      [field.name]: e.target.value,
                    }))
                  }
                />
              ))}
            </div>
          </div>
        ))}
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
