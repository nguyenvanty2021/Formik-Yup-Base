import React from 'react'
import TextErrors from '../TextErrors'
import './index.css'
interface CheckboxMainProps {
  formik: any
  type: string
  label: string
  options: any
  name: string
}
const CheckboxMain: React.FC<CheckboxMainProps> = ({
  options,
  formik,
  type,
  label,
  name,
}) => {
  console.log(formik)
  return (
    <div className="checkbox">
      <div>{label}</div>
      {options &&
        options.length > 0 &&
        options.map((option: any, index: number) => {
          return (
            <div className="item" key={index}>
              <div>
                {' '}
                <input
                  style={{ width: '1.5rem' }}
                  type={type}
                  name={name}
                  id={option.value}
                  // checked={field.value.includes(option.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={option.value}
                />
              </div>
              <div>
                {' '}
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            </div>
          )
        })}
      {(formik &&
        formik.values &&
        formik.values[name] &&
        formik.values[name].length === 0) ||
      (formik.touched[name] && formik.values[name] === '') ? (
        <TextErrors message="Required" />
      ) : null}
    </div>
  )
}
export default CheckboxMain
