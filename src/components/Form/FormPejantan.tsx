'use client'
import FileIcon from '@/assets/icons/file.svg'
import { useState } from 'react'
import Dropzone from './Dropzone'
import InputDate from './InputDate'
import InputSelect from './InputSelect'
import InputText from './InputText'

const options = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

export default function FormPejantan() {
  const [formValues, setFormValues] = useState<any>({})
  const [certificate, setCertificate] = useState()

  return (
    <div>
      <h1 className="mb-6 text-base font-semibold">
        Tambah Data Domba Pejantan
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputSelect
            label="Jenis Domba"
            options={options}
            value={formValues.sheep_type}
            onChange={(value) =>
              setFormValues({ ...formValues, sheep_type: value })
            }
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
            options={options}
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
            label="Asal Domba"
            options={options}
            value={formValues.sheep_origin}
            onChange={(value) =>
              setFormValues({ ...formValues, sheep_origin: value })
            }
          />
          <InputText
            label="Berat Domba"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                sheep_weight: e.currentTarget.value,
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
            options={options}
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
