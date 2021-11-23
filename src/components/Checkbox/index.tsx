import React from 'react'
import TextErrors from '../TextErrors'
import './index.css'
interface CheckboxMainProps {
  handleBlur: (e: React.FocusEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  values: any
  type: string
  label: string
  options: any
  name: string
  touched: any
}
const CheckboxMain: React.FC<CheckboxMainProps> = ({
  options,
  handleChange,
  handleBlur,
  type,
  values,
  label,
  touched,
  name,
}) => {
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
      {(values && values[name] && values[name].length === 0) ||
      (touched[name] && values[name] === '') ? (
        <TextErrors message="Required" />
      ) : null}
    </div>
  )
}
export default CheckboxMain
