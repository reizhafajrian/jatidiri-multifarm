"use client"

import SimpleBar from "simplebar-react"

import "simplebar-react/dist/simplebar.min.css"

import { formatRupiah } from "@/lib/utils"

interface IProps {
  data: any
  total: any
}

export default function MilkSalesDiagram({ data, total }: IProps) {
  return (
    <div>
      <div className="my-8 text-center text-2xl font-semibold">
        {formatRupiah(total?.data ?? "0")}
      </div>
      <SimpleBar className="max-h-28">
        {data?.data.map((item: any, idx: number) => (
          <div className="mb-3 flex justify-between" key={idx}>
            <p>
              {item.count}{" "}
              <span className="text-[10px] text-primary-4">Lt</span>
            </p>
            <p className="text-[10px] text-primary-4">
              {item._id.month} {item._id.year}
            </p>
          </div>
        ))}
      </SimpleBar>
    </div>
  )
}
