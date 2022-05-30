import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Card.scss';
import { addLikeAction } from '../../redux/likedCats-reducer';
import { showLikedCard } from '../../redux/cats-reducer';

const Card = ({ card}) => {
  const dispatch = useDispatch();

  const handleLikeButton = () => {
    dispatch(addLikeAction({
      id: card.id,
      url: card.url,
      isLiked: true,
    }));

    dispatch(showLikedCard(card.id))
  }

  return (
    <div className="card">
      <img className="card__image" src={card?.url} alt="картинка с котиком" />
      <button
        className={card.isLiked ? "card__button-like card__button-like_active" : "card__button-like"}
        onClick={handleLikeButton}
      >
      </button>
    </div>
  );
};

export default Card;