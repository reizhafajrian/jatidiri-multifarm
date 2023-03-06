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

export default function AddCategoryForm(props: IProps) {
  const { category, isOpen, closeModal } = props
  const [formValues, setFormValues] = useState({})

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">
        Tambah {categoryTitle(category)}
      </h1>
      <div className="mb-8 space-y-6">
        <InputText
          label={`Jenis ${categoryTitle(category)}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValues((s) => ({
              ...s,
              [`${category}_type`]: e.target.value,
            }))
          }
        />
        <InputText
          label="Stock"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValues((s) => ({
              ...s,
              [`${category}_stock`]: e.target.value,
            }))
          }
        />
        <InputText
          label={`Harga ${category === 'feed' ? '(per kg)' : '(per pcs)'}`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormValues((s) => ({
              ...s,
              [`${category}_price`]: e.target.value,
            }))
          }
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
