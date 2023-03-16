'use client'
import { BackLink, Button } from '@/components/shared'
import { Pen } from '@/components/shared/Icons'
import { useAnimalStore } from '@/store/animal'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import ShedAnimalForm from '../form/ShedAnimalForm'
import Navbar from './Navbar'

interface ShedDetailHeaderProps {
  animal: string
  shed_code: string
  type?: string
}

const ShedDetailHeader: FC<ShedDetailHeaderProps> = (props) => {
  const { animal, shed_code, type } = props
  const [isOpen, closeModal] = useState(false)
  const { animalTitle } = useAnimalStore()
  const title = animalTitle(animal)
  const pathname = usePathname()
  const id = pathname.split('/')[3]

  const baseUrl = `/shed/${animal}/${id}`

  const menu = [
    { name: 'Informasi', link: baseUrl },
    { name: 'Pejantan', link: baseUrl + '/male' },
    { name: 'Betina', link: baseUrl + '/female' },
    { name: 'Cempek', link: baseUrl + '/cempek' },
  ]

  return (
    <>
      <ShedAnimalForm isOpen={isOpen} closeModal={closeModal} animal={animal} />

      <BackLink href="/shed/goat" />
      <div className="mb-8">
        <h1 className="my-6 text-2xl font-semibold text-neutral-5">
          Detail Kandang <span className="text-primary-5">#{shed_code}</span>
        </h1>
        <p className="font-light">
          Informasi Detail terkait Kandang Nomor
          <span className="font-semibold"> {shed_code}</span> yang berisi hewan
          <span className="font-semibold"> {title}</span>.
        </p>
      </div>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between">
        {type && (
          <Button onClick={() => closeModal(true)}>
            Tambah {title}
            <Pen className="ml-3 h-4 w-4 fill-white" />
          </Button>
        )}
      </Navbar>
    </>
  )
}

export default ShedDetailHeader
