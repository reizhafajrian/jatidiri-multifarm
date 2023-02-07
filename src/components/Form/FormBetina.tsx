'use client'
import FileIcon from '@/assets/icons/file.svg'
import { useState } from 'react'
import Dropzone from './Dropzone'
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

const cowContent = {
  title: 'Sapi',
  typeOptions: ['doorper', 'garut'],
  femaleParentOriginOptions: ['garut', 'impor', 'swiss'],
  maleParentOriginOptions: ['garut', 'impor', 'swiss'],
  originOptions: ['garut', 'impor', 'australia'],
}

const initial = {
  type: '',
  arrival_date: '',
  birth_date: '',
  female_parent_origin: '',
  male_parent_origin: '',
  origin: '',
  weight: '',
  // certificate: '',
  purchase_price: '',
  description: '',
  gender: 'female',
}

interface IProps {
  animal: 'goat' | 'sheep' | 'cow'
}

export default function FormBetina({ animal }: IProps) {
  const [formValues, setFormValues] = useState(initial)
  const [certificate, setCertificate] = useState()

  const content =
    animal === 'sheep'
      ? sheepContent
      : animal === 'goat'
      ? goatContent
      : cowContent

  return (
    <div>
      <h1 className="mb-6 text-base font-semibold">
        Tambah Data {content.title} Betina
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputSelect
            label={`Jenis ${content.title}`}
            options={content.typeOptions}
            value={formValues.type}
            onChange={(value) => setFormValues({ ...formValues, type: value })}
          />
          <InputDate
            label="Tgl Tiba"
            selected={formValues.arrival_date}
            onChange={(date) =>
              setFormValues({ ...formValues, arrival_date: date })
            }
          />
          <InputDate
            label="Tgl Lahir"
            selected={formValues.birth_date}
            onChange={(date: any) =>
              setFormValues({ ...formValues, birth_date: date })
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
          <Dropzone
            label="Upload Sertifikat"
            value={certificate}
            setValue={setCertificate}
            placeholder={
              <>
                <FileIcon className="fill-neutral-4" />
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
            label={`Asal ${content.title}`}
            options={content.originOptions}
            value={formValues.origin}
            onChange={(value) =>
              setFormValues({ ...formValues, origin: value })
            }
          />
          <InputText
            label={`Berat ${content.title}`}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                weight: e.currentTarget.value,
              })
            }
          />
          <InputText
            label="Harga Beli"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                purchase_price: e.currentTarget.value,
              })
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
      <div className="flex justify-end gap-3">
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
