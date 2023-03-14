'use client'
import { Download } from 'lucide-react'
import { useState } from 'react'
import MilkForm from '../form/MilkForm'
import { Button } from '../shared'

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
          <Button className="capitalize" onClick={() => closeModal(true)}>
            tambah data susu
          </Button>
          <Button variant="outline" className="px-3">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
}
