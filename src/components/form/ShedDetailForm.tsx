'use client'
import { Field, Form, InputCheckbox, Modal } from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { shedDataSchema } from '@/data/validations'
import { useAuthStore } from '@/store/auth'
import { IShedDetail, useShedStore } from '@/store/shed'
import { useState } from 'react'

export default function ShedDetailForm(props: IModal) {
  const { isOpen, closeModal } = props
  const { user } = useAuthStore()
  const { shedDetail, addShedDetail } = useShedStore()
  const [categories, setCategories] = useState<any>({ feed: true })
  const schema = shedDataSchema(categories)

  const onSubmit = async (values: IShedDetail) => {
    // try {
    //   const res = await addShedDetail({
    //     ...values,
    //     uid: user.id!,
    //   })
    //   if (res.status === 201) {
    //     toast.success(res.message)
    //     router.replace(`/${animal_type}`)
    //   } else {
    //     toast.error(res.errors[0].msg)
    //   }
    // } catch (e: any) {
    //   toast.error(e.message)
    // }
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data</h1>
      <Form schema={schema} onSubmit={onSubmit}>
        <div className="mb-8 space-y-5">
          {/* category radio options */}
          <div className="flex justify-between">
            {shedDataFormContent.options.map(({ name, label }, idx) => (
              <InputCheckbox
                key={idx}
                label={label}
                defaultChecked={categories[name]}
                onChange={({ target: { checked } }: any) =>
                  setCategories((s: any) => ({ ...s, [name]: checked }))
                }
              />
            ))}
          </div>
          {/* form fields */}
          {shedDataFormContent.content.map(({ fields, name, title }, idx) => (
            <div key={idx} className={categories[name] ? 'block' : 'hidden'}>
              <h3 className="mb-4 text-base font-medium">{title}</h3>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                {fields.map(({ name, label, type, rupiah }, idx) => (
                  <Field
                    type={type}
                    key={idx}
                    name={name}
                    label={label}
                    rupiah={rupiah}
                    options={[
                      { name: 'opt-1', value: 'opt-1' },
                      { name: 'opt-2', value: 'opt-2' },
                      { name: 'opt-3', value: 'opt-3' },
                    ]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}

const shedDataFormContent = {
  options: [
    { label: 'Pakan', name: 'feed' },
    { label: 'Vitamin', name: 'vitamin' },
    { label: 'Vaksin', name: 'vaccine' },
    { label: 'Obat Cacing', name: 'anthelmintic' },
  ],
  content: [
    {
      name: 'feed',
      title: 'Pakan',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'feed_date' },
        { type: 'select', label: 'Jenis Pakan', name: 'feed_type' },
        { type: 'input', label: 'Harga', name: 'feed_price', rupiah: true },
        { type: 'input', label: 'Stok', name: 'feed_stock' },
      ],
    },
    {
      name: 'vitamin',
      title: 'Vitamin',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'vitamin_date' },
        { type: 'select', label: 'Jenis vitamin', name: 'vitamin_type' },
        { type: 'input', label: 'Harga', name: 'vitamin_price', rupiah: true },
      ],
    },
    {
      name: 'vaccine',
      title: 'Vaksin',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'vaccine_date' },
        { type: 'select', label: 'Jenis Vaksin', name: 'vaccine_type' },
        { type: 'input', label: 'Harga', name: 'vaccine_price', rupiah: true },
      ],
    },
    {
      name: 'anthelmintic',
      title: 'Obat Cacing',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'anthelmintic_date' },
        {
          type: 'select',
          label: 'Jenis Obat Cacing',
          name: 'anthelmintic_type',
        },
        {
          type: 'input',
          label: 'Harga',
          name: 'anthelmintic_price',
          rupiah: true,
        },
      ],
    },
  ],
}
