import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import { StoreInitializer } from '@/components/shared'
import HppTable from '@/components/table/HppTable'

export const metadata = {
  title: 'Jatidiri Multifarm | HPP',
}

export default function Page(props: { params: any }) {
  const { animal } = props.params

  return (
    <>
      <StoreInitializer data={{ animal, searchType: `hpp-${animal}` }} />
      <HppHeader animal_type={animal} />
      <HppFilter />
      <HppTable />
    </>
  )
}

const getData = async (animal: string, token: string) => {
  try {
    const res = await fetch(
      process.env.API_BASE_URL + `/hpp/get?animal_type=${animal}`,

      {
        next: {
          revalidate: 0,
        },
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
    const data = await res.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
}
