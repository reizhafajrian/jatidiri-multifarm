'use client'
import { animalFormContent, animalTitle } from '@/data/data'
import { IAnimalFields, IAnimalProps } from '@/data/interfaces'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Button from '../Button'
import Dropzone from '../Form/Dropzone'
import InputDate from '../Form/InputDate'
import InputSelect from '../Form/InputSelect'
import InputText from '../Form/InputText'

export default function EditAnimalForm(props: IAnimalProps) {
  const router = useRouter()
  const { isError, isEmptyMsg } = useStore()
  const [formValues, setFormValues] = useState({} as IAnimalFields)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    useStore.setState({ isLoading: true, isError: {} })

    // isEmptyErrorCheck
    if (
      !formValues.type ||
      !formValues.arrival_date ||
      !formValues.birth_date ||
      !formValues.origin ||
      !formValues.female_origin ||
      !formValues.male_origin ||
      !formValues.weight ||
      !formValues.purchase_price ||
      !formValues.certificate
    )
      return useStore.setState({
        isLoading: false,
        isError: {
          type: !formValues.type && isEmptyMsg,
          arrival_date: !formValues.arrival_date && isEmptyMsg,
          birth_date: !formValues.birth_date && isEmptyMsg,
          origin: !formValues.origin && isEmptyMsg,
          female_origin: !formValues.female_origin && isEmptyMsg,
          male_origin: !formValues.male_origin && isEmptyMsg,
          weight: !formValues.weight && isEmptyMsg,
          purchase_price: !formValues.purchase_price && isEmptyMsg,
          certificate: !formValues.certificate && isEmptyMsg,
        },
      })

    try {
      console.log({ ...formValues, gender: props.gender })
      useStore.setState({ isLoading: false })
      setFormValues({} as IAnimalFields)
    } catch (e) {
      console.log(e)
    }
  }

  const content = animalFormContent[props.animal_type!]
  const animal = animalTitle(props.animal_type!)
  const formTitle = `Edit Data ${animal} ${
    props.gender === 'male' ? 'Pejantan' : 'Betina'
  }`
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
              label={`Jenis ${animal}`}
              options={content?.typeOptions}
              value={formValues.type}
              onChange={(value) => valueHandleChange({ name: 'type', value })}
              errorMsg={isError.type}
            />
            <InputDate
              label="Tgl Tiba"
              selected={formValues.arrival_date}
              onChange={(value) =>
                valueHandleChange({ name: 'arrival_date', value })
              }
              errorMsg={isError.arrival_date}
            />
            <InputDate
              label="Tgl Lahir"
              selected={formValues.birth_date}
              onChange={(value) =>
                valueHandleChange({ name: 'birth_date', value })
              }
              errorMsg={isError.birth_date}
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
            <Dropzone
              label="Upload Sertifikat"
              value={formValues.certificate}
              setValue={(value) =>
                valueHandleChange({ name: 'certificate', value })
              }
              errorMsg={isError.certificate}
            />
          </div>
          <div className="space-y-6">
            <InputSelect
              label={`Asal ${animal}`}
              options={content?.originOptions}
              value={formValues.origin}
              onChange={(value) => valueHandleChange({ name: 'origin', value })}
              errorMsg={isError.origin}
            />
            <InputText
              name="weight"
              label={`Berat ${animal}`}
              onChange={eventHandleChange}
              errorMsg={isError.weight}
            />
            <InputText
              name="purchase_price"
              label="Harga Beli"
              onChange={eventHandleChange}
              errorMsg={isError.purchase_price}
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
        <div className="flex justify-end gap-3">
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
