"use client"

import { useEffect, useMemo } from "react"
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import SimpleBar from "simplebar-react"

import { cn } from "@/lib/utils"
import PaginationHandler from "@/components/ui/table/pagination-handler"
import TD from "@/components/ui/table/td"
import TH from "@/components/ui/table/th"

interface IProps {
  columns: any
  data: any
  fixedCol: number
  isLoading: boolean
  pageSize?: number
}

export default function Table(props: IProps) {
  const { columns, data, fixedCol, isLoading, pageSize } = props
  const tData = useMemo<any[]>(() => (isLoading ? [] : data), [data, isLoading])
  const tColumns = useMemo<any[]>(() => columns, [columns])

  const table = useReactTable({
    data: tData ?? [{}],
    columns: tColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  useEffect(() => {
    if (pageSize) table.setPageSize(pageSize)
  }, [pageSize, table])

  return (
    <div className="max-w-full">
      <div className="max-w-full whitespace-nowrap rounded-lg text-[#3B3E45] shadow">
        <SimpleBar forceVisible="y">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  <th className="left-0 min-w-[50px] border-b border-[#B4B5B6] bg-white p-4 text-left text-xs font-semibold md:sticky">
                    No
                  </th>
                  <TH
                    header={headerGroup.headers[0]}
                    className={cn(
                      "left-[50px] md:sticky",
                      fixedCol === 3 ? "min-w-[150px]" : "pr-3"
                    )}
                  />
                  {fixedCol === 3 && (
                    <TH
                      header={headerGroup.headers[1]}
                      className="left-[200px] min-w-[100px] md:sticky"
                    />
                  )}
                  {headerGroup.headers
                    .slice(fixedCol === 3 ? 2 : 1, headerGroup.headers.length)
                    .map((header) => (
                      <TH key={header.id} header={header} />
                    ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {isLoading ? (
                <tr className="border-b border-[#DCDFE3] last:border-none">
                  <td
                    className="bg-white p-4 py-5 text-xs font-semibold"
                    colSpan={table.getTotalSize()}
                  >
                    Memuat data...
                  </td>
                </tr>
              ) : table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className="border-b border-[#DCDFE3] last:border-none"
                  >
                    <td className="left-0 z-10 min-w-[50px] bg-white p-4 text-xs md:sticky">
                      {i + 1}
                    </td>
                    <TD
                      cell={row.getVisibleCells()[0]}
                      className={cn(
                        "z-10 md:sticky md:left-[50px]",
                        fixedCol === 3 ? "min-w-[150px]" : "pr-3"
                      )}
                    />
                    {fixedCol === 3 && (
                      <TD
                        cell={row.getVisibleCells()[1]}
                        className="left-[200px] z-10 min-w-[100px] md:sticky"
                      />
                    )}
                    {row
                      .getVisibleCells()
                      .slice(
                        fixedCol === 3 ? 2 : 1,
                        row.getVisibleCells().length
                      )
                      .map((cell) => (
                        <TD key={cell.id} cell={cell} />
                      ))}
                  </tr>
                ))
              ) : (
                <tr className="border-b border-[#DCDFE3] last:border-none">
                  <td
                    className="bg-white p-4 py-5 text-xs font-semibold"
                    colSpan={table.getTotalSize()}
                  >
                    Data tidak tersedia
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </SimpleBar>
      </div>
      <PaginationHandler table={table} />
    </div>
  )
}
