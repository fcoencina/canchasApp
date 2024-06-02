
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from '../styles/Welcome.module.css';

function Welcome() {
  return (
    <div className={styles.body}>
      <div className={styles.img}>
        <div className={styles.acronimoWrapper}>
          <p className={styles.acronimo}><b>SPRID</b><br />Sistema para reserva de instalaciones deportivas</p>
        </div>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Acceso</h1>
          <Link to="/login">
            <button className={styles.button}>Estudiantes</button>
          </Link>
          <Link to="/login">
            <button className={styles.button}>Administración</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
