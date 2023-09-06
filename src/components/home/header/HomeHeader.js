import React from 'react'
import Logo from '../../../images/Logo.png'
import accountIcon from '../../../images/accountIcon.png'

const HomeHeader = () => {
  return (
    <header className='home-header'>
        <img src={Logo} alt="logo" />
        <div className="container-for-account">
            <span>My Account</span>
            <img src={accountIcon} alt="icon-for-account" />
        </div>
    </header>
  )
}

export default HomeHeader