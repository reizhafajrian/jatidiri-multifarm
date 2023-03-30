'use client'
import useStore from '@/store/useStore'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SidebarMenu from './SidebarMenu'


export default function Sidebar() {
  const { isExpanded, setExpanded } = useStore()

  const handleToggle = () => {
    setExpanded(!isExpanded)
  }

  const sidebarVariants = {
    expanded: { width: '240px', paddingLeft: '6px', paddingRight: '6px', paddingTop: '7px', paddingBottom: '7px' },
    collapsed: { width: '60px', paddingLeft: '0px', paddingRight: '0px', paddingTop: '7px', paddingBottom: '7px' }
  }

  const contentVariants = {
    expanded: { opacity: 1, display: 'block', paddingLeft: '6px', paddingRight: '6px' },
    collapsed: { opacity: 1, display: 'block', paddingLeft: '0px', paddingRight: '0px' }
  }
  const imageVariants = {
    expanded: { opacity: 1, display: 'block' },
    collapsed: { opacity: 0, display: 'block' }
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="fixed top-0 left-0 h-screen bg-primary-7"
          initial={{ width: '240px' }}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={sidebarVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative mb-6 h-28"
            initial={{ opacity: 1 }}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            variants={imageVariants}
            transition={{ duration: 0.3 }}
          >
            <Link href="/dashboard">
              <Image
                className={isExpanded ? "object-contain object-left" : "object-contain object-left"}
                src="/logo.png"
                alt="logo"
                priority
                fill
              />
            </Link>
          </motion.div>
          <motion.div
            className={`px-6 pt-7`}
            initial={{ opacity: 1 }}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            variants={contentVariants}
            transition={{ duration: 0.3 }}
          >
            <SidebarMenu isExpanded={isExpanded} />
          </motion.div>
          <motion.button
            className="absolute bottom-0 left-0 w-full h-16 flex justify-center items-center text-white font-bold text-lg"
            onClick={handleToggle}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <ChevronLeft className="h-6 w-6" />
            ) : (
              <ChevronRight className="h-6 w-6" />
            )}
          </motion.button>
        </motion.div>
      </AnimatePresence>


    </>

  )
}
