import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import ShedInfo from '@/components/layout/ShedInfo'
import { StoreInitializer } from '@/components/shared'
import { dummyData, shedDetailData } from '@/data/dummy'
import { IPageProps } from '@/data/interfaces'
import { useShedStore } from '@/store/shed'

export default function ShedDetailPage(props: IPageProps) {
  // todo: get data by shed_code from api
  const { animal_type, shed_code } = props.params
  const shed = dummyData.shed
  const shedDetailList = shedDetailData

  useShedStore.setState({ shed })

  return (
    <main>
      <StoreInitializer data={{ shed: { shed, shedDetailList } }} />
      <ShedDetailHeader />
      <ShedInfo />
    </main>
  )
}
