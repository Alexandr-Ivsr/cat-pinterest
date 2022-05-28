import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__links">
        <NavLink to="/" className="header__link">Все котики</NavLink>
        <NavLink to="/liked-cats" className="header__link">Любимые котики</NavLink>
      </div>
    </header>
  );
};

export default Header;