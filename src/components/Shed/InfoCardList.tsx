interface IProps {
  animal_weight: string
  age_range: string
  feed_weight: string
}
export default function InfoCardList(props: IProps) {
  const cardList = [
    { title: 'Berat', content: `${props.animal_weight} kg` },
    { title: 'Range Usia', content: `${props.age_range} bulan` },
    { title: 'Berat Pakan', content: `${props.feed_weight} kg` },
  ]

  return (
    <div className="mb-8 flex gap-8 py-5">
      {cardList.map((item, idx) => (
        <div key={idx} className="w-44 rounded-lg bg-white p-3 shadow">
          <h3 className="mb-7 text-base font-semibold text-primary-4">
            {item.title}
          </h3>
          <p className="font-medium text-neutral-5">{item.content}</p>
        </div>
      ))}
    </div>
  )
}
