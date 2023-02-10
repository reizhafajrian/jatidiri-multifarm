'use client'
import PencilIcon from '@/assets/icons/pencil.svg'
import { useState } from 'react'
import FilterShedInfoTable from '../Table/FilterShedInfoTable'
import ShedInfoTable from '../Table/ShedInfoTable'
import InfoCard from './InfoCard'
import ModalAddData from './ModalAddData'

interface IProps {
  data: any
  detail: any
}

export default function ShedInfo({ data, detail }: IProps) {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <div className="flex gap-8 py-5">
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
        <button
          onClick={() => closeModal(true)}
          className="flex items-center gap-2 rounded-lg bg-primary-4 py-2 px-4 hover:bg-primary-5"
        >
          <span className="text-sm font-semibold capitalize text-white">
            tambah data
          </span>
          <PencilIcon />
        </button>
      </div>
      <ShedInfoTable data={detail} />
      <ModalAddData isOpen={isOpen} closeModal={() => closeModal(false)} />
    </>
  )
}
