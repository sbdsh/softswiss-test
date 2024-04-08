import React from 'react';
import './Header.scss';
import Logo from './logo/Logo';
import Nav from './nav/Nav';

function Header() {
  return (
    <header className='header'>
      <Logo />      
      <Nav />
    </header>
  );
}

export default Header;
