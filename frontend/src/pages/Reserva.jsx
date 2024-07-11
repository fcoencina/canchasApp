
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navstu from '../components/Navstu';
import Styles from '../styles/Reserva.module.css';
import Champions from '../assets/images/champions.jpg';
import Campus from '../assets/images/campus-san-joaquin.jpg';
import { useAuthContext } from '../contexts/AuthContext';

const bloques = [
    '1-2', '3-4', '5-6', '7-8', 'Almuerzo', '9-10', '11-12', '13-14', '15-16', '17-18', '19-20'
];

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const imagenesInstalaciones = {
    'Opc1': Champions,
    'Opc2': Campus,
    // Agrega el resto de imágenes para cada opción
};

function Reserva() {
    const { userID } = useAuthContext();
    const [selectedValue, setSelectedValue] = useState(null);
    const [seleccionado, setSeleccionado] = useState('');
    const [instalaciones, setInstalaciones] = useState([]);
    const [imagen, setImagen] = useState(Champions);
    const navigate = useNavigate();

    useEffect(() => {
        // Función para cargar instalaciones desde un endpoint
        const fetchInstalaciones = async () => {
            try {
                const response = await fetch('http://localhost:9000/getinstalaciones');
                const data = await response.json();
                setInstalaciones(data);
            } catch (error) {
                console.error("Error fetching instalaciones:", error);
            }
        };

        fetchInstalaciones();
    }, []);

    const handleChange = (event) => {
        const instalacion = instalaciones.find(inst => inst.name === event.target.value);
        setSelectedValue(instalacion);
        setImagen(imagenesInstalaciones[instalacion.name] || Champions);
    };

    const manejarClick = (dia, bloque) => {
        setSeleccionado(`${dia}-${bloque}`);
    };

    const handleReservar = async () => {
        const [dia, bloque1, bloque2] = seleccionado.split('-');
        const reservaData = {
            userId: userID,
            instalacionId: selectedValue.id,
            fecha: dia,
            bloque: bloque1 + "-" +bloque2,
            estado: "reservada",
            instalacion: selectedValue.name
        };

        try {
            const response = await fetch('http://localhost:9000/createreserva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservaData),
            });

            if (response.ok) {
                navigate("/stumenu"); // Redirigir a la página de reservas
            } else {
                console.error("Error al reservar:", await response.text());
            }
        } catch (error) {
            console.error("Error al reservar:", error);
        }
    };

    return (
        <div className={Styles.body}>
            <Navstu />
            <article className={Styles.article}>
                <h1 className={Styles.h1}>Realizar Reserva</h1>
                <section className={Styles.section}>
                    <form>
                        <h1 className={Styles.algo}>Seleccione Instalación Deportiva</h1>
                        <label className={Styles.label}></label>
                        <div className={Styles.radioGroup}>
                            {instalaciones.map((instalacion) => (
                                <label
                                    key={instalacion.id}
                                    className={`${Styles.radioLabel} ${selectedValue && selectedValue.id === instalacion.id ? Styles.selected : ''}`}
                                >
                                    <input
                                        type="radio"
                                        value={instalacion.name}
                                        checked={selectedValue && selectedValue.name === instalacion.name}
                                        onChange={handleChange}
                                        className={Styles.radioInput}
                                    />
                                    {instalacion.name}
                                </label>
                            ))}
                        </div>
                    </form>
                    <div>
                        <h1 className={Styles.algo}>Fotografía</h1>
                        <img className={Styles.fotografia} src={imagen} alt="Fotografía de la instalación" />
                    </div>
                    <div className={Styles.horario}>
                        <h1 className={Styles.algo}>Seleccione Bloques</h1>
                        <table className={Styles.tabla}>
                            <thead>
                                <tr>
                                    <th className={Styles.cabecera}>Bloques</th>
                                    {dias.map(dia => (
                                        <th key={dia} className={Styles.cabecera}>{dia}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {bloques.map(bloque => (
                                    <tr key={bloque}>
                                        <td className={Styles.cabecera}>{bloque}</td>
                                        {dias.map(dia => (
                                            <td
                                                key={`${dia}-${bloque}`}
                                                className={`${Styles.celda} ${seleccionado === `${dia}-${bloque}` ? Styles.celdaSeleccionada : ''}`}
                                                onClick={() => manejarClick(dia, bloque)}
                                            ></td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <input type="text" value={`${selectedValue ? selectedValue.name : ''}, ${seleccionado}`} className={Styles.seleccion} readOnly />
                            <button className={Styles.button} onClick={handleReservar}>Reservar</button>
                        </div>
                    </div>
                    <div>
                        <h1 className={Styles.algo}>Ubicación</h1>
                        <img className={Styles.fotografia} src={Campus} alt="Campus San Joaquín!" />
                    </div>
                </section>
            </article>
        </div>
    );
}

export default Reserva;
