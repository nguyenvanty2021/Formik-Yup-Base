import React from 'react'
import TextErrors from '../TextErrors'
import './index.css'
interface InputMainProps {
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
const InputMain: React.FC<InputMainProps> = ({
  placeholder,
  style,
  handleBlur,
  handleChange,
  errors,
  values,
  type,
  touched,
  label,
  name,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
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
export default InputMain
