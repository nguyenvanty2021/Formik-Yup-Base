import React from 'react'
import './index.css'
interface RadioMainProps {
  formik: any
  type: string
  label: string
  options: any
  name: string
}
const RadioMain: React.FC<RadioMainProps> = ({
  options,
  formik,
  type,
  label,
  name,
}) => {
  console.log(formik)
  return (
    <div className="radio">
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
                  checked={formik.values.status === option.value}
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
      {/* {formik &&
      formik.values &&
      formik.values[name] === "" ? (
        <div className="error">Required</div>
      ) : null} */}
    </div>
  )
}
export default RadioMain
