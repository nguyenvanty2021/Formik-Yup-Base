import React from 'react'
import { TextErrorsProps } from '../../Model'
import './index.css'

const TextErrors: React.FC<TextErrorsProps> = ({ message }) => {
  return <div className="errors">{message}</div>
}
export default TextErrors
