'use client'
import { useShedStore } from '@/store/shed'
import { useState } from 'react'
import ShedInfoFilter from '../filter/ShedInfoFilter'
import AddShedDataForm from '../form/AddShedDataForm'
import ShedInfoList from '../list/ShedInfoList'
import { Button } from '../shared'
import { PencilSolid } from '../shared/Icons'
import ShedInfoTable from '../table/ShedInfoTable'

export default function ShedInfo() {
  const [isOpen, closeModal] = useState(false)
  const { shed_code } = useShedStore().shed

  return (
    <>
      <AddShedDataForm isOpen={isOpen} closeModal={closeModal} />
      <ShedInfoList />
      <div className="space-y-5">
        <h1 className="text-2xl font-semibold text-neutral-5">
          History Kandang
          <span className="text-primary-5"> #{shed_code}</span>
        </h1>
        <div className="flex items-center justify-between">
          <ShedInfoFilter />
          <Button onClick={() => closeModal(true)} className="rounded-lg p-2">
            <span className="text-sm capitalize">tambah data</span>
            <PencilSolid />
          </Button>
        </div>
        <ShedInfoTable />
      </div>
    </>
  )
}
