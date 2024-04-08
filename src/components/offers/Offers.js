import React from 'react';
import './Offers.scss';
import Card from './card/Card';

const cardData = [
  { title: 'Move the borders of reality!', text: 'Go on a space adventure' },
  { title: 'Space is not just stars and planets', text: 'It is a majestic journey to' },
  { title: 'For those who dream of stars', text: 'Our offer: make your dream come true' },
  { title: 'Fulfill your fantastic dreams', text: 'Space has never been so close' },
];

function Offers() {
  return (
    <div className='offers'>
      <h2 className='offers__title'>Our Special Offers</h2>
      <div className='offers__cards'>
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
}

export default Offers;