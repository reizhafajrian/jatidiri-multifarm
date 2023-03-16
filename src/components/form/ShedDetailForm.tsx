'use client'
import {
  Button,
  Form,
  InputCheckbox,
  InputDate,
  InputSelect,
  InputText,
  Modal,
  toast,
} from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { shedDetailSchema } from '@/lib/schemas'
import { useAuthStore } from '@/store/auth'
import { IShedDetail, useShedStore } from '@/store/shed'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function ShedDetailForm(props: IModal & { shed_code: string }) {
  const { isOpen, closeModal, shed_code } = props
  const { user } = useAuthStore()
  const { addShedDetail } = useShedStore()
  const [categories, setCategories] = useState<any>({ feed: true })

  const methods = useForm<IShedDetail>({
    resolver: zodResolver(shedDetailSchema(categories)),
  })

  const onSubmit: SubmitHandler<IShedDetail> = async (values) => {
    const res = await addShedDetail(values)

    if (res.errors) {
      closeModal(false)
      return toast({
        type: 'error',
        message: res.errors[0].msg,
      })
    }

    toast({
      type: 'success',
      message: res.message,
    })

    closeModal(false)
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data</h1>
      <Form
        onSubmit={(values) =>
          onSubmit({ ...values, created_by: user.id, shed_code })
        }
        methods={methods}
      >
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
                {fields.map(({ name, label, type }, idx) => (
                  <div key={idx}>
                    {type === 'date' ? (
                      <InputDate name={`data_${name}`} label={label} />
                    ) : type === 'select' ? (
                      <InputSelect
                        name={`data_${name}`}
                        label={label}
                        options={[{ name: 'opt-1', value: 'opt-1' }]}
                      />
                    ) : (
                      <InputText name={`data_${name}`} label={label} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-36"
            onClick={() => closeModal(false)}
            disabled={methods.formState.isSubmitting}
          >
            CANCEL
          </Button>
          <Button
            type="submit"
            className="w-36"
            isLoading={methods.formState.isSubmitting}
          >
            SAVE
          </Button>
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
        // { type: 'input', label: 'Harga', name: 'feed_price', rupiah: true },
        { type: 'input', label: 'Stok', name: 'feed_stock' },
      ],
    },
    {
      name: 'vitamin',
      title: 'Vitamin',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'vitamin_date' },
        { type: 'select', label: 'Jenis vitamin', name: 'vitamin_type' },
        // { type: 'input', label: 'Harga', name: 'vitamin_price', rupiah: true },
        { type: 'input', label: 'Stok', name: 'vitamin_stock' },
      ],
    },
    {
      name: 'vaccine',
      title: 'Vaksin',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'vaccine_date' },
        { type: 'select', label: 'Jenis Vaksin', name: 'vaccine_type' },
        // { type: 'input', label: 'Harga', name: 'vaccine_price', rupiah: true },
        { type: 'input', label: 'Stok', name: 'vaccine_stock' },
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
        // {
        //   type: 'input',
        //   label: 'Harga',
        //   name: 'anthelmintic_price',
        //   rupiah: true,
        // },
        { type: 'input', label: 'Stok', name: 'anthelmintic_stock' },
      ],
    },
  ],
}
