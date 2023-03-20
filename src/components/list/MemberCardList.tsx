import MemberCard from '../card/MemberCard'

export default function MemberCardList() {
  return (
    <div className="space-y-3">
      {memberList.map((data, idx) => (
        <MemberCard data={data} key={idx} />
      ))}
    </div>
  )
}

const memberList = [
  {
    name: 'Alfansuri',
    email: 'alfansuri@jatidiri.com',
    role: 'admin',
    whatsapp_number: '087872345678',
  },
  {
    name: 'Will Smith',
    email: 'willsmith@jatidiri.com',
    role: 'super_admin',
    whatsapp_number: '087872345678',
  },
  {
    name: 'Lisa',
    email: 'lisa@jatidiri.com',
    role: 'admin',
    whatsapp_number: '087872345678',
  },
]
