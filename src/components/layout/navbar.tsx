import NavbarLink from "./navbar-link"

interface IProps {
  menu: { name: string; link: string }[]
  className?: string
  children?: React.ReactNode
}

export default function Navbar({ menu, className, children }: IProps) {
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
