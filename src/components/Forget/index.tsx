import React from 'react'
import './index.css'
import * as Yup from 'yup'
import InputMain from '../Input'
import { useFormik } from 'formik'
import ModalMain from '../Modal'
interface InitialValueProps<T> {
  email: T
}
const initialValues: any = {
  email: '',
}

const onSubmit = (values: InitialValueProps<string>[]) => {
  console.log('Form data', values)
  alert('OKE LA')
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
})
const Forget: React.FC = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })
  const content = (
    <form className="form" onSubmit={formik.handleSubmit}>
      <InputMain
        style={{ textIndent: '0.5rem', padding: '0.5rem 0' }}
        name="email"
        placeholder="Input email"
        label="E-mail"
        type="email"
        formik={formik}
      />

      <div className="btn-content">
        {' '}
        <button className="btn-child" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
  return (
    <ModalMain component={content} title="Forget Password" status={true} />
  )
}
export default Forget
