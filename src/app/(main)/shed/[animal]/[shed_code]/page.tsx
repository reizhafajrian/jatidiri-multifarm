import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import ShedInfo from '@/components/layout/ShedInfo'
import { IPageProps } from '@/data/interfaces'
import { cookies } from 'next/headers'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Shed',
}

export default function ShedDetailPage(props: IPageProps) {
  const { animal, shed_code } = props.params
  const data = use(getData(shed_code, cookies().get('token')?.value!))

  return (
    <>
      <ShedDetailHeader animal={data.animal_type} shed_code={data.shed_code} />
      <ShedInfo data={data} />
    </>
  )
}

const getData = async (shed_code: string, token: string) => {
  const res = await fetch(
    process.env.API_BASE_URL + '/shed/get/detail/' + shed_code,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  ).then((res) => res.json())

  return res.data
}
