"use client"

import { usePathname, useRouter } from "next/navigation"
import { ColumnDef } from "@tanstack/react-table"

import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"

import { Button } from "../ui/button"
import DeleteDialog from "../ui/delete-dialog"
import Table from "../ui/table"
import { cempekTColumns, femaleTColumns, maleTColumns } from "./column"
import TableFilter from "./table-filter"

interface IProps {
  animal: string
  type: string
}

export default function TableData({ animal, type }: IProps) {
  const router = useRouter()
  const path = usePathname()
  const { deleteAnimal, filterByDate, originMale, originFemale } = useStore()

  // set queries filter
  const queries: Array<string> = [filterByDate]
  const isCempek = type === "cempek"
  !isCempek && queries.push(`gender=${type}`)
  originMale != "all" && queries.push(`origin_male=${originMale}`)
  originFemale != "all" && queries.push(`origin_female=${originFemale}`)

  // fetch data list
  const { data, loading, error, mutate } = useDataList({
    url: isCempek ? `/api/${animal}/cempek/get` : `/api/${animal}/get`,
    queries,
  })

  const columns: ColumnDef<any, any>[] = [
    ...(isCempek
      ? cempekTColumns
      : type === "true"
      ? maleTColumns
      : femaleTColumns),
    {
      header: "Aksi",
      accessorKey: "_id",
      cell: ({ getValue }) => (
        <div className="flex gap-2">
          <Button
            size="xs"
            variant="edit"
            onClick={() => router.replace(`${path}/${getValue()}`)}
          />
          <DeleteDialog
            title={`Hapus Data Ini?`}
            desc={`Apakah anda yakin ingin menghapus data? Tindakan ini tidak bisa dibatalkan`}
            handler={() => deleteAnimal(animal, type, getValue())}
            mutate={mutate}
          />
        </div>
      ),
    },
    { header: "Keterangan", accessorKey: "description" },
  ]

  return (
    <div>
      <TableFilter animal={animal} type={type} />
      {error ? (
        <div>{error.message}</div>
      ) : (
        <Table isLoading={loading} fixedCol={3} data={data} columns={columns} />
      )}
    </div>
  )
}
