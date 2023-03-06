import AnimalHeader from '@/components/layout/AnimalHeader'
import { ILayoutProps } from '@/data/interfaces'

export default function AnimalLayout(props: ILayoutProps) {
  const { animal_type } = props.params

  return (
    <>
      <AnimalHeader animal_type={animal_type} />
      {props.children}
    </>
  )
}
