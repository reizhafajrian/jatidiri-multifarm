import { animalTitle } from '@/data/data'
import { useShedStore } from '@/store/shed'
import { BackLink } from '../shared'
import Navbar from './Navbar'

export default function ShedDetailHeader() {
  const { animal_type, shed_code } = useShedStore.getState().shed

  const menu = [
    { name: 'Informasi', link: `/shed/${animal_type}/${shed_code}` },
    { name: 'Pejantan', link: `/shed/${animal_type}/${shed_code}/male` },
    { name: 'Betina', link: `/shed/${animal_type}/${shed_code}/female` },
  ]

  return (
    <>
      <BackLink />
      <div className="mb-8">
        <h1 className="my-6 text-2xl font-semibold text-neutral-5">
          Detail Kandang <span className="text-primary-5">#{shed_code}</span>
        </h1>
        <p className="font-light">
          Informasi Detail terkait Kandang Nomor
          <span className="font-semibold"> {shed_code}</span> yang berisi hewan
          <span className="font-semibold"> {animalTitle(animal_type!)}</span>.
        </p>
      </div>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between" />
    </>
  )
}
