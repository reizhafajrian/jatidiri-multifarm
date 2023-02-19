import { useDropzone } from 'react-dropzone'
import { Close, FileSmall } from '../Icons'

interface IProps {
  label: string
  placeholder: any
  value: any
  setValue: (files: any) => void
}

export default function Dropzone(props: IProps) {
  const { label, value, setValue, placeholder } = props
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
          className={
            'w-full appearance-none rounded-lg border border-neutral-4 bg-white px-2.5 py-2.5 text-sm text-neutral-4 disabled:border-neutral-3'
          }
          value={label}
          disabled
        />
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
          {placeholder}
        </div>
      </div>
    </div>
  )
}
