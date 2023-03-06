'use client'
import { useState } from 'react'
import MemberForm from '../form/MemberForm'
import { Button } from '../shared'

export default function RoleManagementHeader() {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <MemberForm formType="add" isOpen={isOpen} closeModal={closeModal} />
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-neutral-5">
            Member Management
          </h1>
          <Button onClick={() => closeModal(true)} className="rounded-lg p-2">
            <span className="text-sm capitalize">tambah member</span>
          </Button>
        </div>
      </div>
    </>
  )
}
