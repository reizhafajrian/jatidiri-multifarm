'use client'
import { Field, Form, InputCheckbox, Modal } from '@/components/shared'
import { shedDataFormContent } from '@/data/data'
import { IModal } from '@/data/interfaces'
import { shedDataSchema as schema } from '@/data/validations'
import { useAuthStore } from '@/store/auth'
import { IShedDetail, useShedStore } from '@/store/shed'
import { useState } from 'react'

export default function AddShedDataForm(props: IModal) {
  const { isOpen, closeModal } = props
  const { user } = useAuthStore()
  const { shedDetail, addShedDetail } = useShedStore()
  const [categories, setCategories] = useState<any>({ feed: true })

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
            {shedDataFormContent.options.map((item, idx) => (
              <InputCheckbox
                key={idx}
                label={item.label}
                defaultChecked={categories[item.name]}
                onChange={(e: any) =>
                  setCategories((s: any) => ({
                    ...s,
                    [item.name]: e.target.checked,
                  }))
                }
              />
            ))}
          </div>
          {/* form fields */}
          {shedDataFormContent.content.map((item, idx) => (
            <div
              key={idx}
              className={categories[item.name] ? 'block' : 'hidden'}
            >
              <h3 className="mb-4 text-base font-medium">{item.title}</h3>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                {item.fields.map((field, idx) =>
                  field.type === 'date' ? (
                    <Field
                      type="date"
                      key={idx}
                      name={field.name}
                      label={field.label}
                    />
                  ) : (
                    <Field
                      type="input"
                      key={idx}
                      name={field.name}
                      label={field.label}
                    />
                  )
                )}
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
