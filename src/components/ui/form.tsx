import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form"

interface IProps {
  methods: UseFormReturn<any>
  onSubmit?: SubmitHandler<any>
  children: React.ReactNode
  className?: string
}

export default function Form({
  methods,
  onSubmit = console.log,
  children,
  className,
}: IProps) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}
