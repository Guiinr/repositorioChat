import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <h1>Entre em Contato</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem:</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.btn}>
              Enviar
            </button>
          </form>
        </div>
        
        <div className={styles.contactImage}>
          <img 
            src="/assets/ivan-removebg-preview.png" 
            alt="Imagem de Contato" 
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;