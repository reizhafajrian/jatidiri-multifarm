import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import ShedInfo from '@/components/layout/ShedInfo'
import { shedDetailData } from '@/data/dummy'
import { IPageProps } from '@/data/interfaces'
import { use } from 'react'

export default function ShedDetailPage(props: IPageProps) {
  const { animal, shed_code } = props.params
  const data = use(getData(shed_code))

  return (
    <>
      <ShedDetailHeader animal={animal} shed_code={shed_code} />
      <ShedInfo shed_code={shed_code} data={data} />
    </>
  )
}

const getData = async (animal: string) => {
  // return await Get(`//endpoint`)
  return shedDetailData
}
