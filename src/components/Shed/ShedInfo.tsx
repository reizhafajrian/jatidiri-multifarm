import PencilIcon from '@/assets/icons/pencil.svg'

const details = [
  {
    title: 'Berat',
    content: '50-60 kg',
  },
  {
    title: 'Range Usia',
    content: '5-6 bulan',
  },
  {
    title: 'Berat Pakan',
    content: '1 kg',
  },
]

export default function ShedInfo({
  shed_code,
  data,
}: {
  shed_code: string
  data: any
}) {
  return (
    <div>
      <div className="flex gap-8">
        {details.map((item, idx) => (
          <div key={idx} className="w-44 rounded-lg bg-white p-3 shadow">
            <h3 className="mb-7 text-base font-semibold text-primary-4">
              {item.title}
            </h3>
            <p className="font-medium text-neutral-5">{item.content}</p>
          </div>
        ))}
      </div>
      <h1 className="my-6 text-2xl font-semibold text-neutral-5">
        History Kandang <span className="text-primary-5">#{shed_code}</span>
      </h1>
      <div className="flex items-center justify-between">
        <div>
          <span className="font-semibold">FILTER:</span>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary-4 py-2 px-4 hover:bg-primary-5">
          <span className="text-sm font-semibold capitalize text-white">
            tambah data
          </span>
          <PencilIcon />
        </button>
      </div>
      {/* <Table data={data} columns={columns} fixedCol={2} /> */}
    </div>
  )
}
