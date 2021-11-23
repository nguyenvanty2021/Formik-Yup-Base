import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMain from '../Input'
import './index.css'
import CheckboxMain from '../Checkbox'
import RadioMain from '../Radio'
import SelectMain from '../Select'
import TextAreaMain from '../TextArea'
interface Array {
  key: string
  value: string
}
const arraySelect = [
  {
    key: 'Select city',
    value: '',
  },
  {
    key: 'Ho Chi Minh',
    value: 'hcm',
  },
  {
    key: 'Ha Noi',
    value: 'hn',
  },
]
const arrayRadio: Array[] = [
  {
    key: 'Young',
    value: 'young',
  },
  {
    key: 'Older',
    value: 'older',
  },
]
const arrayCheckbox: Array[] = [
  {
    key: 'ReactJS',
    value: 'reactJS',
  },
  {
    key: 'NextJS',
    value: 'nextJS',
  },
]
interface InitialValueProps<T> {
  email: T
  language: T[] | T
  status: T
  city: T
  password: T
  rePassword: T
  description: T
  age: T
}
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
        formik={formik}
      />
      <InputMain
        style={{ textIndent: '0.5rem', padding: '0.5rem 0' }}
        name="age"
        placeholder="Input age"
        label="Age"
        type="text"
        formik={formik}
      />
      <InputMain
        style={{ textIndent: '0.5rem', padding: '0.5rem 0' }}
        name="password"
        placeholder="Input password"
        label="Password"
        type="text"
        formik={formik}
      />
      <InputMain
        style={{ textIndent: '0.5rem', padding: '0.5rem 0' }}
        name="rePassword"
        placeholder="Input re-password"
        label="Re-password"
        type="text"
        formik={formik}
      />
      <CheckboxMain
        type="checkbox"
        label="Language"
        name="language"
        options={arrayCheckbox}
        formik={formik}
      />
      <RadioMain
        type="radio"
        label="Status"
        name="status"
        options={arrayRadio}
        formik={formik}
      />
      <SelectMain
        type="select"
        label="City"
        name="city"
        options={arraySelect}
        formik={formik}
      />
      <TextAreaMain
        style={{}}
        name="description"
        placeholder="Input description"
        label="Description"
        formik={formik}
      />
      <div className="btn">
        {' '}
        <button className="btn-child" type="submit">
          Submit
        </button>
      </div>
    </form>
  
  )
}
export default Register
