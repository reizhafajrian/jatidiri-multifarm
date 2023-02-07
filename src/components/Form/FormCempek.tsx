'use client'
import { useState } from 'react'
import InputDate from './InputDate'
import InputSelect from './InputSelect'
import InputText from './InputText'

const sheepContent = {
  title: 'Domba',
  typeOptions: ['doorper', 'garut'],
  femaleParentOriginOptions: ['garut', 'impor', 'swiss'],
  maleParentOriginOptions: ['garut', 'impor', 'swiss'],
  originOptions: ['garut', 'impor', 'australia'],
}

const goatContent = {
  title: 'Kambing',
  typeOptions: ['doorper', 'garut'],
  femaleParentOriginOptions: ['garut', 'impor', 'swiss'],
  maleParentOriginOptions: ['garut', 'impor', 'swiss'],
  originOptions: ['garut', 'impor', 'australia'],
}

const initial = {
  type: '',
  birth_date: '',
  female_parent_origin: '',
  male_parent_origin: '',
  birth_weight: '',
  birth_condition: '',
  gender: '',
  description: '',
}

interface IProps {
  animal: 'goat' | 'sheep' | 'cow'
}

export default function FormCempek({ animal }: IProps) {
  const [formValues, setFormValues] = useState(initial)

  const content = animal === 'sheep' ? sheepContent : goatContent

  return (
    <div>
      <h1 className="mb-6 text-base font-semibold">
        Tambah Data {content.title} Cempek
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputSelect
            label="Jenis Cempek"
            options={content.typeOptions}
            value={formValues.type}
            onChange={(value) => setFormValues({ ...formValues, type: value })}
          />
          <InputText
            label="Berat Lahir"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                birth_weight: e.currentTarget.value,
              })
            }
          />
          <InputSelect
            label="Asal Induk"
            options={content.femaleParentOriginOptions}
            value={formValues.female_parent_origin}
            onChange={(value) =>
              setFormValues({ ...formValues, female_parent_origin: value })
            }
          />
          <InputText
            label="Kondisi Lahir"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                birth_condition: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="space-y-6">
          <InputDate
            label="Tgl Lahir"
            selected={formValues.birth_date}
            onChange={(date: any) =>
              setFormValues({ ...formValues, birth_date: date })
            }
          />
          <InputSelect
            label="Jenis Kelamin"
            options={['female', 'male']}
            value={formValues.gender}
            onChange={(value) =>
              setFormValues({ ...formValues, gender: value })
            }
          />
          <InputSelect
            label="Asal Pejantan"
            options={content.maleParentOriginOptions}
            value={formValues.male_parent_origin}
            onChange={(value) =>
              setFormValues({ ...formValues, male_parent_origin: value })
            }
          />
          <InputText
            label="Keterangan"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                description: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <div className="mt-28 flex justify-end gap-3">
        <button className="w-36 rounded-[10px] border border-neutral-3 bg-white py-2 text-xs font-semibold uppercase">
          cancel
        </button>
        <button className="w-36 rounded-[10px] border border-primary-4 bg-primary-4 py-2 text-xs font-semibold uppercase text-white">
          save
        </button>
      </div>
    </div>
  )
}
