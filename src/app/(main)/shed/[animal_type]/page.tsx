import ShedNavbar from '@/components/Shed/ShedNavbar'
import ShedTable from '@/components/Table/ShedTable'
import { shedData } from '@/data/dummy'

export default async function ShedPage() {
  return (
    <>
      <ShedNavbar />
      <ShedTable data={shedData} />
    </>
  )
}
