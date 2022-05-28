import React from 'react';
import './FavoriteCats.scss';
import Card from '../Card/Card';

const FavouriteCats = () => {
  return (
    <article className="liked-cats">
      <div className="liked-cats__wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </article>
  );
};

export default FavouriteCats;