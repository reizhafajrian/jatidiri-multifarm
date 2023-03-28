'use-client'
import { SearchIcon } from '@/components/shared/Icons';
import { Get } from '@/lib/api';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';

export default function Search() {
  const pathname = usePathname()
  const firstPath = pathname.split('/')[1];
  const [shouldFetch, setShouldFetch] = useState(false);
  const [search, setSearch] = useState("");
  const { data } = useSWR(shouldFetch ? null : `/api/search?type=${firstPath}&search=${search}`, Get);
  function handleClick() {
    setShouldFetch(true);
  }

  return (
    <div className="relative w-1/3">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="placeholder:font-ligh border-secondary-4 w-full rounded-full border py-2 px-3 text-sm placeholder:text-sm focus:border-black focus:outline-none"
      />
      <button className="absolute inset-y-0 right-3" onClick={handleClick}>
        <SearchIcon className="w-6 stroke-neutral-4" />
      </button>
    </div>
  )
}
