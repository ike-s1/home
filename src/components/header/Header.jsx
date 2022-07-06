import React from 'react';
import '../../scss/components/header.scss';

function Header() {
  return (
    <header className='header'>
        <div className="header__logo">
            <img src="/images/header/logo.png" alt="void gods" />
        </div>
        <div className="header__info">
            <div className="header__socials">
              <a href="#">
              <img src="/icons/twitter.png" alt="twitter" className="header-icon" />
              </a>
              <a href="#">
                <img src="/icons/discord.png" alt="discord" className="header-icon" />
              </a>
            </div>
            <button className="header__list-btn">
                White list
            </button>
        </div>
    </header>
  )
}

export default Header