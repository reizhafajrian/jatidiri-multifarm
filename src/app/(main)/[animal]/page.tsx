import { redirect } from "next/navigation"

export default function page(props: { params: any }) {
  const { animal } = props.params
  return redirect(`/${animal}/male`)
}
