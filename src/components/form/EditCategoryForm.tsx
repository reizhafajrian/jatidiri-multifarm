'use client'
import { Field, Form, Modal } from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { categorySchema as schema } from '@/data/validations'
import { ICategory, useCategoryStore } from '@/store/category'

export default function EditCategoryForm(props: IModal & { category: string }) {
  const { category, isOpen, closeModal } = props
  const title = setTitle(category)
  const satuan = setSatuan(category)
  const { formValues, editCategory } = useCategoryStore()

  const onSubmit = async (values: ICategory) => {
    // await editCategory({ ...values })
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Edit {title}</h1>
      <Form
        values={formValues}
        schema={schema}
        onSubmit={onSubmit}
        className="mt-5 space-y-4"
      >
        <div className="mb-8 space-y-6">
          <Field type="input" name="type" label={`Jenis ${title}`} />
          <Field type="input" name="stock" label="Stock" />
          <Field type="input" name="price" label={`Harga ${satuan}`} />
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}

const setSatuan = (category: string) =>
  category === 'feed' ? '(per kg)' : '(per pcs)'

const setTitle = (category: string) =>
  category === 'feed'
    ? 'Pakan'
    : category === 'vitamin'
    ? 'Vitamin'
    : category === 'vaccine'
    ? 'Vaksin'
    : 'Obat Cacing'
