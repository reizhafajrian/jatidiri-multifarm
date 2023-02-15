'use client'
import { animalFormContent } from '@/data/data'
import { IAnimalProps } from '@/data/interfaces'
import { useState } from 'react'
import Button from '../Button'
import InputDate from '../Form/InputDate'
import InputSelect from '../Form/InputSelect'
import InputText from '../Form/InputText'

export default function EditCempekForm(props: IAnimalProps) {
  const content = animalFormContent[props.animal_type!]
  const [formValues, setFormValues] = useState(animalFormContent.initial.cempek)

  return (
    <div>
      <h1 className="mb-6 text-base font-semibold">
        Edit Data {content?.title} Cempek
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputSelect
            label="Jenis Cempek"
            options={content?.typeOptions}
            value={formValues.type}
            onChange={(value) => setFormValues((s) => ({ ...s, type: value }))}
          />
          <InputText
            label="Berat Lahir"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, birth_weight: e.target.value }))
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
          <InputText
            label="Kondisi Lahir"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues((s) => ({ ...s, birth_condition: e.target.value }))
            }
          />
        </div>
        <div className="space-y-6">
          <InputDate
            label="Tgl Lahir"
            selected={formValues.birth_date}
            onChange={(date: any) =>
              setFormValues((s) => ({ ...s, birth_date: date }))
            }
          />
          <InputSelect
            label="Jenis Kelamin"
            options={['female', 'male']}
            value={formValues.gender}
            onChange={(value) =>
              setFormValues((s) => ({ ...s, gender: value }))
            }
          />
          <InputSelect
            label="Asal Pejantan"
            options={content?.maleParentOriginOptions}
            value={formValues.male_parent_origin}
            onChange={(value) =>
              setFormValues((s) => ({ ...s, male_parent_origin: value }))
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
      <div className="mt-28 flex justify-end gap-3">
        <Button intent="secondary">cancel</Button>
        <Button>save</Button>
      </div>
    </div>
  )
}
