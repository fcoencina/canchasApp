
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Login.module.css'; // Importa las clases CSS Modules


const Login = () => {
  return (
    <div className={styles.body}>
      <div className={styles.img}>
        <Header></Header>
        <form className={styles.form}>
            <h1 className={styles.title}>Inicio Sesión</h1>
          <div className={styles.element}>
            <label>Usuario</label>
            <br></br>
            <input />
          </div>
          <div className={styles.element}>
            <label>Contraseña</label>
            <br></br>
            <input />
          </div>
          <div className={styles.element}>
            <button className={styles.button}>Ingresar</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;

