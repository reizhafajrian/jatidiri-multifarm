import Header from '@/components/layout/main/Header'
// import Sidebar from '@/components/layout/main/Sidebar'
import { StoreInitializer } from '@/components/shared'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export default function MainLayout(props: { children: ReactNode }) {
  const isAuthenticated = cookies().get('token')?.value

  if (!isAuthenticated) redirect('/signin')

  return (
    <>
      <StoreInitializer data={{ token: cookies().get('token')?.value }} />
      {/* <Sidebar /> */}
      <div className="flex min-h-screen max-w-7xl flex-col p-6 md:ml-64">
        <Header />
        <main className="relative flex-1">{props.children}</main>
      </div>
    </>
  )
}
