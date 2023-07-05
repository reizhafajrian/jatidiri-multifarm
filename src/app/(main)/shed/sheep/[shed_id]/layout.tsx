import { PropsWithChildren } from "react"

import { getShedCode } from "@/lib/helpers"
import StoreInitializer from "@/components/store-initializer"

interface IProps {
  params: {
    shed_id: string
  }
  children: React.ReactNode
}

export default async function Layout({
  children,
  params: { shed_id },
}: IProps) {
  const { shed_code } = await getShedCode(shed_id)

  return (
    <>
      <StoreInitializer data={{ shed_code }} />
      {children}
    </>
  )
}
