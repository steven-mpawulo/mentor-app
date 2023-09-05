import React from 'react'
import Logo from '../../images/Logo.png'
import loginImage from '../../images/authImage.png'
import TextInput from '../common/textinput/TextInput'
import Button from '../common/button/Button'
import messageIcon from '../../images/message.png'
import padlockIcon from '../../images/padlock.png'
import './login.css'

const Login = () => {
    return (
        <main className='login-main-container'>
            <section className='login'>
                <div className="login-left-container">
                    <img src={Logo} alt="logo" className="logo" />
                    <h1>Welcome to <span>Eduvi Online</span> <span>Learning platform</span></h1>
                    <img src={loginImage} alt="signup" className="login-image" />
                </div>
                <div className="login-right-container">
                    <TextInput label={"Email"} placeholder={"johnmarvin@domain.com"} type={"email"} customIcon={messageIcon} />
                    <TextInput label={"Password"} placeholder={"password"} type={"password"} customIcon={padlockIcon} />
                    <Button buttonText={"Sign In"} />
                    <p><a href="#forgot-password" className='link-for-forgot-password'>Forgot password?</a></p>
                    <p> Already have an account? <a href="#signup" className='link-for-signup'>Sign Up</a></p>
                </div>
            </section>
        </main>
    )
}

export default Login