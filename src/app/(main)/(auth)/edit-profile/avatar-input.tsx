"use client"

import { useState } from "react"
import Image from "next/image"
import { useDropzone } from "react-dropzone"
import { useController, UseFormReturn } from "react-hook-form"

import { Icons } from "@/components/ui/Icons"

interface IProps {
  methods: UseFormReturn<any>
}

export default function AvatarInput({ methods }: IProps) {
  const [preview, setPreview] = useState("")
  const { field } = useController({ name: "avatar", control: methods.control })

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setPreview(URL.createObjectURL(acceptedFiles[0]))
      field.onChange(acceptedFiles)
    },
  })

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className="relative h-16 w-16 cursor-pointer rounded-full md:h-20 md:w-20"
    >
      <input
        {...getInputProps()}
        name="avatar"
        disabled={methods.formState.isSubmitting}
      />
      {preview ? (
        <Image
          src={preview!}
          alt="avatar"
          className="rounded-full object-cover"
          fill
        />
      ) : (
        <div className="h-16 w-16 rounded-full bg-black md:h-20 md:w-20" />
      )}
      <div className="absolute -bottom-1 -right-2 grid h-8 w-8 place-items-center rounded-full bg-neutral-2 md:h-10 md:w-10">
        <Icons.camera className="w-5" />
      </div>
    </div>
  )
}
