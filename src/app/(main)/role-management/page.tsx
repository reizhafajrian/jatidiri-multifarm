import RoleManagementHeader from '@/components/layout/RoleManagementHeader'
import MemberCardList from '@/components/list/MemberCardList'

export const metadata = {
  title: 'Jatidiri Multifarm | Role Management',
}

export default function RoleManagementPage() {
  return (
    <>
      <RoleManagementHeader />
      <MemberCardList />
    </>
  )
}
