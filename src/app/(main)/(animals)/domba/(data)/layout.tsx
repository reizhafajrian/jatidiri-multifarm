import DownloadIcon from '@/assets/icons/download-outline.svg'
import Navbar from '@/components/Layout/Navbar'
import Link from 'next/link'

const menu = [
  { name: 'Pejantan', link: '/domba/pejantan' },
  { name: 'Betina', link: '/domba/betina' },
  { name: 'Cempek', link: '/domba/cempek' },
]

interface IProps {
  children: React.ReactNode
}

export default function DombaLayout(props: IProps) {
  return (
    <>
      <Navbar menu={menu} className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/domba/add"
            className="rounded-lg bg-primary-4 py-2 px-4 hover:bg-primary-5"
            replace
          >
            <span className="text-sm font-semibold capitalize text-white">
              tambah data domba
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
