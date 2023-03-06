import ShedDetail from '@/components/Shed/ShedDetail'
import { IPageProps } from '@/data/interfaces'

export default function ShedDetailPage(props: IPageProps) {
  const { animal_type, id } = props.params

  return <ShedDetail animal_type={animal_type} id={id} />
}
