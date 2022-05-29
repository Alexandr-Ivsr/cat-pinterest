import React from 'react';
import './Card.scss';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img className="card__image" src={card?.url} alt="картинка с котиком" />
      <button className="card__button-like">
      </button>
    </div>
  );
};

export default Card;