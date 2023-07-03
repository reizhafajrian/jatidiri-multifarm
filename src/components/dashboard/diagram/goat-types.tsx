"use client"

import SimpleBar from "simplebar-react"

interface IProps {
  data: any
}

export default function GoatsDiagram({ data }: IProps) {
  const total = data?.data?.goatTypes.reduce(
    (acc: number, cur: any) => acc + cur.count,
    0
  )

  return (
    <div>
      <div className="my-3 text-center text-3xl font-semibold">{total}</div>
      {data?.data?.goatTypes.length > 0 && (
        <span className="mb-2 text-[10px] uppercase text-neutral-4">
          jenis kambing
        </span>
      )}
      <SimpleBar className="max-h-28">
        {data?.data?.goatTypes.map((item: any) => {
          return (
            <div key={item._id} className="mb-3">
              <div className="flex justify-between text-[10px] font-medium">
                <p>{item?._id}</p>
                <p>{item?.count}</p>
              </div>
              <div className="relative mt-1 h-1 bg-neutral-2">
                <div
                  style={{
                    width: `${(item.count / total) * 100}%`,
                  }}
                  className="absolute h-1 bg-primary-4"
                />
              </div>
            </div>
          )
        })}
      </SimpleBar>
    </div>
  )
}
