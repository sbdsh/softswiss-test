import React from 'react';
import './Menu.scss';
import Item from './Item';

function Menu() {
  return (
    <nav className='header__menu'>
      <ul>
        <Item href='/' className='menu__item'>Home</Item>
        <Item href='/products' className='menu__item'>Products</Item>
        <Item href='/basket' className='menu__item menu__basket-link'>
          <span className='menu__basket-icon'></span>
        </Item>
      </ul>
    </nav>
  );
}

export default Menu;