import React from 'react'

const TextInput = ({type, placeholder, label}) => {
  return (
    <div className="textInput">
        <label htmlFor={label}>{label}</label>
        <input type={type} placeholder= {placeholder} name= {label} id= {label}/>
    </div>
  )
}

export default TextInput