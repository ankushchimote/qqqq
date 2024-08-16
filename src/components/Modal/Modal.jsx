import React from 'react'
import './Modal.css'

const Modal = ({onClose,isOpen}) => {
  return (
    <>
    {isOpen && (
      <>
      <div className='modal_box'>
        <span onClick={onClose} style={{cursor:pointer}}>close</span>
      </div> 
      <div className='blur'/>
      </>
    )}
    </>
  )
}

export default Modal