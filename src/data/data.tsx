// ANIMAL TITLE
export const animalTitle = (animal_type: string) =>
  animal_type === 'goat'
    ? 'Kambing'
    : animal_type === 'sheep'
    ? 'Domba'
    : 'Sapi'

// DATE FILTER
export const dateOptions = [
  { name: 'Today' },
  { name: 'This Week' },
  { name: 'This Month' },
  { name: 'This Year' },
]

// AUTH FORM
export const authFormContent = {
  initial: { email: '', password: '', name: '' },
  register: {
    linkUrl: '/signin',
    linkText: 'Already have an account?',
    header: 'Create a new account',
    subheader: 'Just a few things to get started',
    buttonText: 'register',
  },
  signin: {
    linkUrl: '/register',
    linkText: "Don't have an account?",
    header: 'Sign In Here',
    subheader: 'Enter your credentials to access your account',
    buttonText: 'sign in',
  },
}

// ANIMAL FORM
export const animalFormContent = {
  initial: {
    adult: {
      type: '',
      arrival_date: '',
      birth_date: '',
      female_parent_origin: '',
      male_parent_origin: '',
      origin: '',
      weight: '',
      purchase_price: '',
      gender: '',
      description: '',
    },
    cempek: {
      type: '',
      birth_date: '',
      female_parent_origin: '',
      male_parent_origin: '',
      birth_weight: '',
      birth_condition: '',
      gender: '',
      description: '',
    },
  },
  sheep: {
    title: 'Domba',
    typeOptions: ['doorper', 'garut'],
    femaleParentOriginOptions: ['garut', 'impor', 'swiss'],
    maleParentOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
  goat: {
    title: 'Kambing',
    typeOptions: ['doorper', 'garut'],
    femaleParentOriginOptions: ['garut', 'impor', 'swiss'],
    maleParentOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
  cow: {
    title: 'Sapi',
    typeOptions: ['doorper', 'garut'],
    femaleParentOriginOptions: ['garut', 'impor', 'swiss'],
    maleParentOriginOptions: ['garut', 'impor', 'swiss'],
    originOptions: ['garut', 'impor', 'australia'],
  },
}

// SHED FORM
export const shedFormContent = {
  initial: {
    shed_code: '',
    animal_type: '',
    animal_weight: '',
    feed: '',
    feed_weight: '',
    age_range: '',
    description: '',
  },
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
