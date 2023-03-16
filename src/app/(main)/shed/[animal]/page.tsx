import ShedHeader from '@/components/layout/ShedHeader'
import ShedTable from '@/components/table/ShedTable'
import { shedData } from '@/data/dummy'
import { IPageProps } from '@/data/interfaces'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed',
}

export default function ShedPage({ params }: IPageProps) {
  return (
    <>
      <ShedHeader />
      <ShedTable animal={params.animal} />
    </>
  )
}

const getData = async (animal: string) => {
  // return await Get(`//endpoint`)
  return shedData
}
