import AnimalHeader from '@/components/layout/AnimalHeader'
import { ILayoutProps } from '@/data/interfaces'

export default function AnimalLayout(props: ILayoutProps) {
  return (
    <>
      <AnimalHeader animal={props.params.animal} />
      {props.children}
    </>
  )
}
