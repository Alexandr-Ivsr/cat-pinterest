import React from 'react';
import './Cats.scss';
import Card from '../Card/Card';

const AllCats = () => {
  return (
    <article className="cats">
      <div className="cats__cards-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="cats__button-append">... загружаем еще котиков ...</button>
    </article>
  );
};

export default AllCats;