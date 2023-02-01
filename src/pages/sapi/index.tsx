import PageTabs from '@/components/PageTabs'
import { useState } from 'react'

export default function SapiPage() {
  const [categories] = useState({
    Pejantan: 'pejantan table',
    Betina: 'betina table',
  })

  return (
    <PageTabs
      categories={categories}
      addButton={{ title: 'tambah data sapi' }}
    />
  )
}
