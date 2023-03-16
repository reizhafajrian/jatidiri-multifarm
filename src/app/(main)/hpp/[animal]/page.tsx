import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import HppTable from '@/components/table/HppTable'
import { hppData } from '@/lib/dummy'
import { IPageProps } from '@/lib/types'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | HPP',
}

export default function HppPage(props: IPageProps) {
  const { hppData } = use(getData(props.params.animal))

  return (
    <>
      <HppHeader />
      <HppFilter />
      <HppTable data={hppData} />
    </>
  )
}

const getData = async (anima: string) => {
  // return await Get(`endpoint`)

  return {
    hppData,
  }
}
