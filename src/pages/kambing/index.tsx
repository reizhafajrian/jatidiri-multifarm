import PageTabs from '@/components/PageTabs'
import { useState } from 'react'

export default function KambingPage() {
  const [categories] = useState({
    Pejantan: 'pejantan table',
    Betina: 'betina table',
    Cempek: 'cempek table',
  })

  return (
    <PageTabs
      categories={categories}
      addButton={{ title: 'tambah data kambing' }}
    />
  )
}
