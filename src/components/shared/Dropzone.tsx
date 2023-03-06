'use client'
import clsx from 'clsx'
import { Field, useField, useFormikContext } from 'formik'
import { useDropzone } from 'react-dropzone'
import { Close, File, FileSmall } from './Icons'

interface IProps {
  name: string
  label: string
}

export default function Dropzone(props: IProps) {
  const { label, name, ...rest } = props
  const [field] = useField({ name })

  return <Field label={label} as={DropzoneBox} {...field} {...rest} />
}

const DropzoneBox = (props: IProps) => {
  const { label, name } = props
  const [field, meta] = useField({ name })
  const { isSubmitting } = useFormikContext()

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      field.onChange({ target: { value: acceptedFiles, name } })
    },
  })

  return (
    <div className="space-y-3">
      <div>
        <input
          className={clsx(
            'w-full appearance-none rounded-lg border px-2.5 py-2.5 text-sm',
            meta.error
              ? 'border-error text-error disabled:border-error'
              : 'border-neutral-4 text-neutral-4 disabled:border-neutral-3',
            isSubmitting
              ? 'disabled:bg-[#ebebeb] disabled:text-neutral-4'
              : 'bg-white'
          )}
          value={label}
          disabled
        />
        {(meta.touched || meta.error) && (
          <span className="text-[10px] text-error">{meta.error}</span>
        )}

        {field.value && (
          <div className="mt-2 flex justify-between rounded-lg border border-neutral-3 bg-white p-3">
            <div className="flex gap-3">
              <FileSmall />
              <div>
                <p className="mb-1 font-semibold">{field.value[0].path}</p>
                <p className="text-xs text-neutral-4">
                  {field.value[0].size} bytes
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                field.onChange({ target: { value: undefined, name } })
              }
            >
              <Close />
            </button>
          </div>
        )}
      </div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} name={name} disabled={isSubmitting} />
        <div className="grid cursor-default place-items-center gap-2 border border-dashed border-neutral-4 py-6">
          <File />
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
