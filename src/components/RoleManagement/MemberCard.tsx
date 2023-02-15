'use client'
import { useState } from 'react'
import Button from '../Button'
import Listbox from '../Listbox'
import DeleteMemberModal from './DeleteMemberModal'

const options = [
  { name: 'Super Admin', bgColor: 'bg-[#75C29F] bg-opacity-30' },
  { name: 'Admin', bgColor: 'bg-[#FFF3B7] bg-opacity-50' },
]

export default function MemberCard({ data }: any) {
  const [isOpen, closeModal] = useState(false)
  const [role, setRole] = useState(options[0])

  return (
    <>
      <DeleteMemberModal isOpen={isOpen} closeModal={closeModal} />
      <div className="grid grid-cols-4 items-center rounded-lg border bg-white py-4 px-5">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-neutral-3" />
          <div>
            <p className="mb-1 font-medium">{data.name}</p>
            <p className="text-xs text-neutral-4">{data.email}</p>
          </div>
        </div>
        <div className="mx-auto">
          <Listbox
            options={options}
            value={role}
            onChange={setRole}
            className={role.bgColor}
          />
        </div>
        <div className="ml-auto text-neutral-4">
          <p>{data.whatsapp_number}</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button intent="edit" />
          <Button intent="delete" onClick={() => closeModal(true)} />
        </div>
      </div>
    </>
  )
}
