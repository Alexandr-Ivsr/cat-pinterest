import React, { useEffect, useState } from 'react';
import './Cats.scss';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsAsync } from '../../redux/cats-reducer';
import Preloader from '../Preloader/Preloader';

const Cats = () => {
  const dispatch = useDispatch();
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const catsArr = useSelector((state) => state.cats.cats);

  useEffect(() => {
    setCats(catsArr);

  }, [catsArr])

  const handleButtonAppend = () => {
    setIsLoading(true);
    try {
      dispatch(getCatsAsync());
      setIsLoading(false);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <article className="cats">
      <div className="cats__cards-wrapper">
        {cats.length > 0 && cats.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
      {isLoading && <Preloader />}
      {!isLoading && <button className="cats__button-append" onClick={handleButtonAppend}>... загружаем еще котиков ...</button>}
    </article>
  );
};

export default Cats;