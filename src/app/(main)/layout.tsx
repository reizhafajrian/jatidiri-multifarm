import { ReactNode } from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import Container from "@/components/Container"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import StoreInitializer from "@/components/StoreInitializer"

export default function MainLayout(props: { children: ReactNode }) {
  const token = cookies().get("token")?.value

  if (!token) redirect("/signin")

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
