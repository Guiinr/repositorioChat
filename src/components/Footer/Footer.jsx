import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' }
  ];

  return (
    <footer className="footer">
      <p>Copyright © {new Date().getFullYear()} Web Design Mastery. All rights reserved.</p>
      <div className="footer__links">
        {socialLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.5 }}
          >
            <a href={link.url}>{link.name}</a>
          </motion.li>
        ))}
      </div>
    </footer>
  );
};

export default Footer;