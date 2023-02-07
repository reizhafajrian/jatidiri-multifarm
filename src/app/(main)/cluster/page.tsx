import PageTabs from '@/components/PageTabs'

export default function ClusterPage() {
  return (
    <PageTabs
      categories={{
        Kambing: 'kambing cluster table',
        Domba: 'domba cluster table',
        Sapi: 'sapi cluster table',
      }}
      addButton={{ title: 'tambah kandang', link: '/cluster/add' }}
    />
  )
}
