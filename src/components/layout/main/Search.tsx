'use client'
import { Form } from '@/components/shared'
import { SearchIcon } from '@/components/shared/Icons'
import useStore from '@/store/useStore'
import { useForm } from 'react-hook-form'

export default function Search() {
  const { searchHandler, searchKeyword } = useStore()
  const methods = useForm({
    values: {
      keyword: searchKeyword,
    },
  })

  return (
    <div className="relative w-1/3">
      <Form
        methods={methods}
        onSubmit={(values) => searchHandler(values.keyword)}
      >
        <input
          type="text"
          placeholder="Search"
          className="placeholder:font-ligh border-secondary-4 w-full rounded-full border py-2 px-3 text-sm placeholder:text-sm focus:border-black focus:outline-none"
          {...methods.register('keyword')}
          disabled={methods.formState.isSubmitting}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-3"
          disabled={methods.formState.isSubmitting}
        >
          <SearchIcon className="w-6 stroke-neutral-4" />
        </button>
      </Form>
    </div>
  )
}
