import AnimalShedHeader from '@/components/Shed/AnimalShedHeader'
import { ILayoutProps } from '@/data/interfaces'

export default function ShedDetailLayout(props: ILayoutProps) {
  const { id, animal_type } = props.params

  return (
    <main>
      <AnimalShedHeader animal_type={animal_type} id={id} />
      {props.children}
    </main>
  )
}
