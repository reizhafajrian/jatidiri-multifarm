import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import HppTable from '@/components/table/HppTable'
import { hppData } from '@/data/dummy'
import { IPageProps } from '@/data/interfaces'
import { use } from 'react'

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
