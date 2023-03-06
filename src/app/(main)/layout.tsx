import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import { ILayoutProps } from '@/data/interfaces'

export default function MainLayout(props: ILayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-64 min-h-screen bg-neutral-1 p-6">
        <div className="max-w-6xl">
          <Header />
          {props.children}
        </div>
      </div>
    </>
  )
}
