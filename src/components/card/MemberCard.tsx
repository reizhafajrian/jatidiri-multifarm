'use client'
import { useAuthStore } from '@/store/auth'
import { useState } from 'react'
import DeleteModal from '../form/DeleteModal'
import MemberForm from '../form/MemberForm'
import { Button, Listbox } from '../shared'

const options = [
  { name: 'Super Admin', bgColor: 'bg-[#75C29F] bg-opacity-30' },
  { name: 'Admin', bgColor: 'bg-[#FFF3B7] bg-opacity-50' },
]

export default function MemberCard({ data }: any) {
  const [isOpen, closeModal] = useState(false)
  const [isEditOpen, closeEditModal] = useState(false)
  const { deleteMember } = useAuthStore()
  const [role, setRole] = useState(options[0])

  const deleteHandler = async () => {
    try {
      await deleteMember(data._id)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        title={`Hapus Member Ini?`}
        desc={`Apakah kamu yakin ingin menghapus member ini? Tindakan ini tidak bisa dibatalkan`}
        deleteHandler={deleteHandler}
      />
      <MemberForm
        formType="edit"
        isOpen={isEditOpen}
        closeModal={closeEditModal}
      />
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
          <Button
            variant="edit"
            size="xs"
            onClick={() => closeEditModal(true)}
          />
          <Button variant="delete" size="xs" onClick={() => closeModal(true)} />
        </div>
      </div>
    </>
  )
}
