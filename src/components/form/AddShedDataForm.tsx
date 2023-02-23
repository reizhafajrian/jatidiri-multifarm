'use client'
import {
  Button,
  InputCheckbox,
  InputDate,
  InputText,
  Modal,
} from '@/components/shared'
import { shedDataFormContent } from '@/data/data'
import { IShedDataFields, IShedProps } from '@/data/interfaces'
import { shedDataSchema } from '@/data/validations'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useState } from 'react'

export default function AddShedDataForm(props: IShedProps) {
  const { isOpen, closeModal } = props
  const { category, content } = shedDataFormContent
  const [categories, setCategories] = useState<any>(category.initial)

  const addShedDataHandler = async (values: IShedDataFields) => {
    return console.log({ ...values })
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data</h1>
      <Formik
        initialValues={{} as IShedDataFields}
        validationSchema={shedDataSchema}
        onSubmit={(values) => addShedDataHandler(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-8 space-y-5">
              {/* category radio options */}
              <div className="flex justify-between">
                {category.options.map((item, idx) => (
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
              {content.map((item, idx) => (
                <div
                  key={idx}
                  className={categories[item.name] ? 'block' : 'hidden'}
                >
                  <h3 className="mb-4 text-base font-medium">{item.title}</h3>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                    {item.fields.map((field, idx) =>
                      field.type === 'date' ? (
                        <InputDate
                          key={idx}
                          name={field.name}
                          label={field.label}
                          selected={values[field.name]}
                          errorMsg={errors[field.name]}
                          disabled={isSubmitting}
                        />
                      ) : (
                        <InputText
                          key={idx}
                          name={field.name}
                          label={field.label}
                          defaultValue={values[field.name]}
                          onChange={handleChange}
                          errorMsg={errors[field.name]}
                          disabled={isSubmitting}
                        />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3">
              <Button
                intent="secondary"
                onClick={() => closeModal(false)}
                className="w-36 rounded-lg py-2"
              >
                cancel
              </Button>
              <Button
                type="submit"
                className={clsx(
                  'w-36 rounded-lg py-2',
                  isSubmitting && 'animate-pulse'
                )}
                disabled={isSubmitting}
              >
                save
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
