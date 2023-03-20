import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import ShedInfo from '@/components/layout/ShedInfo'
import { StoreInitializer } from '@/components/shared'
import { cookies } from 'next/headers'
import { use } from 'react'

export const metadata = {
  title: 'Jatidiri Multifarm | Detail Shed',
}

export default function ShedDetailPage(props: { params: any }) {
  const { shed_code, animal } = props.params
  const { shedDetail: data, options } = use(
    getData(shed_code, cookies().get('token')?.value!)
  )

  return (
    <>
      <StoreInitializer data={{ animal }} />
      <ShedDetailHeader animal={animal} shed_code={data.shed_code} />
      <ShedInfo data={data} options={options} />
    </>
  )
}

const getData = async (shed_code: string, token: string) => {
  const baseUrl = process.env.API_BASE_URL
  const Authorization = `bearer ${token}`

  const resDetail = await fetch(baseUrl + '/shed/get/detail/' + shed_code, {
    headers: { Authorization },
  }).then((res) => res.json())

  const feed = await fetch(baseUrl + '/feed/get', {
    headers: { Authorization },
  }).then((res) => res.json())

  const vitamin = await fetch(baseUrl + '/vitamin/get', {
    headers: { Authorization },
  }).then((res) => res.json())

  const vaccine = await fetch(baseUrl + '/vaccine/get', {
    headers: { Authorization },
  }).then((res) => res.json())

  const anthelmintic = await fetch(baseUrl + '/anthelmintic/get', {
    headers: { Authorization },
  }).then((res) => res.json())

  return {
    shedDetail: resDetail.data,
    options: {
      feed: feed.data,
      vitamin: vitamin.data,
      vaccine: vaccine.data,
      anthelmintic: anthelmintic.data,
    },
  }
}
