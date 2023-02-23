// ANIMAL TITLE
export const animalTitle = (animal_type: string) =>
  animal_type === 'goat'
    ? 'Kambing'
    : animal_type === 'sheep'
    ? 'Domba'
    : 'Sapi'

export const genderTitle = (gender: string) =>
  gender === 'male' ? 'Pejantan' : 'Betina'

// CATEGORY TITLE
export const categoryTitle = (category: string) =>
  category === 'feed'
    ? 'Pakan'
    : category === 'vitamin'
    ? 'Vitamin'
    : category === 'vaccine'
    ? 'Vaksin'
    : 'Obat Cacing'

// DATE FILTER
export const dateOptions = [
  { name: 'Today' },
  { name: 'This Week' },
  { name: 'This Month' },
  { name: 'This Year' },
]

// ANIMAL FORM
export const animalFormContent = {
  sheep: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
  goat: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
  cow: {
    typeOptions: ['doorper', 'garut'],
    femaleOriginOptions: ['garut', 'impor', 'swiss'],
    maleOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
}

// SHED FORM
export const shedFormContent = {
  animal_types: [
    { value: 'goat', label: 'Kambing' },
    { value: 'sheep', label: 'Domba' },
    { value: 'cow', label: 'Sapi' },
  ],
}

// SHED DETAILS DATA FORM
export const shedDataFormContent = {
  initial: {
    feed_date: '',
    feed_type: '',
    feed_price: '',
    feed_stock: '',
    vitamin_date: '',
    vitamin_type: '',
    vitamin_price: '',
    vaccine_date: '',
    vaccine_type: '',
    vaccine_price: '',
    anthelmintic_date: '',
    anthelmintic_type: '',
    anthelmintic_price: '',
  },
  category: {
    options: [
      { label: 'Pakan', name: 'feed' },
      { label: 'Vitamin', name: 'vitamin' },
      { label: 'Vaksin', name: 'vaccine' },
      { label: 'Obat Cacing', name: 'anthelmintic' },
    ],
    initial: {
      feed: true,
      vitamin: false,
      vaccine: false,
      anthelmintic: false,
    },
  },
  content: [
    {
      name: 'feed',
      title: 'Pakan',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'feed_date' },
        { type: 'text', label: 'Jenis Pakan', name: 'feed_type' },
        { type: 'number', label: 'Harga', name: 'feed_price' },
        { type: 'number', label: 'Stok', name: 'feed_stock' },
      ],
    },
    {
      name: 'vitamin',
      title: 'Vitamin',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'vitamin_date' },
        { type: 'text', label: 'Jenis vitamin', name: 'vitamin_type' },
        { type: 'number', label: 'Harga', name: 'vitamin_price' },
      ],
    },
    {
      name: 'vaccine',
      title: 'Vaksin',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'vaccine_date' },
        { type: 'text', label: 'Jenis Vaksin', name: 'vaccine_type' },
        { type: 'number', label: 'Harga', name: 'vaccine_price' },
      ],
    },
    {
      name: 'anthelmintic',
      title: 'Obat Cacing',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'anthelmintic_date' },
        { type: 'text', label: 'Jenis Obat Cacing', name: 'anthelmintic_type' },
        { type: 'number', label: 'Harga', name: 'anthelmintic_price' },
      ],
    },
  ],
}

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
