import React from 'react';
import './Card.scss';
import catImage from '../../images/cat2.png';
import likeIcon from '../../images/like-icon.svg';

const Card = () => {
  return (
    <div className="card">
      <img className="card__image" src={catImage} alt="картинка с котиком" />
      <button className="card__button-like">
      </button>
    </div>
  );
};

export default Card;