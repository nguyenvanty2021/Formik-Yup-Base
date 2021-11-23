import React from 'react'
import TextErrors from '../TextErrors'
import './index.css'
interface SelectMainProps {
  type: string
  label: string
  touched: any
  values: any
  options: any
  handleBlur: (e: React.FocusEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  name: string
}
const SelectMain: React.FC<SelectMainProps> = ({
  options,
  handleBlur,
  values,
  touched,
  handleChange,
  label,
  name,
}) => {
  return (
    <div className="select">
      <div>{label}</div>
      <div className="item">
        <select
          onChange={handleChange}
          onBlur={handleBlur}
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
      {values && touched[name] && values[name] === '' ? (
        <TextErrors message="Required" />
      ) : null}
    </div>
  )
}
export default SelectMain
