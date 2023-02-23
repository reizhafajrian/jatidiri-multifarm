import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import ShedInfo from '@/components/layout/ShedInfo'
import { shedData, shedDetailData } from '@/data/dummy'
import { IPageProps } from '@/data/interfaces'

export default function ShedDetailPage(props: IPageProps) {
  const { animal_type, id } = props.params

  return (
    <main>
      <ShedDetailHeader animal_type={animal_type} eartag_code={id} />
      <ShedInfo data={shedData[0]} detail={shedDetailData} />
    </main>
  )
}
