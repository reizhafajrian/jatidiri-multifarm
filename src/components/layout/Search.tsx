"use client"

import { useForm } from "react-hook-form"

import useStore from "@/store/useStore"

import Form from "../ui/Form"
import { Icons } from "../ui/Icons"

export default function Search() {
  const { searchHandler, searchKeyword } = useStore()
  const methods = useForm({
    values: {
      keyword: searchKeyword,
    },
  })

  return (
    <div className="relative hidden md:w-1/3">
      <Form
        methods={methods}
        onSubmit={(values) => searchHandler(values.keyword)}
      >
        <input
          type="text"
          placeholder="Search"
          className="placeholder:font-ligh border-secondary-4 w-full rounded-full border px-3 py-2 text-sm placeholder:text-sm focus:border-black focus:outline-none"
          {...methods.register("keyword")}
          disabled={methods.formState.isSubmitting}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-3"
          disabled={methods.formState.isSubmitting}
        >
          <Icons.search className="w-6 stroke-neutral-4" />
        </button>
      </Form>
    </div>
  )
}
