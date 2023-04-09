import Container from '@/components/layout/Container'
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
      <Container>
        <Header />
        <main className="relative flex-1">{props.children}</main>
      </Container>

    </>
  )
}
