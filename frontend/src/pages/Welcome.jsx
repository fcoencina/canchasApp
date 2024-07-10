
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Styles from '../styles/Welcome.module.css';

function Welcome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={Styles.body}>
      <div className={Styles.img}>
        <div className={Styles.acronimoWrapper}>
          <p className={Styles.acronimo}><b>SPRID</b><br />Sistema para reserva de instalaciones deportivas</p>
        </div>
        <div className={`${Styles['formContainer']} ${isVisible ? Styles['formContainer-fade-in-active'] : ''}`}>
          <h1 className={Styles.title}>Acceso</h1>
          <Link to="/login/student">
            <button className={Styles.button}>Estudiantes</button>
          </Link>
          <Link to="/login/admin">
            <button className={Styles.button}>Administración</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
