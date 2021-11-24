import React from 'react'
import { TextAreaMainProps } from '../../Model'
import TextErrors from '../TextErrors'
import './index.css'

const TextAreaMain: React.FC<TextAreaMainProps> = ({
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
