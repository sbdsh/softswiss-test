import React from 'react';
import './Card.scss';

function Card({ title, text }) {
  return (
    <div className='card'>
      <h3 className='card__title'>{title}</h3>
      <p className='card__text'>{text}</p>
      <button className='card__button'>Learn more</button>
    </div>
  );
}

export default Card;