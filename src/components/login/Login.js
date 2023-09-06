import React, { useState } from 'react'
import Logo from '../../images/Logo.png'
import loginImage from '../../images/authImage.png'
import TextInput from '../common/textinput/TextInput'
import Button from '../common/button/Button'
import messageIcon from '../../images/message.png'
import padlockIcon from '../../images/padlock.png'
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onEmailChanged = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChanged = (event) => {
        setPassword(event.target.value);
    } 

    const login =  async (url, data) => {
        try {
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((res) => {
                setIsLoading(false);
                setEmail("");
                setPassword("");
                return res.json();
            }).then((res) => {
                console.log(res);
            });
        } catch(e) {
            setIsLoading(false);
            console.log(e);
            console.log("something went wrong");
        }
        
    }

    const onButtonClicked = (event) => {
        setIsLoading(true);
        event.preventDefault();
        console.log('email', email);
        console.log('password', password);
        const data = {
            "email": email,
            "password": password,
        }
        login("http://localhost:5000/api/v1/signin", data);
    }
    return (
        <main className='login-main-container'>
            <section className='login'>
                <div className="login-left-container">
                    <img src={Logo} alt="logo" className="logo" />
                    <h1>Welcome to <span>Eduvi Online</span> <span>Learning platform</span></h1>
                    <img src={loginImage} alt="signup" className="login-image" />
                </div>
                <div className="login-right-container">
                    <form action="">
                    <TextInput label={"Email"} placeholder={"johnmarvin@domain.com"} type={"email"} customIcon={messageIcon} inputValue={email} onChangeHandler={onEmailChanged}/>
                    <TextInput label={"Password"} placeholder={"password"} type={"password"} customIcon={padlockIcon} inputValue={password} onChangeHandler={onPasswordChanged} />
                    <Button buttonText={isLoading ? "Loading...": "Sign In"} onClickHandler={onButtonClicked} />
                    </form>
                    <p><a href="#forgot-password" className='link-for-forgot-password'>Forgot password?</a></p>
                    <p> Already have an account? <a href="#signup" className='link-for-signup'>Sign Up</a></p>
                </div>
            </section>
        </main>
    )
}

export default Login