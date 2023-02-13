'use client'
import PencilIcon from '@/assets/icons/pencil.svg'
import BackLink from '@/components/BackLink'
import Button from '@/components/Button'
import AddShedAnimalForm from '@/components/Form/AddShedAnimalForm'
import Navbar from '@/components/Layout/Navbar'
import Modal from '@/components/Modal'
import { animalTitle } from '@/data/data'
import { useState } from 'react'

interface IProps {
  children: React.ReactNode
  params: { animal_type: any; id: any }
}

export default function ShedDetailLayout(props: IProps) {
  const { id, animal_type } = props.params
  const [isOpen, closeModal] = useState(false)

  const menu = [
    { name: 'Informasi', link: `/shed/${animal_type}/${id}` },
    { name: 'Pejantan', link: `/shed/${animal_type}/${id}/male` },
    { name: 'Betina', link: `/shed/${animal_type}/${id}/female` },
  ]

  return (
    <>
      <Modal isOpen={isOpen} closeModal={() => closeModal(false)}>
        <AddShedAnimalForm
          closeModal={() => closeModal(false)}
          title={animalTitle(animal_type)}
        />
      </Modal>

      <div>
        <BackLink href={`/shed/${animal_type}`} />
        <div className="mb-8">
          <h1 className="my-6 text-2xl font-semibold text-neutral-5">
            Detail Kandang <span className="text-primary-5">#{id}</span>
          </h1>
          <p className="font-light">
            Informasi Detail terkait Kandang Nomor
            <span className="font-semibold"> {id}</span> yang berisi hewan
            <span className="font-semibold"> {animalTitle(animal_type)}</span>.
          </p>
        </div>
        <Navbar menu={menu} className="mb-5 flex items-center justify-between">
          <Button
            onClick={() => closeModal(true)}
            className="flex w-fit items-center justify-center gap-2 px-4"
          >
            <span className="text-sm font-semibold capitalize">
              tambah {animalTitle(animal_type)}
            </span>
            <PencilIcon />
          </Button>
        </Navbar>
        {props.children}
      </div>
    </>
  )
}
