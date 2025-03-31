import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="container">
      <Header />
      
      <span className="letter-s">A</span>
      <img src="/assets/ivan-removebg-preview.png" alt="header" />
      
      <motion.h4 
        className="text__left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        IVAN
      </motion.h4>
      
      <motion.h4 
        className="text__right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        RTS
      </motion.h4>
      
      <motion.button 
        className="btn explore"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EXPLORE MORE
      </motion.button>
      
      <h5 className="feature-1">Diesel</h5>
      <h5 className="feature-2">Watches</h5>
      <h5 className="feature-3">Tough</h5>
      <h5 className="feature-4">Modern</h5>
      
      <Footer />
    </div>
  );
};

export default Home;