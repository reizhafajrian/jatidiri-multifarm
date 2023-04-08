import useStore from '@/store/useStore'
import { useEffect, useState } from 'react'

interface IProps {
  formType: 'add' | 'edit'
  cempekForm?: boolean
  gender?: string
}

function useAnimalForm({ formType, cempekForm, gender }: IProps) {
  const { user, animal, addAnimal, editAnimal } = useStore()
  const [title, setTitle] = useState('')
  const [animalTitle, setAnimalTitle] = useState('')
  const [animalName, setAnimalName] = useState('')
  const [opts, setOpts] = useState<{
    typeOptions: { name: string; value: string }[]
    originOptions: { name: string; value: string }[]
    femaleOriginOptions: { name: string; value: string }[]
    maleOriginOptions: { name: string; value: string }[]
  }>()
  const [created_by, setCreatedBy] = useState('')

  const formTitle = formType == 'add' ? 'Tambah' : 'Edit'
  const genderTitle = gender === 'true' ? 'Pejantan' : 'Betina'

  useEffect(() => {
    setTitle(
      `${formTitle} Data ${animal.title} ${cempekForm ? 'cempek' : genderTitle}`
    )
    setOpts(options[animal.name])
    setAnimalTitle(animal?.title)
    setAnimalName(animal?.name)
    setCreatedBy(user?.id ?? '')
  }, [animal])

  return {
    title,
    animalTitle,
    opts,
    addAnimal,
    editAnimal,
    animal: animalName,
    created_by,
  }
}

export default useAnimalForm

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
