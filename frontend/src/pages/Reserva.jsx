
import { useState } from 'react';
import Navstu from '../components/Navstu';
import Styles from '../styles/Reserva.module.css';

const bloques = [
    '1-2', '3-4', '5-6', '7-8', 'Almuerzo','9-10', '11-12', '13-14', '15-16', '17-18', '19-20'
  ];

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];


function Reserva() {
    const [seleccionado, setSeleccionado] = useState('');
    /* Seleccionar más de 1 bloque
    const manejarClick = (dia, bloque) => {
        setSeleccionado(prev => ({
        ...prev,
        [`${dia}-${bloque}`]: !prev[`${dia}-${bloque}`]
        }));
    };*/

    const manejarClick = (dia, bloque) => {
        setSeleccionado(`${dia}-${bloque}`);
    };

    return (
        <div className={Styles.body}>
            <Navstu></Navstu>
            <p className={Styles.p}>Aquí se desarrolla la Reserva....</p>
            <div className={Styles.horario}>
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
            </div>
        </div>
    );
}

export default Reserva;
