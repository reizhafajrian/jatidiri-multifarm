'use client'
import { useState } from 'react'
import ShedInfoFilter from '../filter/ShedInfoFilter'
import ShedDetailForm from '../form/ShedDetailForm'
import { Button, Card } from '../shared'
import ShedInfoTable from '../table/ShedInfoTable'

import { IShed } from '@/store/shed'
import { Pen } from 'lucide-react'
import { FC } from 'react'

interface ShedInfoProps {
  data: IShed
}

const ShedInfo: FC<ShedInfoProps> = ({ data }) => {
  const [isOpen, closeModal] = useState(false)

  const cardList = [
    { title: 'Berat', content: `${data.animal_weight ?? 0} kg` },
    { title: 'Range Usia', content: `${data.age_range ?? 0} bulan` },
    { title: 'Berat Pakan', content: `${data.feed_weight ?? 0} kg` },
  ]

  return (
    <>
      <ShedDetailForm
        shed_code={data._id!}
        isOpen={isOpen}
        closeModal={closeModal}
      />
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
          <ShedInfoFilter />
          <Button onClick={() => closeModal(true)}>
            Tambah Data
            <Pen className="ml-3 h-4 w-4 fill-white" />
          </Button>
        </div>
        <ShedInfoTable shed_code={data._id!} />
      </div>
    </>
  )
}

export default ShedInfo
