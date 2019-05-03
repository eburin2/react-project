import React from 'react';

const Card = (props) => {

  return (
            
              <div className="card-container">
                <img alt="card" src={props.image} />
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
              </div>

  )

};

export default Card;
