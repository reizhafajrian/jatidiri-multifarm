interface IProps {
  children: React.ReactNode
}

export default function AuthLayout(props: IProps) {
  return (
    <div className="grid h-screen place-items-center">
      <div className="min-w-[360px]">{props.children}</div>
    </div>
  )
}
