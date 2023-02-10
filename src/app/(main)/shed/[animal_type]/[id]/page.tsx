import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import Navbar from '@/components/Layout/Navbar'
import ShedInfo from '@/components/Shed/ShedInfo'
import { shedData, shedDetailData } from '@/data/dummy'
import Link from 'next/link'

export default function ShedDetailPage({ params: { animal_type, id } }: any) {
  const menu = [
    { name: 'Informasi', link: `/shed/${animal_type}/${id}` },
    { name: 'Pejantan', link: `/shed/${animal_type}/${id}/male` },
    { name: 'Betina', link: `/shed/${animal_type}/${id}/female` },
  ]

  const title =
    animal_type === 'goat'
      ? 'Kambing'
      : animal_type === 'sheep'
      ? 'Domba'
      : 'Sapi'

  return (
    <div>
      <Link
        href={`/shed/${animal_type}`}
        replace
        className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary-7"
      >
        <ArrowUpIcon className="-rotate-90 fill-primary-7 stroke-primary-7" />
        kembali
      </Link>
      <h1 className="my-6 text-2xl font-semibold text-neutral-5">
        Detail Kandang{' '}
        <span className="text-primary-5">#{shedData[0].shed_code}</span>
      </h1>
      <p className="mb-8 font-light">
        Informasi Detail terkait Kandang Nomor
        <span className="font-semibold"> {shedData[0].shed_code}</span> yang
        berisi hewan
        <span className="font-semibold"> {title}</span>.
      </p>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between" />
      <ShedInfo data={shedData[0]} detail={shedDetailData} />
    </div>
  )
}
