import PageTabs from '@/components/PageTabs'
import TabelBetina from '@/components/Table/TabelBetina'
import TabelCempek from '@/components/Table/TabelCempek'
import TabelPejantan from '@/components/Table/TabelPejantan'
import { fetcher } from '@/libs/api'
import { useState } from 'react'

export default function DombaPage(props: any) {
  const { dataPejantan, dataBetina, dataCempek } = props

  const [categories] = useState({
    Pejantan: <TabelPejantan data={dataPejantan} />,
    Betina: <TabelBetina data={dataBetina} />,
    Cempek: <TabelCempek data={dataCempek} />,
  })

  return (
    <PageTabs
      categories={categories}
      addButton={{ title: 'tambah data domba' }}
    />
  )
}

export async function getServerSideProps() {
  const dataPejantan = await fetcher({
    url: 'https://63d4e20320b08498cbc3a1e6.mockapi.io/kambing',
    method: 'get',
  })

  return {
    props: { dataPejantan, dataBetina: dataPejantan, dataCempek: dataPejantan },
  }
}
