
import Navstu from '../components/Navstu';
import Reservacard from '../components/Reservacard';
import Styles from '../styles/Stumenu.module.css';
import { useAuthContext } from '../contexts/AuthContext';

const Stumenu = () => {
  const { userID, username } = useAuthContext();

  return (
    <div className={Styles.body}>
      <Navstu></Navstu>
      <p className={Styles.p}>¡BIENVENIDO, {username + userID}!</p>
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
