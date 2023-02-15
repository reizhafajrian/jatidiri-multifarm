import ArrowUpIcon from '@/assets/icons/arrow-up.svg'
import formatRupiah from '@/utils/formatRupiah'
import Card from '../Card'

interface IProps {
  data: {
    icon: any
    title: string
    value: string
    percentage: string
  }
}

export default function CardInfo({ data }: IProps) {
  return (
    <Card className="flex items-center">
      <div className="mr-6 h-14 w-14">{data.icon}</div>
      <div>
        <h3 className="mb-4 font-medium capitalize text-[#515356]">
          {data.title}
        </h3>
        <p className="text-[32px] font-semibold text-[#25282B]">
          {formatRupiah(data.value)}
        </p>
      </div>
      <span className="mt-auto ml-auto flex items-center gap-1 rounded-xl bg-[#E1F7E8] py-[2px] px-[10px] text-xs font-medium text-[#0F752E]">
        <ArrowUpIcon className="fill-[#16B364] stroke-[#16B364]" />{' '}
        {data.percentage} %
      </span>
    </Card>
  )
}
