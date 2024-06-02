
// src/components/Header.jsx
import React from 'react';
import logo from '../assets/images/usmLogo.png'; // Asegúrate de tener un logo en la carpeta assets
import Styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;
