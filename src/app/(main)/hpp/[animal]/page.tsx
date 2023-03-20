import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import HppTable from '@/components/table/HppTable'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | HPP',
}

export default function HppPage(props: { params: any }) {
  const data = use(getData(props.params.animal))

  return (
    <>
      <HppHeader />
      <HppFilter />
      <HppTable data={data} />
    </>
  )
}

const getData = async (animal: string) => {
  // return await Get(`endpoint`)

  const data = [
    {
      eartag_code: '111',
      type: 'Sapera',
      origin: 'Garut',
      weight: 20,
      age: 3,
      purchase_price: 1000000,
      feed_price: 1000000,
      other_price: 0,
      hpp: 1000000,
      selling_price: 1000000,
      status: { name: 'Terjual', value: 'sold' },
    },
  ]

  return data
}
