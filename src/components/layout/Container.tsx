'use client'
import useStore from '@/store/useStore'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
const Container = (props: ContainerProps) => {
  const { isExpanded } = useStore()
  return <motion.div
    className="ml-64 flex min-h-screen max-w-7xl flex-col p-6"
    animate={isExpanded ? {
      marginLeft: '240px',
    } : {
      marginLeft: '60px',
    }}
  >
    {props.children}
  </motion.div>
}

export default Container