import SearchIcon from '@/assets/icons/search.svg'

export default function Search() {
  return (
    <div className="relative w-1/3">
      <input
        type="text"
        placeholder="Search"
        className="placeholder:font-ligh border-secondary-4 w-full rounded-full border py-2 px-3 text-sm placeholder:text-sm focus:border-primary-2 focus:outline-none"
      />
      <button className="fill-secondary-2 absolute inset-y-0 right-3 hover:fill-primary-2">
        <SearchIcon />
      </button>
    </div>
  )
}
