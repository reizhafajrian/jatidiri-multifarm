import { SearchIcon } from '@/components/shared/Icons'

export default function Search() {
  return (
    <div className="relative w-1/3">
      <input
        type="text"
        placeholder="Search"
        className="placeholder:font-ligh border-secondary-4 w-full rounded-full border py-2 px-3 text-sm placeholder:text-sm focus:border-black focus:outline-none"
      />
      <button className="absolute inset-y-0 right-3">
        <SearchIcon className="w-6 stroke-neutral-4" />
      </button>
    </div>
  )
}
