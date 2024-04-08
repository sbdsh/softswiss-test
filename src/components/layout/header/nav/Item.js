import React from 'react';
import './Item.scss';

function Item({ href, children, className }) {
  return (
    <li className={`item ${className || ''}`.trim()}>
      <a href={href} className="item__link">
        {children}
      </a>
    </li>
  );
}

export default Item;