'use client'
import Navbar from '@/components/layout/Navbar'
import { animalTitle } from '@/data/data'
import { IAnimalProps } from '@/data/interfaces'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../shared'
import { ArrowDownTray, ExclamationTriangle } from '../shared/Icons'

export default function AnimalHeader({ animal_type }: IAnimalProps) {
  const router = useRouter()
  const [alertCluster, setAlertCluster] = useState(false)

  const menu =
    animal_type === 'cow'
      ? [
          { name: 'Pejantan', link: `/${animal_type}/male` },
          { name: 'Betina', link: `/${animal_type}/female` },
        ]
      : [
          { name: 'Pejantan', link: `/${animal_type}/male` },
          { name: 'Betina', link: `/${animal_type}/female` },
          { name: 'Cempek', link: `/${animal_type}/cempek` },
        ]

  return (
    <>
      {alertCluster && (
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
      )}
      <Navbar menu={menu} className="mb-5 flex items-center justify-between">
        <div className="flex items-center justify-end gap-2">
          <Button
            className="rounded-lg p-2"
            onClick={() => router.push(`/${animal_type}/add`)}
          >
            <span className="text-sm capitalize">
              tambah data {animalTitle(animal_type!)}
            </span>
          </Button>
          <Button intent="secondary" className="rounded-lg p-2">
            <ArrowDownTray />
          </Button>
        </div>
      </Navbar>
    </>
  )
}
