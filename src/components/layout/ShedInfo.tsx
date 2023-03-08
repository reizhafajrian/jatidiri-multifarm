'use client'
import { useState } from 'react'
import ShedInfoFilter from '../filter/ShedInfoFilter'
import ShedDetailForm from '../form/ShedDetailForm'
import ShedInfoList from '../list/ShedInfoList'
import { Button } from '../shared'
import { PencilSolid } from '../shared/Icons'
import ShedInfoTable from '../table/ShedInfoTable'

import { IShedDetail } from '@/store/shed'
import { FC } from 'react'

interface ShedInfoProps {
  shed_code: string
  data: IShedDetail[]
}

const ShedInfo: FC<ShedInfoProps> = ({ shed_code, data }) => {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <ShedDetailForm isOpen={isOpen} closeModal={closeModal} />
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
        <ShedInfoTable data={data} />
      </div>
    </>
  )
}

export default ShedInfo
