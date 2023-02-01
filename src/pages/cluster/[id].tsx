import PageTabs from '@/components/PageTabs'
import { useState } from 'react'

export default function ClusterPage() {
  const [categories] = useState({
    Kambing: 'kambing cluster table',
    Domba: 'domba cluster table',
    Sapi: 'sapi cluster table',
  })

  return (
    <PageTabs categories={categories} addButton={{ title: 'tambah kandang' }} />
  )
}
