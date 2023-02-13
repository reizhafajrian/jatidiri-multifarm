'use client'
import PencilIcon from '@/assets/icons/pencil.svg'
import { useState } from 'react'
import Button from '../Button'
import AddShedDataForm from '../Form/AddShedDataForm'
import Modal from '../Modal'
import FilterShedInfoTable from '../Table/FilterShedInfoTable'
import ShedInfoTable from '../Table/ShedInfoTable'
import InfoCard from './InfoCard'

interface IProps {
  data: any
  detail: any
}

export default function ShedInfo({ data, detail }: IProps) {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <AddShedDataForm closeModal={closeModal} />
      </Modal>
      <div className="mb-8 flex gap-8 py-5">
        <InfoCard title="Berat" content={`${data.animal_weight} kg`} />
        <InfoCard title="Range Usia" content={`${data.age_range} bulan`} />
        <InfoCard title="Berat Pakan" content={`${data.feed_weight} kg`} />
      </div>
      <h1 className="mb-5 text-2xl font-semibold text-neutral-5">
        History Kandang{' '}
        <span className="text-primary-5">#{data.shed_code}</span>
      </h1>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-semibold">FILTER:</span>
          <FilterShedInfoTable />
        </div>
        <Button
          onClick={() => closeModal(true)}
          className="flex items-center justify-center gap-2"
        >
          <span className="text-sm font-semibold capitalize">tambah data</span>
          <PencilIcon />
        </Button>
      </div>
      <ShedInfoTable data={detail} />
    </>
  )
}
