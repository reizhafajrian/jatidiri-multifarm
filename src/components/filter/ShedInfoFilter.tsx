'use client'
import { FC } from 'react'
import { SelectFilter } from '../shared'

interface ShedInfoFilterProps {
  options: any
}

const ShedInfoFilter: FC<ShedInfoFilterProps> = ({ options }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="font-semibold">FILTER:</span>
      <div className="flex items-center gap-3">
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
