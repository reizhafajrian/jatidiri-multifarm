import dynamic from 'next/dynamic'
import { Fragment, ReactNode } from 'react'

const NoSSR = (props: { children: ReactNode }) => (
  <Fragment>{props.children}</Fragment>
)

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false })
