import AnimalHeader from '@/components/layout/AnimalHeader'
import { ILayoutProps } from '@/data/interfaces'

export default function AnimalLayout(props: ILayoutProps) {
  const { animal } = props.params

  return (
    <>
      <AnimalHeader animal={animal} />
      {props.children}
    </>
  )
}
