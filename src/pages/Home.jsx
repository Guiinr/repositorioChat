import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import CartIcon from '../components/icons/CartIcon';
import LoginIcon from '../components/icons/LoginIcon';
import ProfileIcon from '../components/icons/ProfileIcon';
import useScrollReveal from '../hooks/useScrollReveal';


const Home = () => {
    useScrollReveal(); // Usando o hook personalizado

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={`${styles.navLinks} ${styles.navLeft}`}>
                    <li><Link to="/" className={styles.logo}>Diesel</Link></li>
                    <li><Link to="/about">Sobre Nós</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>

                <ul className={`${styles.navLinks} ${styles.navRight}`}>
                    <li><Link to="/cart"><CartIcon /></Link></li>
                    <li><Link to="/login"><LoginIcon /></Link></li>
                    <li><Link to="/profile"><ProfileIcon /></Link></li>
                </ul>
            </nav>

            <span className={styles.letterS}>A</span>
            <img
                src="/assets/ivan-removebg-preview.png"
                alt="header"
                className={styles.headerImage}
            />

            <h4 className={styles.textLeft}>IVAN</h4>
            <h4 className={styles.textRight}>RTS</h4>

            <button className={`${styles.btn} ${styles.explore}`}>EXPLORE MORE</button>

            <h5 className={styles.feature1}>Diesel</h5>
            <h5 className={styles.feature2}>Watches</h5>
            <h5 className={styles.feature3}>Tough</h5>
            <h5 className={styles.feature4}>Modern</h5>

            <footer className={styles.footer}>
                <p>Copyright © 2024 Web Design Mastery. All rights reserved.</p>
                <div className={styles.footerLinks}>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </div>
            </footer>
        </div>
    );
};

export default Home;