'use client'
import { useAnimalStore } from '@/store/animal'
import { useShedStore } from '@/store/shed'
import { useState } from 'react'
import ShedAnimalForm from '../form/ShedAnimalForm'
import { BackLink, Button } from '../shared'
import { PencilSolid } from '../shared/Icons'
import Navbar from './Navbar'

export default function ShedDetailHeader() {
  const [isOpen, closeModal] = useState(false)
  const { shed_code, animal_type } = useShedStore().shed
  const { animalTitle, gender } = useAnimalStore()

  const title = animalTitle(animal_type)

  const menu = [
    { name: 'Informasi', link: `/shed/${shed_code}` },
    { name: 'Pejantan', link: `/shed/${shed_code}/male` },
    { name: 'Betina', link: `/shed/${shed_code}/female` },
  ]

  return (
    <>
      <ShedAnimalForm
        isOpen={isOpen}
        closeModal={closeModal}
        animal_type={animal_type}
      />

      <BackLink href="/shed?type=goat" />
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
        {gender && (
          <Button onClick={() => closeModal(true)} className="rounded-lg p-2">
            <span className="text-sm capitalize">tambah {title}</span>
            <PencilSolid />
          </Button>
        )}
      </Navbar>
    </>
  )
}
