import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Cats from '../Cats/Cats';
import FavouriteCats from '../FavoriteCats/FavoriteCats';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Cats />}
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
