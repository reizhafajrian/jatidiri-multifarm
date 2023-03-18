'use client'
import { Button, Form, InputText } from '@/components/shared'
import {
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/shared/Dialog'
import { categorySchema } from '@/lib/schemas'
import { ICategory } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface EditCategoryFormProps {
  category: string
}

const EditCategoryForm: FC<EditCategoryFormProps> = ({ category }) => {
  const [open, setOpen] = useState(false)
  const { editCategory } = useStore()

  const methods = useForm<ICategory>({
    resolver: zodResolver(categorySchema),
  })

  const onSubmit: SubmitHandler<ICategory> = async (values) => {
    console.log(values)
    setOpen(false)
  }

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="edit" size="xs" />
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Edit {setTitle(category)}</DialogTitle>

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
            <DialogClose>
              <Button
                type="button"
                variant="outline"
                className="w-36"
                disabled={methods.formState.isSubmitting}
              >
                CANCEL
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="w-36"
              isLoading={methods.formState.isSubmitting}
            >
              SAVE
            </Button>
          </div>
        </Form>
      </DialogContent>
    </DialogRoot>
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
