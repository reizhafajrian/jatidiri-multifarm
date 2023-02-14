import DownloadIcon from '@/assets/icons/download-outline.svg'
import Button from '@/components/Button'
import Navbar from '@/components/Layout/Navbar'
import { animalTitle } from '@/data/data'
import { ILayoutProps } from '@/data/interfaces'
import Link from 'next/link'

export default function AnimalLayout(props: ILayoutProps) {
  const { animal_type } = props.params

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
    <div>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button className="w-fit px-2">
            <Link href={`/${animal_type}/add`} replace>
              <span className="text-sm capitalize">
                tambah data {animalTitle(animal_type)}
              </span>
            </Link>
          </Button>
          <Button intent="secondary" className="w-fit px-2">
            <DownloadIcon />
          </Button>
        </div>
      </Navbar>
      {props.children}
    </div>
  )
}
