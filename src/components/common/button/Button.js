import React from 'react'
import './button.css'

const Button = ({buttonText, onClickHandler}) => {
  return (
    <button className="custom-button" onClick={onClickHandler} type='submit'>{buttonText}  </button>
  )
}

export default Button