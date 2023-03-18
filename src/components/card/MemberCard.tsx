'use client'
import { useState } from 'react'
import DeleteModal from '../form/DeleteModal'
import MemberForm from '../form/MemberForm'
import SelectTable from '../shared/SelectTable'

const options = [
  {
    name: 'Super Admin',
    value: 'super_admin',
    bgColor: 'bg-[#75C29F] bg-opacity-30',
  },
  { name: 'Admin', value: 'admin', bgColor: 'bg-[#FFF3B7] bg-opacity-50' },
]

export default function MemberCard({ data }: any) {
  const [isEditOpen, closeEditModal] = useState(false)
  const [role, setRole] = useState(options[0])

  const deleteHandler = async () => {}

  return (
    <>
      <div className="grid grid-cols-4 items-center rounded-lg border bg-white py-4 px-5">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-neutral-3" />
          <div>
            <p className="mb-1 font-medium">{data.name}</p>
            <p className="text-xs text-neutral-4">{data.email}</p>
          </div>
        </div>
        <div className="mx-auto">
          <SelectTable
            value={role.value}
            options={options}
            triggerClassName={`${role.bgColor} font-semibold text-neutral-4 text-xs`}
          />
        </div>
        <div className="ml-auto text-neutral-4">
          <p>{data.whatsapp_number}</p>
        </div>
        <div className="flex justify-end gap-2">
          <MemberForm formType="edit" />
          <DeleteModal
            title={`Hapus Member Ini?`}
            desc={`Apakah kamu yakin ingin menghapus member ini? Tindakan ini tidak bisa dibatalkan`}
            deleteHandler={deleteHandler}
          />
        </div>
      </div>
    </>
  )
}
