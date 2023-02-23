import NavbarLink from './NavbarLink'

interface IProps {
  menu: { name: string; link: string }[]
  className?: string
  children?: React.ReactNode
}

export default function Navbar(props: IProps) {
  const { menu, className, children } = props

  return (
    <div className={className}>
      <div>
        {menu.map((item, idx) => (
          <NavbarLink key={idx} item={item} />
        ))}
      </div>
      {children}
    </div>
  )
}
