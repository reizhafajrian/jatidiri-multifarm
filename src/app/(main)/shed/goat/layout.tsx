import { PropsWithChildren } from "react"

import Header from "@/components/shed/header"
import StoreInitializer from "@/components/store-initializer"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <StoreInitializer data={{ animal: "goat" }} />
      <Header />
      {children}
    </>
  )
}
