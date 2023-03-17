'use client'
import { IShed } from '@/store/shed'
import { FC, useState } from 'react'
import ShedInfoFilter from '../filter/ShedInfoFilter'
import ShedDetailForm from '../form/ShedDetailForm'
import { Card } from '../shared'
import ShedInfoTable from '../table/ShedInfoTable'

interface ShedInfoProps {
  data: IShed
  options: any
}

const ShedInfo: FC<ShedInfoProps> = ({ data, options }) => {
  const [isOpen, closeModal] = useState(false)

  const cardList = [
    { title: 'Berat', content: `${data.average_weight ?? 0} kg` },
    { title: 'Range Usia', content: `${data.average_age ?? 0} bulan` },
    { title: 'Berat Pakan', content: `${data.feed_weight ?? 0} kg` },
  ]

  return (
    <>
      <div className="mb-8 flex gap-8 py-5">
        {cardList.map((item, idx) => (
          <Card key={idx} className="w-44">
            <h3 className="mb-7 text-base font-semibold text-primary-4">
              {item.title}
            </h3>
            <p className="font-medium text-neutral-5">{item.content}</p>
          </Card>
        ))}
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl font-semibold text-neutral-5">
          History Kandang
          <span className="text-primary-5"> #{data.shed_code}</span>
        </h1>
        <div className="flex items-center justify-between">
          <ShedInfoFilter options={options} />
          <ShedDetailForm options={options} shed_code={data._id!} />
        </div>
        <ShedInfoTable shed_code={data._id!} />
      </div>
    </>
  )
}

export default ShedInfo
