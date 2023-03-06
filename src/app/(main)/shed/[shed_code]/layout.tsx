import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import { StoreInitializer } from '@/components/shared'
import { dummyData } from '@/data/dummy'
import { ILayoutProps } from '@/data/interfaces'

export default function DetailShedLayout(props: ILayoutProps) {
  const { shed_code } = props.params

  return (
    <>
      <StoreInitializer
        data={{
          shed: { shed_code, shed: dummyData.shed },
        }}
      />
      <ShedDetailHeader />
      <div className="relative min-h-[300px]">{props.children}</div>
    </>
  )
}
