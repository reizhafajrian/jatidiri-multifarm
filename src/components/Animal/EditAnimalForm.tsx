'use client'
import { animalFormContent } from '@/data/data'
import { IAnimalProps } from '@/data/interfaces'
import { useState } from 'react'
import Button from '../Button'
import Dropzone from '../Form/Dropzone'
import InputDate from '../Form/InputDate'
import InputSelect from '../Form/InputSelect'
import InputText from '../Form/InputText'
import { File } from '../Icons'

export default function EditAnimalForm(props: IAnimalProps) {
  const content = animalFormContent[props.animal_type!]
  const [formValues, setFormValues] = useState(animalFormContent.initial.adult)
  const [certificate, setCertificate] = useState()

  return (
    <div>
      <h1 className="mb-6 text-base font-semibold">
        Edit Data {content?.title}{' '}
        {props.gender === 'male' ? 'Pejantan' : 'Betina'}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputSelect
            label={`Jenis ${content?.title}`}
            options={content?.typeOptions}
            value={formValues.type}
            onChange={(value) => setFormValues((s) => ({ ...s, type: value }))}
          />
          <InputDate
            label="Tgl Tiba"
            selected={formValues.arrival_date}
            onChange={(date) =>
              setFormValues((s) => ({ ...s, arrival_date: date }))
            }
          />
          <InputDate
            label="Tgl Lahir"
            selected={formValues.birth_date}
            onChange={(date: any) =>
              setFormValues((s) => ({ ...s, birth_date: date }))
            }
          />
          <InputSelect
            label="Asal Induk"
            options={content?.femaleParentOriginOptions}
            value={formValues.female_parent_origin}
            onChange={(value) =>
              setFormValues((s) => ({ ...s, female_parent_origin: value }))
            }
          />
          <Dropzone
            label="Upload Sertifikat"
            value={certificate}
            setValue={setCertificate}
            placeholder={
              <>
                <File />
                <p className="font-semibold">
                  Upload file atau
                  <span className="text-primary-5"> klik disini</span> untuk
                  upload
                </p>
                <p className="text-xs font-light text-neutral-4">
                  Upload dalam format .xls atau .xlsx file
                </p>
                <a
                  href="#"
                  className="text-xs font-medium uppercase text-primary-5 underline"
                >
                  lihat contoh
                </a>
              </>
            }
          />
        </div>
        <div className="space-y-6">
          <InputSelect
            label={`Asal ${content?.title}`}
            options={content?.originOptions}
            value={formValues.origin}
            onChange={(value) =>
              setFormValues((s) => ({ ...s, origin: value }))
            }
          />
          <InputText
            label={`Berat ${content?.title}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, weight: e.target.value }))
            }
          />
          <InputText
            label="Harga Beli"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, purchase_price: e.target.value }))
            }
          />
          <InputSelect
            label="Asal Pejantan"
            options={content?.maleParentOriginOptions}
            value={formValues.male_parent_origin}
            onChange={(value) =>
              setFormValues((s) => ({ ...s, purchase_price: value }))
            }
          />
          <InputText
            label="Keterangan"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, description: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button intent="secondary">cancel</Button>
        <Button>save</Button>
      </div>
    </div>
  )
}
