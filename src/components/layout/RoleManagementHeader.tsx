'use client'
import MemberForm from '../form/MemberForm'

export default function RoleManagementHeader() {
  return (
    <>
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-neutral-5">
            Member Management
          </h1>
          <MemberForm formType="add" />
        </div>
      </div>
    </>
  )
}
