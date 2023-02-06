import PageTabs from '@/components/PageTabs'
import TabelBetina from '@/components/Table/TabelBetina'
import TabelCempek from '@/components/Table/TabelCempek'
import TabelPejantan from '@/components/Table/TabelPejantan'
import { fetcher } from '@/libs/api'

const getData = async () => {
  const pejantan = await fetcher({
    url: 'https://63d4e20320b08498cbc3a1e6.mockapi.io/kambing',
    method: 'get',
  })

  return { pejantan }
}

export default async function DombaPage() {
  const data = await getData()

  return (
    <PageTabs
      categories={{
        Pejantan: <TabelPejantan data={data.pejantan} />,
        Betina: <TabelBetina data={data.pejantan} />,
        Cempek: <TabelCempek data={data.pejantan} />,
      }}
      addButton={{ title: 'tambah data domba' }}
    />
  )
}
