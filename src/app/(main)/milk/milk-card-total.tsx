"use client"

import { format } from "date-fns"

import useDataList from "@/hooks/useDataList"
import Card from "@/components/ui/Card"
import { Icons } from "@/components/ui/Icons"

export default function MilkTotalCard() {
  const { data, loading } = useDataList("/api/milk/get")

  const info = {
    milk_total: 35,
    milk_date: new Date(),
    milk_percentage: 5.2,
  }

  return (
    <Card className="flex justify-between">
      <div className="flex gap-6">
        <Icons.milkCircle />
        <div className="grid">
          <p className="text-sm font-medium md:text-base">Sisa Susu</p>
          <p className="mt-auto text-2xl font-semibold">
            {loading
              ? "..."
              : `${data.reduce(
                  (acc: number, cur: any) => acc + cur.amount,
                  0
                )} Liter`}
          </p>
        </div>
      </div>
      <div className="grid">
        <p className="text-base font-semibold text-primary-4">
          {loading ? "..." : format(info.milk_date, "MMM yyyy")}
        </p>
        <p className="ml-auto mt-auto flex h-fit w-fit items-center gap-1 rounded-xl bg-success-3 px-[10px] py-[2px]">
          <Icons.arrowUp className="w-3 stroke-success-1" />
          <span className="text-xs font-medium text-success-2">
            {loading ? "..." : info.milk_percentage} %
          </span>
        </p>
      </div>
    </Card>
  )
}
