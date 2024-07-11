
import Styles from '../styles/Instalacioncard.module.css';
import Image from '../assets/images/tiburon.jpeg';

const Instalacioncard = ({ instalacion, onDelete }) => {
    const handleDelete = () => {
      onDelete(instalacion.id); // Llama a la función onDelete pasando el id de la reserva
    };

    return (
      <div className={Styles.card}>
        <img src={Image} alt="Pic" className={Styles.image} />
        <div className={Styles.content}>
          <h2 className={Styles.title}>{instalacion.name}</h2>
          <p className={Styles.description}>{instalacion.tipo}</p>
          <p className={Styles.description}>{instalacion.ubicacion}</p>
          <p className={Styles.description}>{instalacion.disponibilidad}</p>
          <div className={Styles.buttons}>
            <button className={Styles.button} onClick={handleDelete}>Eliminar</button>
            <button className={Styles.button}>Editar</button>
          </div>
        </div>
      </div>
    );
  };

  export default Instalacioncard;
