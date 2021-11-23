import React, { useState } from 'react'
import './index.css'
import { CloseOutlined } from '@ant-design/icons'
interface ModalProps {
  title: string
  status: boolean
  component: any
}
const ModalMain: React.FC<ModalProps> = ({ title, status, component }) => {
  const [modal, setModal] = useState(status)
  return (
    <div className="parent">
      <div className="open">
        <button onClick={() => setModal(true)} className="btn">
          {title}
        </button>
      </div>
      {modal ? (
        <div className="forget-main">
          <div className="forget">
            <div className="forget-title">
              <div className="title"> {title} </div>
              <div>
                <CloseOutlined
                  onClick={() => setModal(false)}
                  className="close"
                />
              </div>
            </div>

            {component}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
export default ModalMain
