import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Cats from '../Cats/Cats';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Cats />}
        />
      </Routes>
    </div>
  );
}

export default App;
