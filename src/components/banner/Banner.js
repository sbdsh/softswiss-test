import React from 'react';
import './Banner.scss';

function Banner({title, titleEmphasis, text, textEmphasis}) {
  return (
    <div className='banner'>
      <div className='banner__object'>
        <div className='banner__object-planets' />
      </div>
      <div className='banner__container'>        
        <h3 className='banner__title'>{title} <span className='banner__title--emphasis'>{titleEmphasis}</span></h3>
        <p className='banner__text'>{text} <span className='banner__text--emphasis'>{textEmphasis}</span></p>
        <button className='banner__button'>Learn more</button>
      </div>
    </div>
  );
}

export default Banner;