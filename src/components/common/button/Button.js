import React from 'react'
import './button.css'

const Button = ({buttonText}) => {
  return (
    <button className="custom-button">{buttonText} </button>
  )
}

export default Button