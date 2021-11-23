import React from 'react'
import TextErrors from '../TextErrors'
import './index.css'
interface InputMainProps {
  formik: any
  label: string
  name: string
  placeholder: string
  style: any
}
const TextAreaMain: React.FC<InputMainProps> = ({
  placeholder,
  style,
  formik,
  label,
  name,
}) => {
  console.log(formik)
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <textarea
        // @ts-ignore
        rows="4"
        // @ts-ignore
        cols="50"
        // id="name"
        style={
          formik.touched[name] && formik.errors[name]
            ? { ...style, border: '1px solid red' }
            : style
        }
        name={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <TextErrors message={formik.errors[name]} />
      ) : null}
    </div>
  )
}
export default TextAreaMain
