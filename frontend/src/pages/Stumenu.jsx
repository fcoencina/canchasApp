
import React from 'react';
import Navstu from '../components/Navstu';
import Reservacard from '../components/Reservacard';
import Styles from '../styles/Stumenu.module.css';

const Stumenu = () => {
  return (
    <div className={Styles.body}>
      <Navstu></Navstu>
      <p className={Styles.p}>¡BIENVENIDO, User!</p>
      <article className={Styles.article}>
        <h1 className={Styles.h1}>Mis Reservas</h1>
        <section className={Styles.section}>
          <Reservacard></Reservacard>
          <Reservacard></Reservacard>
          <Reservacard></Reservacard>
          <Reservacard></Reservacard>
          <Reservacard></Reservacard>
          <Reservacard></Reservacard>
          <Reservacard></Reservacard>
          <Reservacard></Reservacard>
        </section>
      </article>
    </div>
  );
};

export default Stumenu;
