'use client'
import { useState } from 'react'
import InputSelect from '../Form/InputSelect'
import InputText from '../Form/InputText'
import Modal from '../Modal'

const eartagList = ['111', '222', '333']

interface IProps {
  isOpen: boolean
  closeModal: any
  animal_type: string
}

const initial = {
  eartag_code: '',
  description: '',
}

export default function ModalAddAnimal(props: IProps) {
  const [formValues, setFormValues] = useState(initial)
  const { isOpen, closeModal, animal_type } = props
  const title =
    animal_type === 'goat'
      ? 'Kambing'
      : animal_type === 'sheep'
      ? 'Domba'
      : 'Sapi'

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data {title}</h1>
      <div className="mb-8 space-y-6">
        <InputSelect
          label="No Eartag"
          options={eartagList}
          value={formValues.eartag_code}
          onChange={(value) =>
            setFormValues({ ...formValues, eartag_code: value })
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
      <div className="flex justify-end gap-3">
        <button
          onClick={() => closeModal(false)}
          className="w-36 rounded-[10px] border border-neutral-3 bg-white py-2 text-xs font-semibold uppercase"
        >
          cancel
        </button>
        <button className="w-36 rounded-[10px] border border-primary-4 bg-primary-4 py-2 text-xs font-semibold uppercase text-white">
          save
        </button>
      </div>
    </Modal>
  )
}
