'use client'
import { Button, Form, InputText, Modal } from '@/components/shared'
import { categorySchema } from '@/lib/schemas'
import { IModal } from '@/lib/types'
import { ICategory, useCategoryStore } from '@/store/category'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IProps extends IModal {
  category: string
}

const EditCategoryForm: FC<IProps> = ({ category, closeModal, isOpen }) => {
  const { formValues, editCategory } = useCategoryStore()

  const methods = useForm<ICategory>({
    resolver: zodResolver(categorySchema),
  })

  const onSubmit: SubmitHandler<ICategory> = async (values) => {
    console.log(values)
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Edit {setTitle(category)}</h1>
      <Form methods={methods} onSubmit={onSubmit} className="mt-5 space-y-4">
        <div className="mb-8 space-y-6">
          <InputText name="type" label={`Jenis ${setTitle(category)}`} />
          <InputText name="stock" label="Stock" />
          <InputText
            name="price"
            label={`Harga ${category === 'feed' ? '(per kg)' : '(per pcs)'}`}
          />
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

export default EditCategoryForm

const setTitle = (category: string) =>
  category === 'feed'
    ? 'Pakan'
    : category === 'vitamin'
    ? 'Vitamin'
    : category === 'vaccine'
    ? 'Vaksin'
    : 'Obat Cacing'
