'use client'
import { BackLink } from '@/components/shared'
import useStore from '@/store/useStore'
import { FC } from 'react'
import ShedAnimalForm from '../form/ShedAnimalForm'
import Navbar from './Navbar'

const ShedDetailHeader: FC = () => {
  const { animal, type, shed_code, shed_id } = useStore()
  const baseUrl = `/shed/${animal.name}/${shed_id}`

  const menu = [
    { name: 'Informasi', link: baseUrl },
    { name: 'Pejantan', link: baseUrl + '/male' },
    { name: 'Betina', link: baseUrl + '/female' },
  ]

  if (animal.name !== 'cow') {
    menu.push({ name: 'Cempek', link: baseUrl + '/cempek' })
  }

  return (
    <>
      <BackLink href="/shed/goat" />
      <div className="mb-8">
        <h1 className="my-6 text-2xl font-semibold text-neutral-5">
          Detail Kandang <span className="text-primary-5">#{shed_code}</span>
        </h1>
        <p className="font-light">
          Informasi Detail terkait Kandang Nomor
          <span className="font-semibold"> {shed_code}</span> yang berisi hewan
          <span className="font-semibold"> {animal.title}</span>.
        </p>
      </div>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between">
        {type && <ShedAnimalForm />}
      </Navbar>
    </>
  )
}

export default ShedDetailHeader
