import { Table } from "@tanstack/react-table"

import { Icons } from "../Icons"

interface IProps {
  table?: Table<any>
}

export default function PaginationHandler({ table }: IProps) {

  return (
    <div className="mt-5 flex items-center justify-center gap-2">
      <button
        type="button"
        className="px-3 py-2 text-xs disabled:text-black/30"
        onClick={() => table?.setPageIndex(0)}
        disabled={!table?.getCanPreviousPage()}
      >
        First
      </button>
      <button
        type="button"
        className="px-3 py-2 disabled:text-black/30"
        onClick={() => table?.previousPage()}
        disabled={!table?.getCanPreviousPage()}
      >
        <Icons.chevronLeft className="w-4" />
      </button>
      {[...Array(table?.getPageCount())].map((_, i) => (
        <button
          key={i}
          type="button"
          className="grid h-6 w-6 place-items-center rounded-lg text-xs disabled:bg-primary-4 disabled:text-white"
          disabled={table?.getState()?.pagination?.pageIndex === i}
          onClick={() => table?.setPageIndex(i)}
        >
          {i + 1}
        </button>
      ))}
      <button
        type="button"
        className="px-3 py-2 disabled:text-black/30"
        onClick={() => table?.nextPage()}
        disabled={!table?.getCanNextPage()}
      >
        <Icons.chevronRight className="w-4" />
      </button>
      <button
        type="button"
        className="px-3 py-2 text-xs disabled:text-black/30"
        onClick={() => table?.setPageIndex(table?.getPageCount() - 1)}
        disabled={!table?.getCanNextPage()}
      >
        Last
      </button>
    </div>
  )
}
