import clsx from 'clsx'
import { useDropzone } from 'react-dropzone'
import { Close, File, FileSmall } from '../Icons'

interface IProps {
  label: string
  placeholder?: any
  value: any
  setValue: (files: any) => void
  errorMsg?: string
}

export default function Dropzone(props: IProps) {
  const { label, value, setValue, placeholder, errorMsg } = props
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setValue(acceptedFiles[0])
    },
  })

  return (
    <div className="space-y-3">
      <div>
        <input
          className={clsx(
            'w-full appearance-none rounded-lg border bg-white px-2.5 py-2.5 text-sm',
            errorMsg
              ? 'border-error text-error disabled:border-error'
              : 'border-neutral-4 text-neutral-4 disabled:border-neutral-3'
          )}
          value={label}
          disabled
        />
        {errorMsg && <span className="text-[10px] text-error">{errorMsg}</span>}
        {value && (
          <div className="mt-2 flex justify-between rounded-lg border border-neutral-3 bg-white p-3">
            <div className="flex gap-3">
              <FileSmall />
              <div>
                <p className="mb-1 font-semibold">{value.path}</p>
                <p className="text-xs text-neutral-4">{value.size} bytes</p>
              </div>
            </div>
            <button onClick={() => setValue(undefined)}>
              <Close />
            </button>
          </div>
        )}
      </div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className="grid cursor-default place-items-center gap-2 border border-dashed border-neutral-4 py-6">
          {placeholder ?? (
            <>
              <File />
              <p className="font-semibold">
                Upload file atau
                <span className="text-primary-5"> klik disini</span> untuk
                upload
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
