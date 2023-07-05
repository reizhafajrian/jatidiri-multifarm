import { getDetailShedData } from "@/lib/helpers"
import FormShedDetail from "@/components/shed/form/form-shed-detail"
import ShedInfo from "@/components/shed/shed-info"
import ShedInfoFilter from "@/components/shed/shed-info-filter"
import ShedInfoTable from "@/components/shed/shed-info-table"

interface IProps {
  params: {
    shed_id: string
  }
}

export default async function Page({ params: { shed_id } }: IProps) {
  const { shedDetail: data, options } = await getDetailShedData(shed_id)

  return (
    <>
      <ShedInfo data={data} />
      {/* HISTORY KANDANG */}
      <div className="space-y-5">
        <h1 className="text-2xl font-semibold text-neutral-5">
          History Kandang
          <span className="text-primary-5"> #{data.code}</span>
        </h1>
        <div className="flex flex-col-reverse justify-between gap-3 md:flex-row md:items-center">
          <ShedInfoFilter options={options} />
          <FormShedDetail options={options} />
        </div>
        <ShedInfoTable shed_id={shed_id} />
      </div>
    </>
  )
}
