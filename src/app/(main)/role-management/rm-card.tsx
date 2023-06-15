"use client"

import { useRouter } from "next/navigation"

import useStore from "@/store/useStore"
import DeleteModal from "@/components/ui/DeleteModal"
import SelectTable from "@/components/ui/SelectTable"

import MemberForm from "./rm-form"

const options = [
  {
    name: "Super Admin",
    value: "super-admin",
    bgColor: "bg-[#75C29F] bg-opacity-30",
  },
  { name: "Admin", value: "admin", bgColor: "bg-[#FFF3B7] bg-opacity-50" },
]

export default function MemberCard({ data }: any) {
  const router = useRouter()
  const { changeRole, deleteUser } = useStore()

  return (
    <>
      <div className="flex items-center rounded-lg border bg-white px-5 py-4 md:grid md:grid-cols-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-neutral-3" />
          <div>
            <p className="mb-1 font-medium">
              {data.firstName} {data.lastName}
            </p>
            <p className="text-xs text-neutral-4">{data.email}</p>
          </div>
        </div>
        <div className="mx-auto hidden md:block">
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
        <div className="ml-auto hidden text-neutral-4 md:block">
          <p>{data.phone}</p>
        </div>
        <div className="ml-auto flex justify-end gap-2 md:ml-0">
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
