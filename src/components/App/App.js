import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Cats from '../Cats/Cats';
import FavouriteCats from '../FavoriteCats/FavoriteCats';
import { useDispatch } from 'react-redux';
import { getCatsAsync } from '../../redux/cats-reducer';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsAsync());
  }, [])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Cats />
          }
        />
        <Route
          path="/liked-cats"
          element={<FavouriteCats />}
        />
      </Routes>
    </div>
  );
}

export default App;
