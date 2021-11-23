import React from 'react'
import TextErrors from '../TextErrors'
import './index.css'
interface SelectMainProps {
  formik: any
  type: string
  label: string
  options: any
  name: string
}
const SelectMain: React.FC<SelectMainProps> = ({
  options,
  formik,
  type,
  label,
  name,
}) => {
  console.log(formik)
  return (
    <div className="select">
      <div>{label}</div>
      <div className="item">
        <select
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id={name}
          name={name}
        >
          {options &&
            options.length > 0 &&
            options.map((option: any, index: number) => {
              return (
                <option
                  key={index}
                  style={{ width: '1.5rem' }}
                  value={option.value}
                >
                  {option.key}
                </option>
              )
            })}
        </select>
      </div>
      {formik &&
      formik.values &&
      formik.touched[name] &&
      formik.values[name] === '' ? (
        <TextErrors message="Required" />
      ) : null}
    </div>
  )
}
export default SelectMain
