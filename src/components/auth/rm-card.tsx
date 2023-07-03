"use client"

import { cn } from "@/lib/utils"
import useStore from "@/store/useStore"

import DeleteDialog from "../ui/delete-dialog"
import SelectTable from "../ui/select-table"
import MemberForm from "./rm-form"

export default function MemberCard({ data }: any) {
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
            triggerClassName={cn(
              "font-semibold text-neutral-4 text-xs w-[10rem]",
              options.find((opt) => opt.value === data.role)?.bgColor
            )}
            onChange={(value) => changeRole({ _id: data.id, role: value })}
          />
        </div>
        <div className="ml-auto hidden text-neutral-4 md:block">
          <p>{data.phone}</p>
        </div>
        <div className="ml-auto flex justify-end gap-2 md:ml-0">
          <MemberForm formType="edit" values={data} />
          <DeleteDialog
            title={`Hapus Member Ini?`}
            desc={`Apakah kamu yakin ingin menghapus member ini? Tindakan ini tidak bisa dibatalkan`}
            handler={() => deleteUser(data.id)}
          />
        </div>
      </div>
    </>
  )
}

const options = [
  { name: "Direksi", value: "direksi", bgColor: "bg-[#75C29F] bg-opacity-30" },
  {
    name: "Keuangan",
    value: "keuangan",
    bgColor: "bg-[#FFF3B7] bg-opacity-50",
  },
  {
    name: "Manajer Kandang",
    value: "manajer-kandang",
    bgColor: "bg-[#FFF3B7] bg-opacity-50",
  },
]
