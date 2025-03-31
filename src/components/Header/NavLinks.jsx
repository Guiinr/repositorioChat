import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon, LoginIcon, ProfileIcon } from '../icons';

const NavLinks = () => {
  return (
    <ul className="nav__links nav__right">
      <li>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </li>
      <li>
        <Link to="/login">
          <LoginIcon />
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <ProfileIcon />
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;