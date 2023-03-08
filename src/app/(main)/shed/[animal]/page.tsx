import ShedHeader from '@/components/layout/ShedHeader'
import ShedTable from '@/components/table/ShedTable'
import { shedData } from '@/data/dummy'
import { IPageProps } from '@/data/interfaces'
import { use } from 'react'

export default function ShedPage({ params }: IPageProps) {
  const data = use(getData(params.animal))

  return (
    <>
      <ShedHeader />
      <ShedTable data={data} />
    </>
  )
}

const getData = async (animal: string) => {
  // return await Get(`//endpoint`)
  return shedData
}
