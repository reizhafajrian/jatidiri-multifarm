'use client'
import {
  Button,
  Form,
  InputRadio,
  InputSelect,
  InputText,
} from '@/components/shared'
import { Get } from '@/lib/api'
import { shedSchema } from '@/lib/schemas'
import { IShed } from '@/store/types'
import useStore from '@/store/useStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'

export default function ShedForm() {
  const router = useRouter()
  const { user, addShed } = useStore()
  const methods = useForm<IShed>({ resolver: zodResolver(shedSchema) })
  const { data: res, error, isLoading } = useSWR(`/api/feed/get`, Get)
  const { data } = res || {}
  return (
    <Form
      onSubmit={(values) =>
        addShed({ ...values, created_by: user?.id }, router)
      }
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
          {/* <InputText name="shed_code" label="No Kandang" disabled /> */}
          <InputSelect
            name="default_feed"
            label="Pakan"
            options={data?.map((res: any) => ({
              value: res.id,
              name: res.name,
            }))}
            isLoading={isLoading}
          />
          {/* <InputText name="age_range" label="Range Usia" /> */}
        </div>
        <div className="space-y-6">
          {/* <InputText name="animal_weight" label="Berat Hewan" />
          <InputText name="feed_weight" label="Berat Pakan" /> */}
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
