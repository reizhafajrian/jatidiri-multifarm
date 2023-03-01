'use client'
import { Button, InputText, Modal } from '@/components/shared'
import { categoryTitle } from '@/data/data'
import { IModal } from '@/data/interfaces'
import { categorySchema } from '@/data/validations'
import { useCategoryStore } from '@/store/category'
import clsx from 'clsx'
import { Formik } from 'formik'

export interface ICategoryFields {
  type: string
  stock: number
  price: number
}

export default function AddCategoryForm(props: IModal & { category: string }) {
  const { category, isOpen, closeModal } = props
  const { addCategory } = useCategoryStore()

  const addCategoryHandler = async (values: ICategoryFields) => {
    // await addCategory({...values})
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">
        Tambah {categoryTitle(category)}
      </h1>
      <Formik
        initialValues={{} as ICategoryFields}
        validationSchema={categorySchema}
        onSubmit={(values) => addCategoryHandler(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-8 space-y-6">
              <InputText
                name="type"
                label={`Jenis ${categoryTitle(category)}`}
                defaultValue={values.type}
                onChange={handleChange}
                errorMsg={errors.type}
                disabled={isSubmitting}
              />
              <InputText
                name="stock"
                label="Stock"
                defaultValue={values.stock}
                onChange={handleChange}
                errorMsg={errors.stock}
                disabled={isSubmitting}
              />
              <InputText
                name="price"
                label={`Harga ${
                  category === 'feed' ? '(per kg)' : '(per pcs)'
                }`}
                defaultValue={values.price}
                onChange={handleChange}
                errorMsg={errors.price}
                disabled={isSubmitting}
              />
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
