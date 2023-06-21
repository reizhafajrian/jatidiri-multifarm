"use client"

import { useRouter } from "next/navigation"
import { ColumnDef } from "@tanstack/react-table"

import useAnimalList from "@/hooks/useAnimalList"
import useStore from "@/store/useStore"
import { Button } from "@/components/ui/Button"
import DeleteModal from "@/components/ui/DeleteModal"
import Table from "@/components/ui/Table"

import { cempekTColumns, femaleTColumns, maleTColumns } from "./column"

interface IProps {
  animal: string
}

export default function AnimalTable({ animal }: IProps) {
  const router = useRouter()
  const { type, deleteAnimal } = useStore()
  const { data, loading, mutate } = useAnimalList()

  const columns: ColumnDef<any, any>[] = [
    ...(type === "cempek"
      ? cempekTColumns
      : type === "male"
      ? maleTColumns
      : femaleTColumns),
    {
      header: "Aksi",
      accessorKey: "_id",
      cell: (data) => (
        <div className="flex gap-2">
          <Button
            size="xs"
            variant="edit"
            onClick={() => router.replace(`/${animal}/edit/${data.getValue()}`)}
          />
          <DeleteModal
            title={`Hapus Data Ini?`}
            desc={`Apakah kamu yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
            deleteHandler={async () => {
              await deleteAnimal(data.getValue())
              mutate()
            }}
          />
        </div>
      ),
    },
    { header: "Keterangan", accessorKey: "description" },
  ]

  return (
    <Table isLoading={loading} fixedCol={3} data={data} columns={columns} />
  )
}
