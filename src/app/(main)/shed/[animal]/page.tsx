import ShedHeader from "@/components/shed/shed-header"
import ShedTable from "@/components/shed/shed-table"
import StoreInitializer from "@/components/store-initializer"

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
