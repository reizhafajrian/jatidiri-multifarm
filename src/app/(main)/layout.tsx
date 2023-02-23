import Header from '@/components/layout/main/Header'
import Sidebar from '@/components/layout/main/Sidebar'
import Toast from '@/components/shared/Toast'
import { ILayoutProps } from '@/data/interfaces'

export default function MainLayout(props: ILayoutProps) {
  return (
    <>
      <Toast />
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
