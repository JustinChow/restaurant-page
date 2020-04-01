import React from 'react';

export const Content = (props) => (
  <div className="menu-item">
    <p className="menu-item-name">{props.name}</p>
    <p className="menu-item-price">{props.price}</p>
  </div>
);

export default Content;