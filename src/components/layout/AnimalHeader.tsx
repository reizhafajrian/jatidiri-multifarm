'use client'
import Navbar from '@/components/layout/Navbar'
import { BackLink, Button } from '@/components/shared'
import { Download, ExclamationTriangle } from '@/components/shared/Icons'
import { animalTitle } from '@/store/animal/handlers'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useState } from 'react'

interface AnimalHeaderProps {
  animal: string
}

const AnimalHeader: FC<AnimalHeaderProps> = ({ animal }) => {
  const router = useRouter()
  const path = usePathname()
  const [alertCluster] = useState(false)
  const headerMenu = getHeaderMenu(animal)
  const isListData = !path.includes('add' || 'edit')
  // !path.startsWith(`/${animal}/add`) && !path.startsWith(`/${animal}/edit`)

  return (
    <>
      {isListData ? (
        <>
          {alertCluster && <AlertCluster />}
          <Navbar
            menu={headerMenu}
            className="mb-5 flex items-center justify-between"
          >
            <div className="flex items-center justify-end gap-2">
              <Button
                className="capitalize"
                onClick={() => router.replace(`/${animal}/add`)}
              >
                tambah data {animalTitle(animal)}
              </Button>
              <Button
                variant="outline"
                className="px-3"
                onClick={() => window.open(`/api/${animal}/download`, '_blank')}
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </Navbar>
        </>
      ) : (
        <BackLink href={`/${animal}/male`} />
      )}
    </>
  )
}

export default AnimalHeader

const getHeaderMenu = (animal: string) => {
  const links = [
    { name: 'Pejantan', link: `/${animal}/male` },
    { name: 'Betina', link: `/${animal}/female` },
  ]

  if (animal !== 'cow') {
    links.push({ name: 'Cempek', link: `/${animal}/cempek` })
  }

  return links
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
