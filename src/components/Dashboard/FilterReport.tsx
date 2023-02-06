import SelectMenu from '../SelectMenu'

const options = [
  { name: 'Today' },
  { name: 'This Week' },
  { name: 'This Month' },
  { name: 'This Year' },
]

export default function FilterReport() {
  return <SelectMenu title="Show" options={options} />
}
