import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMain from '../Input'
import './index.css'
import CheckboxMain from '../Checkbox'
import RadioMain from '../Radio'
import SelectMain from '../Select'
import TextAreaMain from '../TextArea'
import { arrayCheckbox, arrayRadio, arraySelect } from '../../Model/data'
import { InitialValueProps } from '../../Model'
const initialValues: any = {
  email: '',
  language: '',
  status: 'young',
  city: '',
  password: '',
  rePassword: '',
  description: '',
  age: '',
}
const onSubmit = (values: InitialValueProps<string>[]) => {
  console.log('Form data', values)
  alert('OKE LA')
}
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  language: Yup.array().required('Required'),
  status: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  age: Yup.number()
    .max(100, 'Too Old!')
    .required('Required')
    .positive()
    .integer(),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Password must match')
    .required('Required'),
})
const Register: React.FC = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <InputMain
        style={{ textIndent: '0.5rem', padding: '0.5rem 0' }}
        name="email"
        placeholder="Input email"
        label="E-mail"
        type="email"
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
        touched={formik.touched}
        errors={formik.errors}
        values={formik.values}
      />
      <InputMain
        style={{ textIndent: '0.5rem', padding: '0.5rem 0' }}
        name="age"
        placeholder="Input age"
        label="Age"
        type="text"
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
        touched={formik.touched}
        errors={formik.errors}
        values={formik.values}
      />
      <InputMain
        style={{ textIndent: '0.5rem', padding: '0.5rem 0' }}
        name="password"
        placeholder="Input password"
        label="Password"
        type="text"
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
        touched={formik.touched}
        errors={formik.errors}
        values={formik.values}
      />
      <InputMain
        style={{ textIndent: '0.5rem', padding: '0.5rem 0' }}
        name="rePassword"
        placeholder="Input re-password"
        label="Re-password"
        type="text"
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
        touched={formik.touched}
        errors={formik.errors}
        values={formik.values}
      />
      <CheckboxMain
        type="checkbox"
        label="Language"
        name="language"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        options={arrayCheckbox}
        values={formik.values}
        touched={formik.touched}
      />
      <RadioMain
        type="radio"
        label="Status"
        name="status"
        options={arrayRadio}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        values={formik.values}
      />
      <SelectMain
        type="select"
        label="City"
        name="city"
        options={arraySelect}
        values={formik.values}
        touched={formik.touched}
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
      />
      <TextAreaMain
        style={{}}
        name="description"
        placeholder="Input description"
        label="Description"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        values={formik.values}
        touched={formik.touched}
        errors={formik.errors}
      />
      <div className="btn-register">
        {' '}
        <button className="btn-child-register" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}
export default Register
