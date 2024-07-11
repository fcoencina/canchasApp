
import { useState, useEffect } from 'react';
import Navadmin from '../components/Navadmin';
import Styles from '../styles/Adminmenu.module.css';
import { useAuthContext } from '../contexts/AuthContext';
import Instalacioncard from '../components/Instalacioncard';

const Adminmenu = () => {
  const { userID, username } = useAuthContext();
  const [instalaciones, setInstalaciones] = useState([]);

  useEffect(() => {
    const fetchInstalaciones = async () => {
      try {
        const response = await fetch(`http://localhost:9000/getinstalaciones`);
        const data = await response.json();
        setInstalaciones(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchInstalaciones();
  }, [userID]);

  const handleDelete = async (instalacionId) => {
    try {
      await fetch(`http://localhost:9000/deleteinstalacion/${instalacionId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      // Actualiza el estado para eliminar la reserva de la lista
      setInstalaciones((prevInstalaciones) => prevInstalaciones.filter((instalacion) => instalacion.id !== instalacionId));
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <div className={Styles.body}>
      <Navadmin></Navadmin>
      <p className={Styles.p}>¡BIENVENIDO, {username}!</p>
      <article className={Styles.article}>
        <h1 className={Styles.h1}>Instalaciones</h1>
        <section className={Styles.section}>
          {instalaciones.map((instalacion, index) => (
            <Instalacioncard key={index} instalacion={instalacion} onDelete={handleDelete} />
          ))}
        </section>
      </article>
    </div>
  );
};

export default Adminmenu;
