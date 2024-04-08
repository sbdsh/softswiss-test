import React from 'react';
import './Burger.scss';
import Item from './Item';

function Burger() {
  return (
    <>
      <input type='checkbox' id='burger-toggle' className='burger__checkbox' />
      <label htmlFor='burger-toggle' className='burger__label'></label>
      <div className='burger__menu'>
        <label htmlFor='burger-toggle' className='burger__overlay'></label>
        <ul>
          <Item href='/' className='burger__item'>Home</Item>
          <Item href='/products' className='burger__item'>Products</Item>
          <Item href='/basket' className='burger__item burger__basket-link'>
            <span className='burger__basket-icon'></span>
          </Item>
        </ul>
      </div>
    </>
  );
}

export default Burger;