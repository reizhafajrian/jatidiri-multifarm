import DashboardCow from '@/assets/icons/dashboard-cow.svg'
import DashboardGoat from '@/assets/icons/dashboard-goat.svg'
import DashboardSheep from '@/assets/icons/dashboard-sheep.svg'
import Card from '../Card'

const dataHewan = [
  {
    icon: <DashboardCow />,
    title: 'sapi',
    totalDewasa: 100,
    totalCempek: 80,
  },
  {
    icon: <DashboardSheep />,
    title: 'domba',
    totalDewasa: 100,
    totalCempek: 80,
  },
  {
    icon: <DashboardGoat />,
    title: 'kambing',
    totalDewasa: 100,
    totalCempek: 80,
  },
]

export default function SectionTwo() {
  return (
    <div className="grid grid-cols-3 gap-7">
      {dataHewan.map((item, idx) => (
        <Card key={idx} className="capitalize">
          <div className="mb-7 flex items-center gap-3">
            <div className="h-12 w-12">{item.icon}</div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-[#25282B]">
                {item.title}
              </h3>
              <h4 className="text-xs text-[#818384]">
                total {item.title} hidup
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p>
                <span className="mb-1 text-xl font-semibold text-[#25282B]">
                  {item.totalDewasa}
                </span>{' '}
                <span className="text-[10px] text-[#515356]">Ekor</span>
              </p>
              <p className="text-xs text-[#818384]">
                {item.title} <span className="font-medium">Dewasa</span>
              </p>
            </div>
            <div>
              <p>
                <span className="mb-1 text-xl font-semibold text-[#25282B]">
                  {item.totalCempek}
                </span>{' '}
                <span className="text-[10px] text-[#515356]">Ekor</span>
              </p>
              <p className="text-xs text-[#818384]">
                {item.title} <span className="font-medium">Cempek</span>
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
