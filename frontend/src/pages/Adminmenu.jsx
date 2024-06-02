
import React from 'react';
import Navadmin from '../components/Navadmin';
import Styles from '../styles/Adminmenu.module.css';

const Stumenu = () => {
  return (
    <div className={Styles.body}>
      <Navadmin></Navadmin>
      <p className={Styles.p}>¡BIENVENIDO, Admin!</p>
    </div>
  );
};

export default Stumenu;
