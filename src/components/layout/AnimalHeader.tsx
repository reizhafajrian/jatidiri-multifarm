'use client'
import Navbar from '@/components/layout/Navbar'
import { BackLink, Button } from '@/components/shared'
import { Download, Pen } from '@/components/shared/Icons'
import useStore from '@/store/useStore'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import AlertCluster from '../shared/AlertCluster'

interface AnimalHeaderProps {
  undefinedClusterTotal: number
}

const AnimalHeader: FC<AnimalHeaderProps> = ({ undefinedClusterTotal }) => {
  const router = useRouter()
  const path = usePathname()
  const { animal } = useStore()
  const headerMenu = getHeaderMenu(animal.name)
  const isListData = !path.includes('add') && !path.includes('edit')

  return (
    <>
      {isListData ? (
        <>
          {undefinedClusterTotal > 0 && (
            <AlertCluster
              animal={animal.title}
              undefinedClusterTotal={undefinedClusterTotal}
            />
          )}
          <Navbar
            menu={headerMenu}
            className="mb-5 flex items-center justify-between gap-5"
          >
            <div className="flex items-center justify-end gap-2">
              {/* <Button
                className="capitalize"
                onClick={() => router.push(`/${animal.name}/add`)}
              > */}
              <Link
                href={`/${animal.name}/add`}
              >
                <Pen className="h-4 w-4 md:hidden" />
                <span className="hidden md:block">
                  tambah data {animal.title}
                </span>
              </Link>

              {/* </Button> */}
              <Button
                variant="outline"
                className="px-3"
                onClick={() =>
                  window.open(`/api/${animal.name}/download`, '_blank')
                }
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </Navbar>
        </>
      ) : (
        <BackLink href={`/${animal.name}/male`} />
      )
      }
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
