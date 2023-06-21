import { FC, ReactNode } from "react"
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form"

interface IProps {
  methods: UseFormReturn<any>
  onSubmit?: SubmitHandler<any>
  children: ReactNode
  className?: string
}

const Form: FC<IProps> = ({ methods, onSubmit, children, className }) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit ?? console.log)}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
