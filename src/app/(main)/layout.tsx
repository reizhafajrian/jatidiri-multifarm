import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'

interface IProps {
  children: React.ReactNode
}

export default function MainLayout(props: IProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-64 min-h-screen bg-neutral-1 p-6">
        <Header />
        {props.children}
      </div>
    </>
  )
}
