
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Universidad Técnica Federico Santa María</p>
      <p className={styles.link} onClick={() => window.location.href = 'https://www.usm.cl'}>USM.CL</p>
    </footer>
  );
};

export default Footer;


