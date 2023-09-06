import React, { useState } from 'react'
import Logo from '../../images/Logo.png';
import signupImage from '../../images/authImage.png';
import personIcon from '../../images/person.png';
import messageIcon from '../../images/message.png';
import padlockIcon from '../../images/padlock.png'
import TextInput from '../common/textinput/TextInput';
import Button from '../common/button/Button';
import './signup.css';
const Spinner = require('react-spinkit');


const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    const onFirstNameChanged = (event) => {
        setFirstName(event.target.value);
    };
    const onLastNameChanged = (event) => {
        setLastName(event.target.value);
    };
    const onEmailChanged = (event) => {
        setEmail(event.target.value);
    };
    const onPasswordChanged= (event) => {
        setPassword(event.target.value);
    };
    async function signUp (url, data ) {
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data),
            }).then((res) => {
                setIsLoading(false);
                setFirstName("");
                setLastName("");
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

    const buttonClicked = (event) => {
        setIsLoading(true);
        event.preventDefault();
        console.log('first name:',firstName);
        console.log('last name:', lastName);
        console.log('email:', email);
        console.log('password:', password);
        const data = {
        "firstName": firstName,
        "lastName": lastName,
        "password": password,
        "email": email

        }
        signUp("http://localhost:5000/api/v1/signup", data);
    }

    
    return (
        <main className="signup-main-container">
            <section className="sign-up">
                <div className="signup-left-container">
                    <img src={Logo} alt="logo" className="logo"/>
                    <h1>Welcome to <span>Eduvi Online</span> <span>Learning platform</span></h1>
                    <img src={signupImage} alt="signup" className="signup-image"/>
                </div>
                <div className="signup-right-container">
                    <form action="">
                    <TextInput label={"First Name"} placeholder={"John Doe"} type={"text"} customIcon={personIcon} inputValue={firstName} onChangeHandler={onFirstNameChanged}/>
                    <TextInput label={"Last Name"} placeholder={"John Marvin"} type={"text"} customIcon={personIcon} inputValue={lastName} onChangeHandler={onLastNameChanged}/>
                    <TextInput label={"Email"} placeholder={"johnmarvin@domain.com"} type={"email"} customIcon={messageIcon} inputValue={email} onChangeHandler={onEmailChanged}/>
                    <TextInput label={"Password"} placeholder={"password"} type={"password"} customIcon={padlockIcon} inputValue={password} onChangeHandler={onPasswordChanged}/>
                    <Button buttonText={isLoading ? <Spinner name='sk-chase' color='white' fadeIn='none'/>: "Sign Up"} onClickHandler={buttonClicked}/>
                    </form>
                    
                    <p>Already have an account? <a href="#signin" className='link-for-singin'>Sign in</a></p>

                </div>
            </section>
        </main>

    )
}

export default Signup