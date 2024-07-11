
import Styles from '../styles/Reservacard.module.css';
import Image from '../assets/images/tiburon.jpeg';

const Reservacard = ({ reserva, onDelete }) => {
    const handleDelete = () => {
      onDelete(reserva.id); // Llama a la función onDelete pasando el id de la reserva
    };

    return (
      <div className={Styles.card}>
        <img src={Image} alt="Pic" className={Styles.image} />
        <div className={Styles.content}>
          <h2 className={Styles.title}>{reserva.instalacion}</h2>
          <p className={Styles.description}>{reserva.fecha}</p>
          <p className={Styles.description}>{reserva.bloque}</p>
          <p className={Styles.description}>{reserva.estado}</p>
          <div className={Styles.buttons}>
            <button className={Styles.button} onClick={handleDelete}>Eliminar Reserva</button>
          </div>
        </div>
      </div>
    );
  };

  export default Reservacard;


