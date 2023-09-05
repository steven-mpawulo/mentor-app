import React from 'react'
import Logo from '../../images/Logo.png';
import signupImage from '../../images/authImage.png';
import personIcon from '../../images/person.png';
import messageIcon from '../../images/message.png';
import padlockIcon from '../../images/padlock.png'
import TextInput from '../common/textinput/TextInput';
import Button from '../common/button/Button';
import './signup.css';

const Signup = () => {
    return (
        <main className="signup-main-container">
            <section className="sign-up">
                <div className="signup-left-container">
                    <img src={Logo} alt="logo" className="logo"/>
                    <h1>Welcome to <span>Eduvi Online</span> <span>Learning platform</span></h1>
                    <img src={signupImage} alt="signup" className="signup-image"/>
                </div>
                <div className="signup-right-container">
                    <TextInput label={"First Name"} placeholder={"John Doe"} type={"text"} customIcon={personIcon}/>
                    <TextInput label={"Last Name"} placeholder={"John Marvin"} type={"text"} customIcon={personIcon}/>
                    <TextInput label={"Email"} placeholder={"johnmarvin@domain.com"} type={"email"} customIcon={messageIcon}/>
                    <TextInput label={"Password"} placeholder={"password"} type={"password"} customIcon={padlockIcon}/>
                    <Button buttonText={"Sign Up"} />
                    <p>Already have an account? <a href="#signin" className='link-for-singin'>Sign in</a></p>

                </div>
            </section>
        </main>

    )
}

export default Signup