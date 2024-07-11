
import { useState, useEffect } from 'react';
import Navstu from '../components/Navstu';
import Reservacard from '../components/Reservacard';
import Styles from '../styles/Stumenu.module.css';
import { useAuthContext } from '../contexts/AuthContext';

const Stumenu = () => {
  const { userID, username } = useAuthContext();
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await fetch(`http://localhost:9000/getreservasbyuser/${userID}`);
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservas();
  }, [userID]);

  const handleDelete = async (reservaId) => {
    try {
      await fetch(`http://localhost:9000/deletereserva/${reservaId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // Actualiza el estado para eliminar la reserva de la lista
      setReservas((prevReservas) => prevReservas.filter((reserva) => reserva.id !== reservaId));
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <div className={Styles.body}>
      <Navstu />
      <p className={Styles.p}>¡BIENVENIDO, {username}!</p>
      <article className={Styles.article}>
        <h1 className={Styles.h1}>Mis Reservas</h1>
        <section className={Styles.section}>
          {reservas.map((reserva, index) => (
            <Reservacard key={index} reserva={reserva} onDelete={handleDelete} />
          ))}
        </section>
      </article>
    </div>
  );
};

export default Stumenu;

