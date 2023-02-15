'use client'
import Button from '@/components/Button'
import { useState } from 'react'
import AddMemberForm from './AddMemberForm'
import MemberCard from './MemberCard'

export default function RoleManagement() {
  const [isOpen, closeModal] = useState(false)

  return (
    <>
      <AddMemberForm isOpen={isOpen} closeModal={closeModal} />
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-neutral-5">
            Member Management
          </h1>
          <Button onClick={() => closeModal(true)}>
            <span className="text-sm capitalize">tambah member</span>
          </Button>
        </div>
        <div className="space-y-3">
          {memberList.map((data, idx) => (
            <MemberCard data={data} key={idx} />
          ))}
        </div>
      </div>
    </>
  )
}

const memberList = [
  {
    name: 'Alfansuri',
    email: 'alfansuri@jatidiri.com',
    role: '1',
    whatsapp_number: '087872345678',
  },
  {
    name: 'Will Smith',
    email: 'willsmith@jatidiri.com',
    role: '2',
    whatsapp_number: '087872345678',
  },
  {
    name: 'Lisa',
    email: 'lisa@jatidiri.com',
    role: '2',
    whatsapp_number: '087872345678',
  },
]
