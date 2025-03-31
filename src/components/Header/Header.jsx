import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CartIcon from '../icons/CartIcon';
import LoginIcon from '../icons/LoginIcon';
import ProfileIcon from '../icons/ProfileIcon';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li><Link to="/" className={styles.logo}>Diesel</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
          <ul className={styles.navLinks}>
            <li><Link to="/cart"><CartIcon /></Link></li>
            <li><Link to="/login"><LoginIcon /></Link></li>
            <li><Link to="/profile"><ProfileIcon /></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;