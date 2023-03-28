import HppFilter from '@/components/filter/HppFilter'
import HppHeader from '@/components/layout/HppHeader'
import HppTable from '@/components/table/HppTable'
import { cookies } from 'next/headers'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | HPP',
}

export default function Page(props: { params: any }) {
  const data = use(getData(props.params.animal, cookies().get('token')?.value!))


  return (
    <>
      <HppHeader animal_type={props.params.animal} />
      <HppFilter />
      <HppTable data={data} />
    </>
  )
}

const getData = async (animal: string, token: string) => {
  try {

    const res = await fetch(
      process.env.API_BASE_URL + `/hpp/get?animal_type=${animal}`,
      {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    )
    const data = await res.json()
    return data.data

  } catch (error) {
    console.log(error)

  }


}
