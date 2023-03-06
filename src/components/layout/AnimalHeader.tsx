'use client'
import Navbar from '@/components/layout/Navbar'
import { useAnimalStore } from '@/store/animal'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { BackLink, Button, StoreInitializer } from '../shared'
import { ArrowDownTray, ExclamationTriangle } from '../shared/Icons'

const content = {
  sheep: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
  goat: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
  cow: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
}

interface IProps {
  animal_type: 'cow' | 'sheep' | 'goat'
}

export default function AnimalHeader({ animal_type }: IProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const animalFormContent = content[animal_type]

  const type = searchParams.get('type')
  const { animalTitle } = useAnimalStore()
  const [alertCluster] = useState(false)
  const headerMenu = getHeaderMenu(animal_type)
  const gender: any = type !== 'cempek' ? type : undefined

  return (
    <>
      <StoreInitializer
        data={{ animal: { animal_type, gender, animalFormContent } }}
      />
      {type ? (
        <>
          {alertCluster && <AlertCluster />}
          <Navbar
            menu={headerMenu}
            className="mb-5 flex items-center justify-between"
          >
            <div className="flex items-center justify-end gap-2">
              <Button
                className="rounded-lg p-2"
                onClick={() => router.push(`/${animal_type}/add`)}
              >
                <span className="text-sm capitalize">
                  tambah data {animalTitle(animal_type)}
                </span>
              </Button>
              <Button intent="secondary" className="rounded-lg p-2">
                <ArrowDownTray />
              </Button>
            </div>
          </Navbar>
        </>
      ) : (
        <BackLink />
      )}
    </>
  )
}

const getHeaderMenu = (animal_type: string) => {
  if (animal_type === 'cow') {
    return [
      { name: 'Pejantan', link: `/${animal_type}`, type: 'male' },
      { name: 'Betina', link: `/${animal_type}`, type: 'female' },
    ]
  } else {
    return [
      { name: 'Pejantan', link: `/${animal_type}`, type: 'male' },
      { name: 'Betina', link: `/${animal_type}`, type: 'female' },
      { name: 'Cempek', link: `/${animal_type}`, type: 'cempek' },
    ]
  }
}

const AlertCluster = () => {
  return (
    <div className="my-8 flex gap-5 bg-warning/30 px-5 py-3">
      <ExclamationTriangle />
      <div className="space-y-2">
        <p className="font-semibold">10 Kambing belum masuk kandang</p>
        <p className="text-xs">
          Segera masukan kambing ke kandang melalui halaman{' '}
          <span className="font-semibold">Cluster</span>
        </p>
      </div>
    </div>
  )
}
