import ShedInfo from '@/components/layout/ShedInfo'
import { StoreInitializer } from '@/components/shared'

export default function ShedDetailPage() {
  return (
    <>
      <StoreInitializer data={{ animal: { gender: undefined } }} />
      <ShedInfo />
    </>
  )
}
