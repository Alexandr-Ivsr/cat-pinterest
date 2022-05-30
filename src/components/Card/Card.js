import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Card.scss';
import { addLikeAction, deleteFromLikedAction } from '../../redux/likedCats-reducer';
import { showLikedCardAction, removeLikeAction } from '../../redux/cats-reducer';

const Card = ({ card }) => {
  const dispatch = useDispatch();

  const handleLikeButton = () => {
    dispatch(addLikeAction({
      id: card.id,
      url: card.url,
      isLiked: true,
    }));

    dispatch(showLikedCardAction(card.id))
  }

  const handleDislikeButton = () => {
    dispatch(removeLikeAction(card.id));
    dispatch(deleteFromLikedAction(card.id));

  }

  return (
    <div className="card">
      <img className="card__image" src={card?.url} alt="картинка с котиком" />
      <button
        className={card.isLiked ? "card__button-like card__button-like_active" : "card__button-like"}
        onClick={card.isLiked ? handleDislikeButton : handleLikeButton}
      >
      </button>
    </div>
  );
};

export default Card;