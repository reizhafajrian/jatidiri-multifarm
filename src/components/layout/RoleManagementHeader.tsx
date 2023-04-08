'use client'
import MemberForm from '../form/MemberForm'

export default function RoleManagementHeader() {
  return (
    <div className="mb-8 flex items-center justify-end">
      <MemberForm formType="add" />
    </div>
  )
}
