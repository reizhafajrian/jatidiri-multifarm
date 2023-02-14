'use client'
import DownloadIcon from '@/assets/icons/download-outline.svg'
import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import AddMilkForm from './AddMilkForm'
import FilterMilkTable from './FilterMilkTable'
import MilkCardList from './MilkCardList'
import MilkTable from './MilkTable'

export default function Milk() {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <AddMilkForm closeModal={closeModal} />
      </Modal>
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-neutral-5">
            Penghasilan Susu
          </h1>
          <div className="flex items-center gap-2">
            <Button className="w-40" onClick={() => closeModal(true)}>
              <span className="text-sm capitalize">tambah data susu</span>
            </Button>
            <Button intent="secondary" className="w-fit px-2">
              <DownloadIcon className="fill-black group-hover:fill-white" />
            </Button>
          </div>
        </div>
        <FilterMilkTable />
        <MilkCardList />
        <MilkTable />
      </div>
    </>
  )
}
