'use client'
import { useState } from 'react'
import Button from '../Button'
import InputText from './InputText'

interface IProps {
  category: string
  title: string
  closeModal: any
}

export default function AddCategoryForm(props: IProps) {
  const [formValues, setFormValues] = useState({})
  return (
    <>
      <h1 className="mb-6 text-xl font-semibold">Tambah {props.title}</h1>

      <div className="mb-8 space-y-6">
        <InputText
          label={`Jenis ${props.title}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValues((s) => ({
              ...s,
              [`${props.category}_type`]: e.target.value,
            }))
          }
        />
        <InputText
          label="Stock"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValues((s) => ({
              ...s,
              [`${props.category}_stock`]: e.target.value,
            }))
          }
        />
        <InputText
          label={`Harga ${
            props.category === 'feed' ? '(per kg)' : '(per pcs)'
          }`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValues((s) => ({
              ...s,
              [`${props.category}_price`]: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex justify-end gap-3">
        <Button intent="secondary" onClick={() => props.closeModal(false)}>
          cancel
        </Button>
        <Button>save</Button>
      </div>
    </>
  )
}
