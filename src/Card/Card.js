import React from 'react';

const Card = (props) => {

  return (
        <div>
          <img alt="card" src={props.image} />
          <h6 className="title">{props.title}</h6>
          <h6 className="description">{props.description}</h6>
        </div>
  )
};

export default Card;
