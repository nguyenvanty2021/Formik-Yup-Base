export interface ArrayMain {
  key: string;
  value: string;
}
export interface InitialValueProps<T> {
  email: T;
  language?: T[] | T;
  status?: T;
  city?: T;
  password?: T;
  rePassword?: T;
  description?: T;
  age?: T;
}
export interface CheckboxMainProps {
  handleBlur: (e: React.FocusEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  values: any
  type: string
  label: string
  options: any
  name: string
  touched: any
}
export interface InputMainProps {
  type: string
  label: string
  name: string
  handleBlur: (e: React.FocusEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  placeholder: string
  touched: any
  style: any
  errors: any
  values?: any
}
export interface ModalProps {
  title: string
  status: boolean
  component: any
}
export interface RadioMainProps {
  type: string
  label: string
  options: any
  values: any
  handleBlur: (e: React.FocusEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  name: string
}
export interface SelectMainProps {
  type: string
  label: string
  touched: any
  values: any
  options: any
  handleBlur: (e: React.FocusEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  name: string
}
export interface TextAreaMainProps {
  label: string
  name: string
  touched: any
  values: any
  handleBlur: (e: React.FocusEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  errors: any
  placeholder: string
  style: any
}
export interface TextErrorsProps {
  message: string
}