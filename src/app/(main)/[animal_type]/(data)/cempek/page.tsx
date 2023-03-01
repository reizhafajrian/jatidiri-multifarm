import AnimalHeader from '@/components/layout/AnimalHeader'
import { StoreInitializer } from '@/components/shared'
import CempekTable from '@/components/table/CempekTable'
import { IPageProps } from '@/data/interfaces'
import { fetcher } from '@/utils/fetcher'
import { cookies } from 'next/headers'

export default async function CempekPage(props: IPageProps) {
  const nextCookies = cookies()
  const { animal_type } = props.params

  const token = nextCookies.get('token')?.value
  const url = `${process.env.API_BASE_URL}/${animal_type && 'goat'}/get`
  const { data: cempekList } = await fetcher({ url, token })
  const cempek = { animal_type, cempekList }

  return (
    <main>
      <StoreInitializer data={{ cempek }} />
      <AnimalHeader />
      <CempekTable />
    </main>
  )
}
