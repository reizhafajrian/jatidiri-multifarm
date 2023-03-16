import { FileText, X } from '@/components/shared/Icons'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import { useDropzone } from 'react-dropzone'
import { useController, useFormContext } from 'react-hook-form'

interface InputCertificateProps {
  name: string
  label: string
}

const InputCertificate: FC<InputCertificateProps> = ({ name, label }) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext()

  const { field } = useController({ name, control })

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      field.onChange(acceptedFiles)
    },
  })

  return (
    <div className="space-y-3">
      <div>
        <input
          className={cn(
            'w-full appearance-none rounded-lg border px-2.5 py-2.5 text-sm',
            errors[name]
              ? 'border-error text-error disabled:border-error'
              : 'border-neutral-4 text-neutral-4 disabled:border-neutral-3',
            isSubmitting
              ? 'disabled:bg-[#ebebeb] disabled:text-neutral-4'
              : 'bg-white'
          )}
          value={label}
          disabled
        />
        <span className="text-[10px] text-error">
          {errors[name]?.message?.toString()}
        </span>

        {field.value && (
          <div className="mt-2 flex justify-between rounded-lg border border-neutral-3 bg-white p-3">
            <div className="flex gap-3">
              <FileText className="w-5 stroke-primary-3" />
              <div>
                <p className="mb-1 font-semibold">{field.value[0].path}</p>
                <p className="text-xs text-neutral-4">
                  {field.value[0].size} bytes
                </p>
              </div>
            </div>
            <button onClick={() => field.onChange(undefined)}>
              <X className="w-4" />
            </button>
          </div>
        )}
      </div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} name={name} disabled={isSubmitting} />
        <div className="grid cursor-default place-items-center gap-2 border border-dashed border-neutral-4 py-6">
          <FileText className="w-6 stroke-neutral-4" />
          <p className="font-semibold">
            Upload file atau
            <span className="text-primary-5"> klik disini</span> untuk upload
          </p>
          <p className="text-xs font-light text-neutral-4">
            Upload dalam format .xls atau .xlsx file
          </p>
          <a
            href="#"
            className="text-xs font-medium uppercase text-primary-5 underline"
          >
            lihat contoh
          </a>
        </div>
      </div>
    </div>
  )
}

export default InputCertificate
