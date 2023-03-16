import { animalTitle, genderTitle } from '@/store/animal/handlers'

// ANIMAL LIST DATA
export const getAnimalListOptions = (animal: string) => {
  const dateOptions = [
    { name: 'Today', value: 'today' },
    { name: 'This Week', value: 'this-week' },
    { name: 'This Month', value: 'this-month' },
    { name: 'This Year', value: 'this-year' },
  ]

  const options = {
    sheep: {
      femaleOriginOptions: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOriginOptions: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      dateOptions,
    },
    goat: {
      femaleOriginOptions: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOriginOptions: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      dateOptions,
    },
    cow: {
      femaleOriginOptions: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOriginOptions: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      dateOptions,
    },
  }

  return options[animal]
}

// FORM ANIMAL DATA
export const getAnimalFormContent = ({
  formType,
  animal,
  gender,
  cempekForm,
}: any) => {
  const form_title = formType == 'add' ? 'Tambah' : 'Edit'
  const animal_title = animalTitle(animal)
  const gender_title = cempekForm ? 'cempek' : genderTitle(gender!)

  return {
    title: `${form_title} Data ${animal_title} ${gender_title}`,
    animal_title,
    gender_title,
  }
}

export const getAnimalFormOptions = (animal: string) => {
  const options = {
    sheep: {
      typeOptions: [
        { name: 'Doorper', value: 'doorper' },
        { name: 'Garut', value: 'garut' },
      ],
      femaleOriginOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOriginOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      originOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Australia', value: 'australia' },
      ],
    },
    goat: {
      typeOptions: [
        { name: 'Doorper', value: 'doorper' },
        { name: 'Garut', value: 'garut' },
      ],
      femaleOriginOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOriginOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      originOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Australia', value: 'australia' },
      ],
    },
    cow: {
      typeOptions: [
        { name: 'Doorper', value: 'doorper' },
        { name: 'Garut', value: 'garut' },
      ],
      femaleOriginOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOriginOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      originOptions: [
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Australia', value: 'australia' },
      ],
    },
  }

  return options[animal]
}

// SHED DETAILS DATA FORM
const feedTypes = {
  name: 'feed',
  placeholder: 'pakan',
  options: [
    { name: 'pakan', value: 'all' },
    { name: 'opt-1', value: 'opt-1' },
    { name: 'opt-2', value: 'opt-2' },
    { name: 'opt-3', value: 'opt-3' },
  ],
}

const vitaminTypes = {
  name: 'vitamin',
  placeholder: 'vitamin',
  options: [
    { name: 'vitamin', value: 'all' },
    { name: 'opt-1', value: 'opt-1' },
    { name: 'opt-2', value: 'opt-2' },
    { name: 'opt-3', value: 'opt-3' },
  ],
}

const vaccineTypes = {
  name: 'vaccine',
  placeholder: 'vaksin',
  options: [
    { name: 'vaksin', value: 'all' },
    { name: 'opt-1', value: 'opt-1' },
    { name: 'opt-2', value: 'opt-2' },
    { name: 'opt-3', value: 'opt-3' },
  ],
}

const anthelminticTypes = {
  name: 'anthelmintic',
  placeholder: 'obat cacing',
  options: [
    { name: 'obat cacing', value: 'all' },
    { name: 'opt-1', value: 'opt-1' },
    { name: 'opt-2', value: 'opt-2' },
    { name: 'opt-3', value: 'opt-3' },
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
