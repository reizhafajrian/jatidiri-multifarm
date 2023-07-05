"use client"

import Card from "@/components/ui/card"

interface IProps {
  data: any
}

export default function ShedInfo({ data }: IProps) {
  const cardList = [
    { title: "Berat", content: `${data?.average_weight ?? 0} kg` },
    { title: "Range Usia", content: `${data?.average_age ?? 0} bulan` },
    { title: "Berat Pakan", content: `${data?.feed_weight ?? 0} kg` },
  ]

  return (
    <div className="mb-4 flex gap-3 py-5 md:mb-8 md:gap-8">
      {cardList?.map((item, idx) => (
        <Card key={idx} className="w-44 p-3 md:p-6">
          <h3 className="mb-4 text-xs font-semibold text-primary-4 md:mb-7 md:text-base">
            {item.title}
          </h3>
          <p className="font-medium text-neutral-5">{item.content}</p>
        </Card>
      ))}
    </div>
  )
}
