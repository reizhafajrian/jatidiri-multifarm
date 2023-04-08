'use client'
import { FC } from 'react'
import { SelectFilter } from '../shared'

interface ShedInfoFilterProps {
  options: any
}

const ShedInfoFilter: FC<ShedInfoFilterProps> = ({ options }) => {
  return (
    <div className="flex gap-5 md:items-center md:gap-3">
      <span className="hidden font-semibold md:block">FILTER:</span>
      <div className="flex flex-1 items-center justify-between gap-3 md:flex-none">
        {['feed', 'vitamin', 'vaccine', 'anthelmintic'].map((name) => {
          return (
            <SelectFilter
              key={name}
              options={[
                { name: `all (${name})`, value: 'all' },
                ...options[name].map((option: any) => ({
                  name: option['name'],
                  value: option['_id'],
                })),
              ]}
              placeholder={name}
              noTitle
            />
          )
        })}
      </div>
    </div>
  )
}

export default ShedInfoFilter
