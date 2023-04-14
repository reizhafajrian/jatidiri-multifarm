import CertificateForm from '@/components/form/CertificateForm'
import { DownloadCloud, FileText, X } from '@/components/shared/Icons'
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
      <div className="flex items-center gap-2 md:gap-7">
        <div {...getRootProps({ className: 'dropzone' })} className="flex-1">
          <input {...getInputProps()} name={name} disabled={isSubmitting} />
          <div className="flex h-16 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-4 md:gap-6">
            <DownloadCloud className="h-6 w-6" />
            <span className="text-sm font-medium">Unggah sertifikat</span>
          </div>
          <span className="mt-1 text-[8px] font-light text-neutral-4 md:ml-4">
            Unggah Sertifikat Kambing dalam format .pdf
          </span>
        </div>

        <p className="text-xs font-medium">atau</p>

        <div className="flex-1">
          <CertificateForm />
          <span className="mt-1 text-[8px] font-light text-neutral-4 md:ml-4">
            Jika belum memiliki sertifikat buat di sini.
          </span>
        </div>
      </div>

      <span className="text-[10px] text-error">
        {errors[name]?.message?.toString()}
      </span>

      <div>
        {field.value && (
          <div className="mt-2 flex justify-between rounded-lg border border-neutral-3 bg-white p-3">
            <div className="flex gap-3">
              <FileText className="w-5 stroke-primary-3" />
              <div>
                <p className="mb-1 text-sm font-semibold md:text-base">
                  {field.value[0].path}
                </p>
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
    </div>
  )
}

export default InputCertificate
