import React, { useEffect, useState } from 'react';
import './Cats.scss';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsAsync } from '../../redux/cats-reducer';
import Preloader from '../Preloader/Preloader';

const Cats = () => {
  const dispatch = useDispatch();
  const catsArr = useSelector((state) => state.cats.cats);
  const status = useSelector((state) => state.cats.status)
  const [statusLoading, setStatusLoading] = useState(status);
  const [cats, setCats] = useState([]);



  useEffect(() => {
    setCats(catsArr);
    setStatusLoading(status);

  }, [catsArr, status]);

  const handleButtonAppend = () => {
    dispatch(getCatsAsync());
  }

  return (
    <article className="cats">
      <div className="cats__cards-wrapper">
        {cats.length > 0 && cats.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
      {statusLoading === 'loading' ? <Preloader /> : (
        <button className="cats__button-append" onClick={handleButtonAppend}>... загружаем еще котиков ...</button>
      )}
    </article>
  );
};

export default Cats;