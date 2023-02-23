'use client'
import { useState } from 'react'
import DeleteMember from '../form/DeleteMember'
import EditMemberForm from '../form/EditMemberForm'
import { Button, Listbox } from '../shared'

const options = [
  { name: 'Super Admin', bgColor: 'bg-[#75C29F] bg-opacity-30' },
  { name: 'Admin', bgColor: 'bg-[#FFF3B7] bg-opacity-50' },
]

export default function MemberCard({ data }: any) {
  const [isOpen, closeModal] = useState(false)
  const [isEditOpen, closeEditModal] = useState(false)
  const [role, setRole] = useState(options[0])

  return (
    <>
      <DeleteMember isOpen={isOpen} closeModal={closeModal} />
      <EditMemberForm isOpen={isEditOpen} closeModal={closeEditModal} />
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
            className={role.bgColor + ' w-36'}
            optionsClassname="w-36 bg-white"
          />
        </div>
        <div className="ml-auto text-neutral-4">
          <p>{data.whatsapp_number}</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button intent="edit" onClick={() => closeEditModal(true)} />
          <Button intent="delete" onClick={() => closeModal(true)} />
        </div>
      </div>
    </>
  )
}
