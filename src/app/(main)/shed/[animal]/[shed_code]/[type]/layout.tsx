import ShedDetailHeader from '@/components/layout/ShedDetailHeader'
import { ILayoutProps } from '@/data/interfaces'

export default function ShedAnimalLayout(props: ILayoutProps) {
  const { animal, shed_code, type } = props.params

  return (
    <>
      <ShedDetailHeader animal={animal} shed_code={shed_code} type={type} />
      {props.children}
    </>
  )
}
