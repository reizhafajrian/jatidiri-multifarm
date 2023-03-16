'use client'
import { Button, Form, InputText, Modal, toast } from '@/components/shared'
import { IModal } from '@/data/interfaces'
import { categorySchema } from '@/lib/schemas'
import { useAuthStore } from '@/store/auth'
import { ICategory, useCategoryStore } from '@/store/category'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { mutate } from 'swr'

export default function AddCategoryForm(props: IModal & { category: string }) {
  const { category, isOpen, closeModal } = props
  const title = setTitle(category)
  const satuan = setSatuan(category)
  const { user } = useAuthStore()
  const { addCategory } = useCategoryStore()

  const methods = useForm<ICategory>({
    resolver: zodResolver(categorySchema),
  })

  const onSubmit: SubmitHandler<ICategory> = async (values) => {
    const res = await addCategory(values)

    if (res.errors) {
      closeModal(false)
      return toast({
        type: 'error',
        message: res.errors[0].msg,
      })
    }

    closeModal(false)

    toast({
      type: 'success',
      message: res.message,
    })

    mutate(`/api/${category}/get`)
    methods.reset()
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah {title}</h1>
      <Form
        methods={methods}
        onSubmit={(values) =>
          onSubmit({ ...values, created_by: user.id, category })
        }
      >
        <div className="mb-8 space-y-6">
          <InputText name="type" label={`Jenis ${title}`} />
          <InputText name="stock" label="Stock" />
          <InputText name="price" label={`Harga ${satuan}`} />
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
