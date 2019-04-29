import React from 'react';

const Card = (props) => {

  return (
        <div className="flex-container">
          <img alt="card" src={props.image} />
          <p className="title">{props.title}</p>
        </div>
  )
};

export default Card;
