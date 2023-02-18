'use client'
import { categoryTitle } from '@/data/data'
import { useState } from 'react'
import Button from '../Button'
import InputText from '../Form/InputText'
import Modal from '../Modal'

interface IProps {
  category: string
  isOpen: boolean
  closeModal: any
}

export default function EditCategoryForm(props: IProps) {
  const { category, isOpen, closeModal } = props
  const [formValues, setFormValues] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((s) => ({
      ...s,
      [`${category}${e.target.name}`]: e.target.value,
    }))
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">
        Edit {categoryTitle(category)}
      </h1>
      <div className="mb-8 space-y-6">
        <InputText
          name="_type"
          label={`Jenis ${categoryTitle(category)}`}
          onChange={handleChange}
          disabled={loading}
        />
        <InputText
          name="_stock"
          label="Stock"
          onChange={handleChange}
          disabled={loading}
        />
        <InputText
          name="_price"
          label={`Harga ${category === 'feed' ? '(per kg)' : '(per pcs)'}`}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div className="flex justify-end gap-3">
        <Button intent="secondary" onClick={() => closeModal(false)}>
          cancel
        </Button>
        <Button>save</Button>
      </div>
    </Modal>
  )
}
