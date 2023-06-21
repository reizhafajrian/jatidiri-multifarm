import StoreInitializer from "@/components/StoreInitializer"

import ShedHeader from "./shed-header"
import ShedTable from "./shed-table"

export const metadata = {
  title: "Shed",
}

export default function ShedPage(props: any) {
  return (
    <>
      <StoreInitializer data={{ animal: props.params.animal }} />
      <ShedHeader />
      <ShedTable />
    </>
  )
}
