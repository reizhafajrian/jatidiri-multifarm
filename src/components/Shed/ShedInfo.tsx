'use client'
import PencilIcon from '@/assets/icons/pencil.svg'
import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import AddShedDataForm from './AddShedDataForm'
import FilterShedInfoTable from './FilterShedInfoTable'
import InfoCardList from './InfoCardList'
import ShedInfoTable from './ShedInfoTable'

export default function ShedInfo({ data, detail }: any) {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <AddShedDataForm closeModal={closeModal} />
      </Modal>
      <InfoCardList
        animal_weight={data.animal_weight}
        age_range={data.age_range}
        feed_weight={data.feed_weight}
      />
      <div className="space-y-5">
        <h1 className="text-2xl font-semibold text-neutral-5">
          History Kandang
          <span className="text-primary-5"> #{data.shed_code}</span>
        </h1>
        <div className="flex items-center justify-between">
          <FilterShedInfoTable />
          <Button
            onClick={() => closeModal(true)}
            className="flex items-center justify-center gap-2"
          >
            <span className="text-sm capitalize">tambah data</span>
            <PencilIcon />
          </Button>
        </div>
        <ShedInfoTable data={detail} />
      </div>
    </>
  )
}
