'use client'
import DownloadIcon from '@/assets/icons/download-outline.svg'
import Navbar from '@/components/Layout/Navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IProps {
  children: React.ReactNode
}

export default function AnimalLayout(props: IProps) {
  const pathname = usePathname()
  const animal_type = pathname?.split('/')[1]

  const menu = [
    { name: 'Pejantan', link: `/${animal_type}/male` },
    { name: 'Betina', link: `/${animal_type}/female` },
    { name: 'Cempek', link: `/${animal_type}/cempek` },
  ]

  const title =
    animal_type === 'goat'
      ? 'Kambing'
      : animal_type === 'sheep'
      ? 'Domba'
      : 'Sapi'

  return (
    <>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href={`/${animal_type}/add`}
            className="rounded-lg bg-primary-4 py-2 px-4 hover:bg-primary-5"
            replace
          >
            <span className="text-sm font-semibold capitalize text-white">
              tambah data {title}
            </span>
          </Link>
          <button className="group grid h-8 w-8 place-items-center rounded-lg border bg-white hover:bg-primary-5">
            <DownloadIcon className="fill-black group-hover:fill-white" />
          </button>
        </div>
      </Navbar>
      {props.children}
    </>
  )
}
