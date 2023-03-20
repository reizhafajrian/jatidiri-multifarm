import AnimalHeader from '@/components/layout/AnimalHeader'
import { StoreInitializer } from '@/components/shared'
import { ReactNode } from 'react'

export default function AnimalLayout(props: {
  children: ReactNode
  params: any
}) {
  const { animal } = props.params

  return (
    <>
      <StoreInitializer data={{ animal }} />
      <AnimalHeader />
      {props.children}
    </>
  )
}
