'use client'
import { Field, Form, Modal } from '@/components/shared'
import { categoryTitle } from '@/data/data'
import { IModal } from '@/data/interfaces'
import { categorySchema as schema } from '@/data/validations'
import { useCategoryStore } from '@/store/category'

export interface ICategoryFields {
  type: string
  stock: number
  price: number
}

export default function AddCategoryForm(props: IModal & { category: string }) {
  const { category, isOpen, closeModal } = props
  const { addCategory } = useCategoryStore()

  const onSubmit = async (values: ICategoryFields) => {
    // await addCategory({...values})
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">
        Tambah {categoryTitle(category)}
      </h1>
      <Form schema={schema} onSubmit={onSubmit}>
        <div className="mb-8 space-y-6">
          <Field
            type="input"
            name="type"
            label={`Jenis ${categoryTitle(category)}`}
          />
          <Field type="input" name="stock" label="Stock" />
          <Field
            type="input"
            name="price"
            label={`Harga ${category === 'feed' ? '(per kg)' : '(per pcs)'}`}
          />
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}
