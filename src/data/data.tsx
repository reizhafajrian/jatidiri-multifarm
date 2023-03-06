// SHED DETAILS DATA FORM
const feedTypes = {
  name: 'feed',
  placeholder: 'pakan',
  options: [
    { name: 'all' },
    { name: 'opt-1' },
    { name: 'opt-2' },
    { name: 'opt-3' },
  ],
}

const vitaminTypes = {
  name: 'vitamin',
  placeholder: 'vitamin',
  options: [
    { name: 'all' },
    { name: 'opt-1' },
    { name: 'opt-2' },
    { name: 'opt-3' },
  ],
}

const vaccineTypes = {
  name: 'vaccine',
  placeholder: 'vaksin',
  options: [
    { name: 'all' },
    { name: 'opt-1' },
    { name: 'opt-2' },
    { name: 'opt-3' },
  ],
}

const anthelminticTypes = {
  name: 'anthelmintic',
  placeholder: 'obat cacing',
  options: [
    { name: 'all' },
    { name: 'opt-1' },
    { name: 'opt-2' },
    { name: 'opt-3' },
  ],
}

export const shedInfoTypesOptions = [
  feedTypes,
  vitaminTypes,
  vaccineTypes,
  anthelminticTypes,
]

export const shedInfoInitial = {
  feed: feedTypes.options[0],
  vitamin: vitaminTypes.options[0],
  vaccine: vaccineTypes.options[0],
  anthelmintic: anthelminticTypes.options[0],
}
