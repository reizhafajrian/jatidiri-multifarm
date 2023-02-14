'use client'
import { shedDataFormContent } from '@/data/data'
import { useState } from 'react'
import Button from '../Button'
import InputCheckbox from '../Form/InputCheckbox'
import InputText from '../Form/InputText'

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
            <InputCheckbox
              key={idx}
              label={item.label}
              defaultChecked={categories[item.name]}
              onChange={(e: any) =>
                setCategories((s: any) => ({
                  ...s,
                  [item.name]: e.target.checked,
                }))
              }
            />
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
