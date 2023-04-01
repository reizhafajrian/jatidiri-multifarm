import Header from '@/components/layout/main/Header'
import Sidebar from '@/components/layout/main/Sidebar'
import { StoreInitializer } from '@/components/shared'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export default function MainLayout(props: { children: ReactNode }) {
  const token = cookies().get('token')?.value

  if (!token) redirect('/signin')

  return (
    <>
      <StoreInitializer data={{ token }} />
      <Sidebar />
      <div className="flex min-h-screen max-w-7xl flex-col p-6 md:ml-64">
        <Header />
        <main className="relative flex-1">{props.children}</main>
      </div>
    </>
  )
}
