import React from 'react';
import './Info.scss';

function Info({ title, text, moreText }) {
  return (
    <div className='info'>
      <h2 className='info__title'>{title}</h2>
      <p className='info__text'>{text}</p>
      <input type='checkbox' id='readMore' className='info__read-more-checkbox' />
      <label htmlFor='readMore' className='info__link'>Read more</label>
      <p className='info__more-text'>{moreText}</p>
    </div>
  );
}

export default Info;