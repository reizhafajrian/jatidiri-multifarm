import Header from '@/components/layout/main/Header'
import Sidebar from '@/components/layout/main/Sidebar'
import { StoreInitializer } from '@/components/shared'
import { ILayoutProps } from '@/lib/types'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function MainLayout(props: ILayoutProps) {
  const isAuthenticated = cookies().get('token')?.value

  if (!isAuthenticated) redirect('/signin')

  return (
    <>
      <StoreInitializer data={{ token: cookies().get('token')?.value }} />
      <Sidebar />
      <div className="ml-64 flex min-h-screen max-w-7xl flex-col p-6">
        <Header />
        <main className="relative flex-1">{props.children}</main>
      </div>
    </>
  )
}
