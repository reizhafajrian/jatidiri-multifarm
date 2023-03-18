import AnimalHeader from '@/components/layout/AnimalHeader'
import { StoreInitializer } from '@/components/shared'
import { ILayoutProps } from '@/lib/types'

export default function AnimalLayout(props: ILayoutProps) {
  const { animal } = props.params

  return (
    <>
      <StoreInitializer data={{ animal }} />
      <AnimalHeader animal={animal} />
      {props.children}
    </>
  )
}
