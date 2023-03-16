'use client'
import {
  Button,
  Form,
  InputRadio,
  InputSelect,
  InputText,
  toast
} from '@/components/shared'
import { shedSchema } from '@/lib/schemas'
import { useAuthStore } from '@/store/auth'
import { IShed, useShedStore } from '@/store/shed'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function ShedForm() {
  const router = useRouter()
  const { user } = useAuthStore()
  const { addShed } = useShedStore()

  const methods = useForm<IShed>({
    resolver: zodResolver(shedSchema),
  })

  const onSubmit: SubmitHandler<IShed> = async (values) => {
    const res = await addShed(values)

    if (res.errors) {
      return toast({
        type: 'error',
        message: res.errors[0].msg,
      })
    }

    toast({
      type: 'success',
      message: res.message,
    })

    router.replace(`/shed/goat`)
  }

  return (
    <Form
      onSubmit={(values) => onSubmit({ ...values, created_by: user.id })}
      methods={methods}
      className="space-y-4"
    >
      <h1 className="mb-5 text-base font-semibold">Tambah Data Kandang</h1>
      <div className="mb-6 flex items-center gap-4">
        {[
          { value: 'goat', label: 'Kambing' },
          { value: 'sheep', label: 'Domba' },
          { value: 'cow', label: 'Sapi' },
        ].map((item, idx) => (
          <InputRadio
            key={idx}
            label={item.label}
            name="animal_type"
            value={item.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <InputText name="shed_code" label="No Kandang" />
          <InputSelect
            name="feed"
            label="Pakan"
            options={[
              { name: 'opt-1', value: 'opt-1' },
              { name: 'opt-2', value: 'opt-2' },
              { name: 'opt-3', value: 'opt-3' },
            ]}
          />
          <InputText name="age_range" label="Range Usia" />
        </div>
        <div className="space-y-6">
          <InputText name="animal_weight" label="Berat Hewan" />
          <InputText name="feed_weight" label="Berat Pakan" />
          <InputText name="description" label="Keterangan" />
        </div>
      </div>
      <div className="mt-28 flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-36"
          onClick={() => router.back()}
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
  )
}
