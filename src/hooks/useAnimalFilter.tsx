import useStore from '@/store/useStore'

function useAnimalFilter() {
  const { animal, setFilter, originFemale, originMale } = useStore()

  const options = {
    sheep: {
      femaleOrigin: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOrigin: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
    },
    goat: {
      femaleOrigin: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOrigin: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
    },
    cow: {
      femaleOrigin: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
      maleOrigin: [
        { name: 'All', value: 'all' },
        { name: 'Garut', value: 'garut' },
        { name: 'Impor', value: 'impor' },
        { name: 'Swiss', value: 'swiss' },
        { name: 'Sumatera', value: 'sumatera' },
      ],
    },
  }

  return {
    opts: options[animal.name],
    setFilter,
    originMale,
    originFemale,
  }
}

export default useAnimalFilter
