import React from 'react'
import './textinput.css'

const TextInput = ({type, placeholder, label, customIcon}) => {
  return (
    <div className="textInput">
        <label htmlFor={label}>{label}</label> 
        <br />
        <div className="container-for-input">
          <img src={customIcon} alt="custom-icon" className="custom-icon"/>
        <input type={type} placeholder= {placeholder} name= {label} id= {label}/>
        </div>
        
    </div>
  )
}

export default TextInput