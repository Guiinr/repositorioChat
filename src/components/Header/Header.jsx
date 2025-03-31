import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={`${styles.nav__links} ${styles.nav__left}`}>
          <li>
            <Link to="/" className={styles.logo}>Diesel</Link>
          </li>
          <li>
            <Link to="/about" className={styles.nav__link}>Sobre Nós</Link>
          </li>
          <li>
            <Link to="/shop" className={styles.nav__link}>Shop</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.nav__link}>Contato</Link>
          </li>
        </ul>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;