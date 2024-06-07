
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navstu from '../components/Navstu';
import Styles from '../styles/Reserva.module.css';
import Champions from '../assets/images/champions.jpg';
import Campus from '../assets/images/campus-san-joaquin.jpg';

const bloques = [
    '1-2', '3-4', '5-6', '7-8', 'Almuerzo', '9-10', '11-12', '13-14', '15-16', '17-18', '19-20'
];

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];


function Reserva() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [seleccionado, setSeleccionado] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

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
            <article className={Styles.article}>
                <h1 className={Styles.h1}>Realizar Reserva</h1>
                <section className={Styles.section}>
                    <form>
                        <h1 className={Styles.algo}>Seleccione Instalación Deportiva</h1>
                        <label className={Styles.label}></label>
                        <div className={Styles.radioGroup}>
                            {['Opc1', 'Opc2', 'Opc3', 'Opc4', 'Opc5', 'Opc6'].map((fruta) => (
                                <label
                                    key={fruta}
                                    className={`${Styles.radioLabel} ${selectedValue === fruta ? Styles.selected : ''}`}
                                >
                                    <input
                                        type="radio"
                                        value={fruta}
                                        checked={selectedValue === fruta}
                                        onChange={handleChange}
                                        className={Styles.radioInput}
                                    />
                                    {fruta.charAt(0).toUpperCase() + fruta.slice(1)}
                                </label>
                            ))}
                        </div>
                    </form>
                    <div>
                        <h1 className={Styles.algo}>Fotografía</h1>
                        <img className={Styles.fotografia} src={Champions} alt="Champions!" />
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
                            <input type="text" value={`${selectedValue}, ${seleccionado}`} className={Styles.seleccion} readOnly></input>
                            <Link>
                                <button className={Styles.button}>Reservar</button>
                            </Link>
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
