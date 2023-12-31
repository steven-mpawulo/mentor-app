import React from 'react'
import Logo from '../../../images/Logo.png'
import accountIcon from '../../../images/accountIcon.png'
import './header.css'

const Header = () => {
  return (
    <header className='home-header'>
        <img src={Logo} alt="logo" />
        <div className="container-for-account">
            <span>My Account</span>
            <img src={accountIcon} alt="icon-for-account" className='account-icon' />
        </div>
    </header>
  )
}

export default Header