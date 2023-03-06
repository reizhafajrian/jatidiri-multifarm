'use client'
import { Form as FormikForm, Formik, FormikValues } from 'formik'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  values?: FormikValues
  schema: any
  onSubmit: (values: any) => void | Promise<any>
  className?: string
}

export default function Form(props: IProps) {
  return (
    <Formik
      initialValues={props.values ?? {}}
      validationSchema={props.schema}
      onSubmit={(values) => props.onSubmit(values)}
      validateOnChange={false}
    >
      <FormikForm className={props.className}>{props.children}</FormikForm>
    </Formik>
  )
}
