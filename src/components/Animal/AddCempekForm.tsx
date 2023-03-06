'use client'
import { animalFormContent, animalTitle } from '@/data/data'
import { IAnimalProps, ICempekFields } from '@/data/interfaces'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '../Button'
import InputDate from '../Form/InputDate'
import InputSelect from '../Form/InputSelect'
import InputText from '../Form/InputText'

export default function AddCempekForm(props: IAnimalProps) {
  const router = useRouter()
  const { isError, isEmptyMsg } = useStore()
  const [formValues, setFormValues] = useState({} as ICempekFields)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    useStore.setState({ isLoading: true, isError: {} })

    // isEmptyErrorCheck
    if (
      !formValues.type ||
      !formValues.birth_date ||
      !formValues.female_origin ||
      !formValues.male_origin ||
      !formValues.birth_weight ||
      !formValues.birth_condition ||
      !formValues.gender
    )
      return useStore.setState({
        isLoading: false,
        isError: {
          type: !formValues.type && isEmptyMsg,
          birth_date: !formValues.birth_date && isEmptyMsg,
          female_origin: !formValues.female_origin && isEmptyMsg,
          male_origin: !formValues.male_origin && isEmptyMsg,
          birth_weight: !formValues.birth_weight && isEmptyMsg,
          birth_condition: !formValues.birth_condition && isEmptyMsg,
          gender: !formValues.gender && isEmptyMsg,
        },
      })

    try {
      console.log({ ...formValues, gender: props.gender })
      useStore.setState({ isLoading: false })
      setFormValues({} as ICempekFields)
    } catch (e) {
      console.log(e)
    }
  }

  const content = animalFormContent[props.animal_type!]
  const animal = animalTitle(props.animal_type!)
  const formTitle = `Tambah Data ${animal} Cempek`
  const eventHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((s) => ({ ...s, [e.target.name]: e.target.value }))
  }
  const valueHandleChange = ({ name, value }: any) => {
    setFormValues((s) => ({ ...s, [name]: value }))
  }

  return (
    <div>
      <h1 className="mb-6 text-base font-semibold">{formTitle}</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-6">
            <InputSelect
              label="Jenis Cempek"
              options={content?.typeOptions}
              value={formValues.type}
              onChange={(value) => valueHandleChange({ name: 'type', value })}
              errorMsg={isError.type}
            />
            <InputText
              name="birth_weight"
              label="Berat Lahir"
              onChange={eventHandleChange}
              errorMsg={isError.birth_weight}
            />
            <InputSelect
              label="Asal Induk"
              options={content?.femaleOriginOptions}
              value={formValues.female_origin}
              onChange={(value) =>
                valueHandleChange({ name: 'female_origin', value })
              }
              errorMsg={isError.female_origin}
            />
            <InputText
              name="birth_condition"
              label="Kondisi Lahir"
              onChange={eventHandleChange}
              errorMsg={isError.birth_condition}
            />
          </div>
          <div className="space-y-6">
            <InputDate
              label="Tgl Lahir"
              selected={formValues.birth_date}
              onChange={(value) =>
                valueHandleChange({ name: 'birth_date', value })
              }
              errorMsg={isError.birth_date}
            />
            <InputSelect
              label="Jenis Kelamin"
              options={['female', 'male']}
              value={formValues.gender}
              onChange={(value) => valueHandleChange({ name: 'gender', value })}
              errorMsg={isError.gender}
            />
            <InputSelect
              label="Asal Pejantan"
              options={content?.maleOriginOptions}
              value={formValues.male_origin}
              onChange={(value) =>
                valueHandleChange({ name: 'male_origin', value })
              }
              errorMsg={isError.male_origin}
            />
            <InputText
              name="description"
              label="Keterangan"
              onChange={eventHandleChange}
            />
          </div>
        </div>
        <div className="mt-28 flex justify-end gap-3">
          <Button
            typeof="button"
            onClick={() => router.back()}
            intent="secondary"
          >
            cancel
          </Button>
          <Button typeof="submit">save</Button>
        </div>
      </form>
    </div>
  )
}
