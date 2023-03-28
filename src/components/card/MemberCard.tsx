'use client'
import useStore from '@/store/useStore'
import { useRouter } from 'next/navigation'
import DeleteModal from '../form/DeleteModal'
import MemberForm from '../form/MemberForm'
import SelectTable from '../shared/SelectTable'

const options = [
  {
    name: 'Super Admin',
    value: 'super-admin',
    bgColor: 'bg-[#75C29F] bg-opacity-30',
  },
  { name: 'Admin', value: 'admin', bgColor: 'bg-[#FFF3B7] bg-opacity-50' },
]

export default function MemberCard({ data }: any) {
  const router = useRouter()
  const { changeRole, deleteUser } = useStore()

  return (
    <>
      <div className="grid grid-cols-4 items-center rounded-lg border bg-white py-4 px-5">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-neutral-3" />
          <div>
            <p className="mb-1 font-medium">
              {data.firstName} {data.lastName}
            </p>
            <p className="text-xs text-neutral-4">{data.email}</p>
          </div>
        </div>
        <div className="mx-auto">
          <SelectTable
            value={data.role}
            options={options}
            triggerClassName={`${
              options.find((opt) => opt.value === data.role)?.bgColor
            } font-semibold text-neutral-4 text-xs`}
            onChange={(value) =>
              changeRole({ _id: data.id, role: value }, router)
            }
          />
        </div>
        <div className="ml-auto text-neutral-4">
          <p>{data.phone}</p>
        </div>
        <div className="flex justify-end gap-2">
          <MemberForm formType="edit" values={data} />
          <DeleteModal
            title={`Hapus Member Ini?`}
            desc={`Apakah kamu yakin ingin menghapus member ini? Tindakan ini tidak bisa dibatalkan`}
            deleteHandler={() => deleteUser(data.id, router)}
          />
        </div>
      </div>
    </>
  )
}
