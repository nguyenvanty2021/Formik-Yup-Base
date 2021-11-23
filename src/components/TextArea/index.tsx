import React from 'react'
import TextErrors from '../TextErrors'
import './index.css'
interface InputMainProps {
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
const TextAreaMain: React.FC<InputMainProps> = ({
  placeholder,
  style,
  values,
  handleBlur,
  touched,
  handleChange,
  errors,
  label,
  name,
}) => {
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
          touched[name] && errors[name]
            ? { ...style, border: '1px solid red' }
            : style
        }
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      {touched[name] && errors[name] ? (
        <TextErrors message={errors[name]} />
      ) : null}
    </div>
  )
}
export default TextAreaMain
