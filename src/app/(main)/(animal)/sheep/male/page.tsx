import { getUndefinedClusterInfo } from "@/lib/helpers"
import TableData from "@/components/animal/table-data"
import StoreInitializer from "@/components/store-initializer"

export default async function Page() {
  const data = await getUndefinedClusterInfo("sheep")

  return (
    <>
      <StoreInitializer data={{ ucTotal: data.total }} />
      <TableData animal="sheep" type="true" />
    </>
  )
}
