'use client'
import { animalTitle } from '@/data/data'
import { useState } from 'react'
import Button from '../Button'
import InputSelect from '../Form/InputSelect'
import InputText from '../Form/InputText'
import Modal from '../Modal'

interface IProps {
  isOpen: boolean
  closeModal: any
  animal_type: string
}

export default function AddShedAnimalForm(props: IProps) {
  const { isOpen, closeModal, animal_type } = props
  const [formValues, setFormValues] = useState({
    eartag_code: '',
    description: '',
  })

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">
        Tambah Data {animalTitle(animal_type)}
      </h1>
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
    </Modal>
  )
}
