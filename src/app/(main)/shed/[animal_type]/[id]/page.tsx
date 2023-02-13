import BackLink from '@/components/BackLink'
import Navbar from '@/components/Layout/Navbar'
import ShedInfo from '@/components/Shed/ShedInfo'
import { animalTitle } from '@/data/data'
import { shedData, shedDetailData } from '@/data/dummy'

export default function ShedDetailPage({ params: { animal_type, id } }: any) {
  const menu = [
    { name: 'Informasi', link: `/shed/${animal_type}/${id}` },
    { name: 'Pejantan', link: `/shed/${animal_type}/${id}/male` },
    { name: 'Betina', link: `/shed/${animal_type}/${id}/female` },
  ]

  return (
    <div>
      <BackLink href={`/shed/${animal_type}`} />
      <div className="mb-8">
        <h1 className="my-6 text-2xl font-semibold text-neutral-5">
          Detail Kandang{' '}
          <span className="text-primary-5">#{shedData[0].shed_code}</span>
        </h1>
        <p className="font-light">
          Informasi Detail terkait Kandang Nomor
          <span className="font-semibold"> {shedData[0].shed_code}</span> yang
          berisi hewan
          <span className="font-semibold"> {animalTitle(animal_type)}</span>.
        </p>
      </div>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between" />
      <ShedInfo data={shedData[0]} detail={shedDetailData} />
    </div>
  )
}
