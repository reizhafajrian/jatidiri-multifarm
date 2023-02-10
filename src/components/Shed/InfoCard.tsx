interface IProps {
  title: string
  content: string
}
export default function InfoCard(props: IProps) {
  return (
    <div className="w-44 rounded-lg bg-white p-3 shadow">
      <h3 className="mb-7 text-base font-semibold text-primary-4">
        {props.title}
      </h3>
      <p className="font-medium text-neutral-5">{props.content}</p>
    </div>
  )
}
