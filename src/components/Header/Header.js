import React from 'react'
import './Header.css'
import logoRiotHeader from '../../assets/img/logo-riot.png'

const Header = () => {
    return (
        <header className="header-content">
            <img src={logoRiotHeader} alt="" />
        </header>
    )
}

export default Header;