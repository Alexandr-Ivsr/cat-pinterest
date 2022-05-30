import React from 'react';
import './FavoriteCats.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const FavouriteCats = () => {
  const likedCats = useSelector((state) => state.likedCats.likedCats)

  return (
    <article className="liked-cats">
      <div className="liked-cats__wrapper">
        {likedCats.map((item) => (
          <Card
            key={item.id}
            card={item}
          />
        ))}
      </div>
    </article>
  );
};

export default FavouriteCats;