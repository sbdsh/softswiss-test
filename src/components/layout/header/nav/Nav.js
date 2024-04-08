import React from 'react';
import Burger from './Burger';
import Menu from './Menu';
import './Nav.scss';

function Nav() {
  return (
    <div className='header__nav'>
      <Burger />
      <Menu />
    </div>
  );
}

export default Nav;