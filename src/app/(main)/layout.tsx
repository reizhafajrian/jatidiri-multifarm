import { PropsWithChildren } from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import Container from "@/components/layout/container"
import Header from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"

export default function MainLayout({ children }: PropsWithChildren) {
  const token = cookies().get("token")?.value
  if (!token) redirect("/signin")

  return (
    <>
      <Sidebar />
      <Container>
        <Header />
        {children}
      </Container>
    </>
  )
}
