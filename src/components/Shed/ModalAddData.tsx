import { useState } from 'react'
import InputText from '../Form/InputText'
import Modal from '../Modal'

interface IProps {
  isOpen: boolean
  closeModal: any
}

const categoriesInitial = {
  feed: true,
  vitamin: false,
  vaccine: false,
  anthelmintic: false,
}

export default function ModalAddData({ isOpen, closeModal }: IProps) {
  const [categories, setCategories] = useState(categoriesInitial)

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data</h1>
      <div className="mb-8 space-y-5">
        <FilterCategories
          categories={categories}
          setCategories={setCategories}
        />
        {categories.feed && (
          <div>
            <h3 className="mb-4 text-base font-medium">Pakan</h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <InputText label="Tanggal" />
              <InputText label="Jenis Pakan" />
              <InputText label="Harga" />
              <InputText label="Stok" />
            </div>
          </div>
        )}
        {categories.vitamin && (
          <div>
            <h3 className="mb-4 text-base font-medium">Vitamin</h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <InputText label="Tanggal" />
              <InputText label="Jenis Vitamin" />
              <InputText label="Harga" />
            </div>
          </div>
        )}
        {categories.vaccine && (
          <div>
            <h3 className="mb-4 text-base font-medium">Vaksin</h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <InputText label="Tanggal" />
              <InputText label="Jenis Vaksin" />
              <InputText label="Harga" />
            </div>
          </div>
        )}
        {categories.anthelmintic && (
          <div>
            <h3 className="mb-4 text-base font-medium">Obat Cacing</h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <InputText label="Tanggal" />
              <InputText label="Jenis Obat Cacing" />
              <InputText label="Harga" />
            </div>
          </div>
        )}
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

interface ICheckboxProps {
  label: string
  value: boolean
  onChange: (e: any) => void
}

const Checkbox = ({ label, value, onChange }: ICheckboxProps) => {
  return (
    <div className="flex items-center gap-3" defaultChecked={true}>
      <input
        type="checkbox"
        id={label}
        defaultChecked={value}
        onChange={onChange}
        className="h-4 w-4 accent-primary-4"
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

const FilterCategories = ({ categories, setCategories }: any) => {
  return (
    <div className="flex justify-between">
      <Checkbox
        label="Pakan"
        value={categories.feed}
        onChange={(e) =>
          setCategories({ ...categories, feed: e.target.checked })
        }
      />
      <Checkbox
        label="Vitamin"
        value={categories.vitamin}
        onChange={(e) =>
          setCategories({ ...categories, vitamin: e.target.checked })
        }
      />
      <Checkbox
        label="Vaksin"
        value={categories.vaccine}
        onChange={(e) =>
          setCategories({ ...categories, vaccine: e.target.checked })
        }
      />
      <Checkbox
        label="Obat Cacing"
        value={categories.anthelmintic}
        onChange={(e) =>
          setCategories({ ...categories, anthelmintic: e.target.checked })
        }
      />
    </div>
  )
}
