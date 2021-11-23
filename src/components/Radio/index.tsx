import React from 'react'
import './index.css'
interface RadioMainProps {
  type: string
  label: string
  options: any
  values: any
  handleBlur: (e: React.FocusEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  name: string
}
const RadioMain: React.FC<RadioMainProps> = ({
  options,
  type,
  label,
  handleBlur,
  values,
  name,
  handleChange,
}) => {
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
                  checked={values.status === option.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
