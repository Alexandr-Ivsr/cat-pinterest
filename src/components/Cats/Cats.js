import React, { useEffect, useState } from 'react';
import './Cats.scss';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';

const Cats = () => {
  const dispatch = useDispatch();
  const [cats, setCats] = useState([]);
  const catsArr = useSelector((state) => state.cats.cats);

  useEffect(() => {
    setCats(catsArr);

  }, [catsArr])

  return (
    <article className="cats">
      <div className="cats__cards-wrapper">
        {cats.length > 0 && cats.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
      <button className="cats__button-append">... загружаем еще котиков ...</button>
    </article>
  );
};

export default Cats;