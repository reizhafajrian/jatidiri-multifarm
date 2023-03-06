'use client'
import { useState } from 'react'
import MilkForm from '../form/MilkForm'
import { Button } from '../shared'
import { ArrowDownTray } from '../shared/Icons'

export default function MilkHeader() {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <MilkForm formType="add" isOpen={isOpen} closeModal={closeModal} />
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-5">
          Penghasilan Susu
        </h1>
        <div className="flex items-center gap-2">
          <Button className="rounded-lg p-2" onClick={() => closeModal(true)}>
            <span className="text-sm capitalize">tambah data susu</span>
          </Button>
          <Button intent="secondary" className="rounded-lg p-2">
            <ArrowDownTray />
          </Button>
        </div>
      </div>
    </>
  )
}
