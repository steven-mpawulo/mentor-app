import React from 'react'
import Logo from '../../images/Logo.png';
import signupImage from '../../images/signup.png';
import TextInput from '../common/textinput/TextInput';
import Button from '../common/button/Button';

const Signup = () => {
    return (
        <main>
            <section>
                <div className="signup-left-container">
                    <img src={Logo} alt="logo" />
                    <h1>Welcome to <span>Eduvi Online</span> <span>Learning platform</span></h1>
                    <img src={signupImage} alt="signup" />
                </div>
                <div className="signup-right-container">
                    <TextInput label={"First Name"} placeholder={"John Doe"} type={"text"} />
                    <TextInput label={"Last Name"} placeholder={"John Marvin"} type={"text"} />
                    <TextInput label={"Email"} placeholder={"johnmarvin@domain.com"} type={"email"} />
                    <TextInput label={"Password"} placeholder={"password"} type={"password"} />
                    <Button buttonText={"Sign Up"} />

                </div>
            </section>
        </main>

    )
}

export default Signup